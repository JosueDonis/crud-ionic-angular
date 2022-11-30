import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {

  @Input() isAuth: boolean | undefined;
  collapse: boolean = false;
  currentPage: any;
  public appPages = [
    { title: 'Usuarios', url: '/users', icon: 'people' },
    { title: 'Categorias', url: '/categories', icon: 'paper-plane' },
    { title: 'Empresas', url: '/business', icon: 'business' },
  ];
  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit() {}


  selectPage(p: any) {
    this.currentPage = p;
    this.router.navigate([p.url]);
  }

  mouseLeave() {
    this.collapse = !this.collapse;
  }
}
