import { AuthRoutingModule } from './modules/auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [ AppComponent, LoginComponent, NavbarComponent, RegisterComponent ],
  imports: [ BrowserModule, AuthRoutingModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
