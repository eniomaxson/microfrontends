import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AccountStore } from '../../account.store';
import { LoginRequestModel } from './../../account.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private accountStore: AccountStore) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.accountStore)
  }

  login() {
    var login: LoginRequestModel = Object.assign({}, this.loginForm?.value);
    this.accountStore.authenticate(login);
  }
}
