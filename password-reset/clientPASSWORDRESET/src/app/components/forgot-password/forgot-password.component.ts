import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPwdForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    if (this.forgotPwdForm.valid) {
      const email = this.forgotPwdForm.value.email;
      this.authService.forgotPassword(email).subscribe(
        data => {
          console.log(data);
        },
        err => console.log(err)
      );
    }
  }

  createForm() {
    this.forgotPwdForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]]
    });
  }

}
