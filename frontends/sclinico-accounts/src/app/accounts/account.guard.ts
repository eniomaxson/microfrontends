import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AccountGuard implements CanActivate {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    var active = false;
    return this.accountService
      .getUserInfo()
      .toPromise()
      .then((result) => {
        if (result) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      })
      .catch(() => {
        this.router.navigate(['login']);
        return false;
      });
  }
}
