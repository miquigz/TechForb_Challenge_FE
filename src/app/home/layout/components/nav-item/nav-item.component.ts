import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {

  @Input() icon: string;
  @Input() title: string;
  @Input() path: string;
  //TODO: Hacer object


  constructor() { 
    this.icon = '';
    this.path = '';
    this.title = '';
  }

}
