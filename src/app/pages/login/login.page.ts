import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IAuth } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string | undefined;
  password: string | undefined;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.username = 'william.chanchavac@hotmail.com';
    this.password = '123456';
  }

  login() {
    this.authService
      .login(this.username, this.password)
      .subscribe((res: unknown) => {
        if (res) {
          const session = res as IAuth;
          this.authService.setAuth(session);
          this.router.navigate(['/users']);
        }
      });
  }
}
