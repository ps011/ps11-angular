import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string
  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password) {
    try {
      this.loginService.login(username, password)
        .subscribe(result => {
          localStorage.setItem('token', JSON.stringify(result))
          this.router.navigateByUrl('/dashboard');
        });
    } catch (e) {
      console.log(e);
    }
  }

}
