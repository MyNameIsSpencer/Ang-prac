import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: FormGroup;
  token: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      console.log(param);
      this.token = param.token;
    });
    this.resetPassword = this.fb.group({
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    }, {
      validator: this.validatePassword.bind(this);
    });
  }

  reset() {
    // because only need password from value, we add  .password to .value
    this.authService.resetPassword(this.resetPassword.value.password, this.token)
    // Since this is an observable, we need to subscribe
    .subscribe(data => {
      console.log(data);
    },
    err => {
      console.log(err);
    });
  }

  validatePassword(pwdFormGroup: FormGroup) {
    const password = pwdFormGroup.controls.password.value;
    const confirm_password = pwdFormGroup.controls.cpassword.value;

    if (confirm_password.length === 0) {
      return null;
    }

    if (password !== confirm_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }

}
