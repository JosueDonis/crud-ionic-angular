import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isAuth: boolean | undefined;
  constructor(public authService: AuthService) {
    this.isAuth = this.authService.isAuthenticated;
  }
}
