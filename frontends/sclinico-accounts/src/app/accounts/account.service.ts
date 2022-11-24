import {
  JwtTokenResponseModel,
  UserInfoResponseModel,
  LoginRequestModel,
} from './account.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class AccountService {
  private baseUrl = environment.keyCloackBaseUrl;
  public isAuthenticated: boolean = false;

  private httpHeaders = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded'
  );

  constructor(private httpClient: HttpClient) {}

  authenticate(login: LoginRequestModel): Observable<JwtTokenResponseModel> {
    var body = `client_id=myclient&grant_type=password&client_secret=${environment.keyCloakClientSecret}&scope=openid&username=${login.username}&password=${login.password}`;

    return this.httpClient.post<JwtTokenResponseModel>(
      `${this.baseUrl}/token`,
      body,
      { headers: this.httpHeaders }
    );
  }

  getUserInfo(): Observable<UserInfoResponseModel> {
    return this.httpClient.get<UserInfoResponseModel>(
      `${this.baseUrl}/userinfo`
    );
  }
}
