import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cbu:string = '';
  @Input() currency:number = 0;
  @Input() titular:string = '';


  copyCBU(){
    navigator.clipboard.writeText(this.cbu);
    //TODO: Toast
  }
}
