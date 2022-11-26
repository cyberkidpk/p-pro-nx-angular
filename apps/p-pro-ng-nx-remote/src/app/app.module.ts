import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponentRemote } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes =[{ 
  path:'remote/client-success',
  component: TestComponent,
},
{
path:'remote/careers',
component: NxWelcomeComponent,
}]

@NgModule({
  declarations: [AppComponentRemote, NxWelcomeComponent, TestComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponentRemote],
  exports: [AppComponentRemote, NxWelcomeComponent],
})
export class AppModuleRemote {}
