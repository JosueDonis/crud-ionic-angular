import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user: any;
  id: string | undefined;
  constructor(public userService: UsersService, public route: ActivatedRoute) {
   }

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe((res: any)=> {
      this.user = res;
    })
  }

}
