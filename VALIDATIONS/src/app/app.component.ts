import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.InitForm();
  }
//  all address inputs are grouped
  InitForm() {
    this.contactForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(10)]
      ],
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@^$#&!%*?&])[A-Za-zd$#^@$&!%*?&].{8,}') ]],
      cpassword: ['', Validators.required],
      address: this.formBuilder.group({
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern('(?=.*[0-9])') ]],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      })
    }, {
      validator: this.ConfirmPassword.bind(this)
    });
  }
  onSubmit() {
    console.log(this.contactForm);
  }

  ConfirmPassword(pwdFormGroup: FormGroup) {
    // const pwd = pwdFormGroup.controls['pass']
    const pwd = pwdFormGroup.controls.password.value;
    const cpwd = pwdFormGroup.controls.cpassword.value;

    if (cpwd.length <= 0) {
      return null;
    }

    if (pwd !== cpwd) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }

  resetForm() {
    this.contactForm.reset();
  }
}


// errors: {doesNotMatch: true}
