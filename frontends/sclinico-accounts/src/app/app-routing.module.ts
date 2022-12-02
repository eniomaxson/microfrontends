import { NotFoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './accounts/pages/login/login.component';
import { NgModule, InjectionToken } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-then/:returnURL', component: LoginComponent },
  {
    path: 'externalRedirect',
    resolve: {
      url: externalUrlProvider,
    },
    // We need a component here because we cannot define the route otherwise
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/accounts',
    },
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl: string = route.paramMap.get('externalUrl') || '';
        window.open(externalUrl, '_self');
      },
    },
  ],
})
export class AppRoutingModule {}
