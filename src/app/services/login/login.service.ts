import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable()
export class LoginService {

  baseurl: string;

  userId: string;

  constructor(private httpclient: HttpClient) {
    this.baseurl = environment.baseUrl;
  }

  login(userInfo: any): Observable <any> {
    return this.httpclient.post(this.baseurl + '/api/auth/login', userInfo);
  }

  loadUser(): void {
    this.httpclient.get(this.baseurl + '/api/account').subscribe(
      (response) => this.userId = response.toString(),
      (error) => {
        console.log('Error in getting user details' + error.message);
      }
    );
  }

  logout(): void {
    this.userId = null;
  }

  isAuthenticated(): boolean {
    return this.userId !== null;
  }
}
