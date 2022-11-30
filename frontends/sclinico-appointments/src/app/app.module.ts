import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountStorageManager } from '@spms/shared';
import { ACCOUNT_STORAGE } from './account.storage.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: ACCOUNT_STORAGE,
      useClass: AccountStorageManager,
      useFactory: () => new AccountStorageManager(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
