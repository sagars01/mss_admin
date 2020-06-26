import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FbauthService } from 'src/app/shared/services/fbauth.service';

@Component({
  selector: 'app-login-inline',
  templateUrl: './login-inline.component.html',
  styleUrls: ['./login-inline.component.css']
})
export class LoginInlineComponent implements OnInit {

  validateForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: FbauthService,
  ) { }

  ngOnInit() {

    this.validateForm = this.fb.group(
      {
        userName: [null, [Validators.required]],
        password: [null, [Validators.required]],
        remember: [true]
      }
    );
  }


  submitForm() {
    this.authService.login(this.validateForm.get('userName').value,
      this.validateForm.get('password').value);
  }


}
