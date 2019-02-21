import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: authService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.authService.loginUser(this.loginForm.value).subscribe(
      (data: Auth) => {
        this.tokenService.SetToken(data.token);
        setTimeout(() => {
          this.loginForm.reset();
          this.router.navigate(['/home']);
        }, 2000)
      },
      err => {
        console.log(err);
      }
    );
  }
}
