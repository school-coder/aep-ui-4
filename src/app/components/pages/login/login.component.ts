import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as LoginActions from 'src/app/store/login/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private store: Store<{auth: {logged_user: string}}>) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('Nagarajan', [Validators.required, Validators.email]),
      password: new FormControl('Test')
    });

  }

  login($event) {

    $event.preventDefault();

    this.store.dispatch(new LoginActions.Login(this.loginForm.get(['username']).value));

  /* this.loginService.login(this.loginForm.value)
      .subscribe(
        (response) => {
          console.log(response);
          this.loginService.loadUser();
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('request completed');
        }
      );*/
  }
}
