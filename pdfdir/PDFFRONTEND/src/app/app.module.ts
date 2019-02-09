import { WordService } from './services/word.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FileUploadModule } from 'ng2-file-upload';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  declarations: [ AppComponent, HomeComponent ],
  imports: [ BrowserModule, RouterModule.forRoot(routes), FileUploadModule, HttpClientModule ],
  exports: [RouterModule],
  providers: [WordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
