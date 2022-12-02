import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountStore } from '../../account.store';
import { LoginRequestModel } from './../../account.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnURL?: string;

  constructor(
    private fb: FormBuilder,
    private accountStore: AccountStore,
    private activatedRoute: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.returnURL = param['returnURL'];
    });
  }

  login() {
    var login: LoginRequestModel = Object.assign({}, this.loginForm?.value);
    login.returnURL = this.returnURL;
    this.accountStore.authenticate(login);
  }
}
