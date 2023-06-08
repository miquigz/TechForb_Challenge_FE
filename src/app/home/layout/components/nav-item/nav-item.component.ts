import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/home/interfaces/menu-item';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() path: string;

  @Input() MenuItems: MenuItem;


  constructor() { 
    this.icon = '';
    this.title = '';
    this.path = '';
    this.MenuItems = {icon: '', title: '', path: ''};
  }

}
