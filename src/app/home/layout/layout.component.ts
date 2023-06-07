import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  opened: boolean;
  sidebarMobile: boolean;

  constructor(){
    this.opened = true;
    this.sidebarMobile = false;
  }

  ngOnInit(): void {
    this.checkSidebarMobile();  
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
  }

  


}
