import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import {AppModuleRemote } from '../../../p-pro-ng-nx-remote/src/app/app.module'



@NgModule({
  declarations: [AppComponent,NxWelcomeComponent],
  imports: [BrowserModule, AppModuleRemote],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
