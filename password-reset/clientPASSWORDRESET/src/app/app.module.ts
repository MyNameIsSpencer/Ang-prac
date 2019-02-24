import { AuthService } from './services/auth.services';
import { AuthRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [ AppComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent ],
  imports: [ BrowserModule, AuthRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
