import { Auth } from './../../models/auth-model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

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
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.regForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // this.tokenService.DeleteToken();
  }

  register() {
    this.authService.registerUser(this.regForm.value).subscribe(
      (data: Auth) => {
        console.log(data);
        this.tokenService.SetToken(data.token);
        this.regForm.reset();
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
        // setTimeout(() => {
        //   console.log(this.tokenService.GetToken());
        // }, 2000);
      },
      err => { console.log(err); }
    );
  }
}
