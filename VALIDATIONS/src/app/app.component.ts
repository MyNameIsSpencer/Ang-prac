import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements ngOnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
//  all address inputs are grouped
  initForm() {
    this.contactForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxlength(10)]
      ],
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      address: this.formBuilder.group({
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        zipcode: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required]
      })
    });
  }
}
