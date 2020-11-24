import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient, public jwtHelper: JwtHelperService) { }

  login(username, password) {
    return this.http.post(`${environment.BASE_URL}/users/login`, {
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
