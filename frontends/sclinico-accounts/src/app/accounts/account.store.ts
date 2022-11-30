import {
  JwtTokenResponseModel,
  UserInfoResponseModel,
  LoginRequestModel,
} from './account.models';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from './account.service';
import { getAuthData, setAuthData } from '@spms/shared';

interface State {
  token: JwtTokenResponseModel;
  userInfo: UserInfoResponseModel;
}

@Injectable()
export class AccountStore {
  private subject = new BehaviorSubject<State>({} as State);
  private store = this.subject.asObservable();

  constructor(private accountService: AccountService, private router: Router) {
    let storedState = getAuthData();

    if (storedState) {
      this.subject = new BehaviorSubject<State>(storedState as State);
    }
  }

  get value() {
    return this.subject.value;
  }

  set(name: string, state: any) {
    let data = {
      ...this.value,
      [name]: state,
    };
    this.subject.next(data);

    setAuthData(data);
  }

  get accessToken() {
    return this.value?.token?.access_token;
  }

  get currentUser() {
    return this.value.userInfo;
  }

  get isAuthenticated() {
    return this.value?.token?.access_token != undefined;
  }

  authenticate(login: LoginRequestModel) {
    this.accountService.authenticate(login).subscribe((token) => {
      this.set('token', token);

      this.accountService.getUserInfo().subscribe((userInfo) => {
        this.set('userInfo', userInfo);

        this.router.navigate([
          '/externalRedirect',
          { externalUrl: '/appointments' },
        ]);
        
      });
    });
  }
}
