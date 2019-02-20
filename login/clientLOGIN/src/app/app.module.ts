import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AuthRoutingModule } from './modules/auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [ AppComponent, LoginComponent, NavbarComponent, RegisterComponent ],
  imports: [ BrowserModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  providers: [AuthService, TokenService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
