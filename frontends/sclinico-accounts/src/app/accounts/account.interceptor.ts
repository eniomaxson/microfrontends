import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountStore } from './account.store';

@Injectable()
export class AccountInterceptor implements HttpInterceptor {
  constructor(private accountStore: AccountStore) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.accountStore.isAuthenticated && !request.url.endsWith('/token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.accountStore.accessToken}`,
        },
      });
    }
    return next.handle(request);
  }
}
