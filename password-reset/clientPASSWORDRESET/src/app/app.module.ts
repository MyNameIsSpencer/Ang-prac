import { AuthRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [ AppComponent, LoginComponent, ForgotPasswordComponent ],
  imports: [ BrowserModule, AuthRoutingModule, ReactiveFormsModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
