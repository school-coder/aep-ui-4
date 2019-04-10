import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  userInfo: {username: string, password: string} = {
    username: 'testuser',
    password: 'testpassword'
  };

  ngOnInit() {
  }

  login($event) {

    $event.preventDefault();

    this.loginService.login(this.userInfo)
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
      );
  }
}
