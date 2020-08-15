import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(username, password) {
    return this.http.post('https://ps11-backend.herokuapp.com/users/login', {
      username,
      password
    }, {
      responseType: 'text'
    });
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
