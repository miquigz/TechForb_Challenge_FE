import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showLoader$:Observable<boolean>;

  constructor(coreService:CoreService){
    this.showLoader$ = coreService.getShowLoader();
  }
}
