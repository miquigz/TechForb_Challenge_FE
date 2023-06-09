import { Component } from '@angular/core';
import { ToastData } from '../../interfaces/toast-data';
import { CoreService } from '../../services/core.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  toast:Observable<ToastData>;

  constructor(core:CoreService){
    this.toast = core.getToastData();
  }

}
