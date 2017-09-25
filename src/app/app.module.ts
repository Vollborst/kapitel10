import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {TaskService} from './services/task-service/task-service';
import {AppComponent} from './app.component';
import {Title, BrowserModule} from '@angular/platform-browser';
import {LoginService} from './services/login-service/login-service';
import {routingComponents, appRouting, routingProviders} from './app.routing';
import {APPLICATION_VALIDATORS} from './models/app-validators';
import {ShowErrorComponent} from './show-error/show-error.component';
import {AUTH_ENABLED} from './app.tokens';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,
            appRouting],
  entryComponents: [AppComponent],
  providers: [
    routingProviders,
    LoginService,
    Title,
    {provide: AUTH_ENABLED, useValue: true},
    TaskService
  ],
  declarations: [AppComponent,
    routingComponents,
    ShowErrorComponent,
    APPLICATION_VALIDATORS],
  bootstrap: [AppComponent]
})
export class AppModule {
}
