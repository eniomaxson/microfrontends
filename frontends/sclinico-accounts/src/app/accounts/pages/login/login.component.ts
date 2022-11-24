import { LoginRequestModel } from './../../account.models';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AccountStore } from './../../account.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private accountStore: AccountStore, private fb: FormBuilder) {
    this.loginForm =  this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {

  }

  login() {
    console.log("entrou");

    var login: LoginRequestModel = Object.assign({}, this.loginForm?.value);
    this.accountStore.authenticate(login);

  }
}
