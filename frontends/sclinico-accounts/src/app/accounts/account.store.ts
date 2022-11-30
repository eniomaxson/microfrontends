import { AccountService } from './account.service';
import {
  JwtTokenResponseModel,
  UserInfoResponseModel,
  LoginRequestModel,
} from './account.models';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface State {
  token: JwtTokenResponseModel;
  userInfo: UserInfoResponseModel;
}

@Injectable()
export class AccountStore {
  private subject = new BehaviorSubject<State>({} as State);
  private store = this.subject.asObservable();

  constructor(private accountService: AccountService, private router: Router) {}

  get value() {
    return this.subject.value;
  }

  set(name: string, state: any) {
    let data = {
      ...this.value,
      [name]: state,
    }
    this.subject.next(data);
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

  /* authenticate(login: LoginRequestModel) {

    this.accountService.authenticate(login).subscribe((token) => {
      this.set('token', token);
      this.accountService.getUserInfo().subscribe((userInfo) => {
        this.set('userInfo', userInfo);
      });
    });

  } */
  authenticate(login: LoginRequestModel) {
    this.accountService.authenticate(login).subscribe(
      (token) => {
        console.log(token);
        this.set('token', token);
        window.localStorage.setItem('token', JSON.stringify(token));
        this.accountService.getUserInfo().subscribe((userInfo) => {
          this.set('userInfo', userInfo);
          window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
          this.router.navigate(['units']);
        });
      },
      (err) => {
        return 1;
      }
    );
  }
}
