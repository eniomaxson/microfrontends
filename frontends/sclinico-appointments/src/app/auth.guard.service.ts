import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { isAuthenticated } from '@spms/shared';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    
    if (!isAuthenticated()) {
      
      this.router.navigate([
        '/externalRedirect',
        { externalUrl: `/accounts/login-then/appointments` },
      ]);

      return false;
    }

    return true;
  }
}
