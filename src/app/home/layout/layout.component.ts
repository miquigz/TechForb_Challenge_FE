import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';
import { UserService } from 'src/app/services/user.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  opened: boolean;
  sidebarMobile: boolean;
  loading:boolean = true;
  navItems: MenuItem[] = [];

  constructor(
    private userService: UserService,
  ){
    this.opened = true;
    this.sidebarMobile = false;
    // this.navItems =
    // [
    //   { icon: 'fa fa-home', title: 'Inicio', path: '/home' },
    //   { icon: 'fa fa-credit-card', title: 'Tarjetas', path: '/home/cards' },
    //   { icon: 'fa fa-sign-out', title: 'Cerrar sesion', path: '/auth/signin' },
    // ]
  }

  ngOnInit(): void {
    this.checkSidebarMobile();
    this.userService.getMenuItems()
    .pipe(take(1))
    .subscribe((data:any) => {
      this.navItems = data;
      this.loading = false;
    });

  }

  toggleSidenav() {
    this.opened = !this.opened;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    this.checkSidebarMobile();
  }

  checkSidebarMobile() {
    this.sidebarMobile = window.innerWidth < 640;
    this.opened = window.innerWidth >= 640;
  }



}
