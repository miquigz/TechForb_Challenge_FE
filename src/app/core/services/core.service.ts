import { Injectable } from '@angular/core';
import { BehaviorSubject, take, timer } from 'rxjs';
import { ToastData } from '../interfaces/toast-data';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  showLoader$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  toastData$:BehaviorSubject<ToastData> = 
  new BehaviorSubject<ToastData>({message:'',show:false,background:'bg-gray-800',duration:5000});
  
  constructor() { }

  getShowLoader(){
    return this.showLoader$.asObservable();
  }

  setShowLoader(value:boolean){
    this.showLoader$.next(value);
  }

  getToastData(){
    return this.toastData$.asObservable();
  }

  setToastData(value:ToastData){
    this.toastData$.next(value);
    if(value.show) 
      timer(value.duration)
      .pipe(take(1))
      .subscribe((_)=> this.toastData$.next({...value, show:false}));
  }

}
