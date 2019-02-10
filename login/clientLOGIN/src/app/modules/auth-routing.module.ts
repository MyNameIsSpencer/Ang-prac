// import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';

// to make use of this, add to app.module.ts in imports & then in app.component.html
//  to add another route >>> { path: 'pathtext', component: ComponentUsed, otherOptions: ~~~ },
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
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
