import { LoginComponent } from './accounts/pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { 
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ]
})
export class AppRoutingModule {}
