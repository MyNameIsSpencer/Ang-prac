import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: tokenService
  ) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register() {
    this.authService.registerUser(this.regForm.value).subscribe(
      (data: Auth) => {
        console.log(data.user);
        this.tokenService.SetToken(data.token);
        this.regForm.reset();
        setTimeout(() => {
          console.log(this.tokenService.GetToken());
        }, 2000);
      },
      data => { console.log(data); },
      err => { console.log(err); }
    );
  }
}
