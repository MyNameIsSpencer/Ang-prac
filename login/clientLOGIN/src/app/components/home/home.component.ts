import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers()
      .subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      }
  }

}
