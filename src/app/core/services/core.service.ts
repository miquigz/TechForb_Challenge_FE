import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  showLoader$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }

  getShowLoader(){
    return this.showLoader$.asObservable();
  }

  setShowLoader(value:boolean){
    this.showLoader$.next(value);
  }

  

}
