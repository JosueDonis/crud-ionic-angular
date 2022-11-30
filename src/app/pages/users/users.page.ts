import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: any[] = [];
  constructor(public userService: UsersService, public authService: AuthService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: any)=> {
      const {rows} = res;
      this.users = rows;
    })
  }

  openMenu() {
    this.authService.setMenu();
  }

}
