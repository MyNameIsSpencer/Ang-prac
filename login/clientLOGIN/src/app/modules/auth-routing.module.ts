// import { CommonModule } from '@angular/common';
import { AuthGuard } from './../guards/auth.guard';
import { RegisterComponent } from '../components/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';

// to make use of this, add to app.module.ts in imports & then in app.component.html
//  to add another route >>> { path: 'pathtext', component: ComponentUsed, otherOptions: ~~~ },
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule {}
