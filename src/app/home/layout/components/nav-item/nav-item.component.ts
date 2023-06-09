import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/home/interfaces/menu-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input() menuItem: MenuItem;

  constructor() { 
    this.menuItem = {icon: '', title: '', path: ''};
  }

  logout(){
    localStorage.removeItem("ACCESS_TOKEN");
    console.log(localStorage.getItem("ACCESS_TOKEN"));
  }

}
