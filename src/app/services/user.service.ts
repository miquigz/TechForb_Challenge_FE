import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../auth/interfaces/user.interface';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { DEFAULT_USER } from '../core/constants/defaultUser';
import { ComparedMonth, comparedMonthCurrency } from '../home/interfaces/comparedMonth';
import { Transaction } from '../home/interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User:BehaviorSubject<User> = new BehaviorSubject<User>(DEFAULT_USER);
  defaultUser:BehaviorSubject<User> = new BehaviorSubject<User>(DEFAULT_USER);

  currencyComparedData:BehaviorSubject<comparedMonthCurrency> = new BehaviorSubject<comparedMonthCurrency>({
    outcomeActual: 0,
    outcomeLast: 0,
    incomeActual: 0,
    incomeLast: 0
  });


  private _url:string;

  constructor(
    private http:HttpClient
    ) {
    this._url = environment.url + '/api/v1';
  }

  getUserInfo():Observable<User>{
    // console.log("iguales:", this.User.getValue() === this.defaultUser.getValue());
    if (this.User.getValue() === this.defaultUser.getValue())
      return this.http.get(`${this._url}/auth/me`)
      .pipe(
        take(1),
        switchMap((data:any) => {
          this.User.next(data.user);
          return this.getUserState();
        })
      );
    return this.getUserState();
  }

  getUserState(){
    return this.User.asObservable();
  }

  setUserState(user:User){
    this.User.next(user);
  }

  getActualMonthTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this._url}/transaction/actual-month/${this.User.getValue().cbu}`);
  }

  getLastMonthTransactions(){
    return this.http.get(`${this._url}/transaction/last-month/${this.User.getValue().cbu}`);
  }

  getMenuItems(){
    return this.http.get(`${this._url}/menu-item`);
  }

  getComparedOutcomeTransactions():Observable<ComparedMonth>{
    return this.http.get<ComparedMonth>(`${this._url}/transaction/compare-months/${this.User.getValue().cbu}?outcome=true`);
  }

  getComparedIncomeTransactions():Observable<ComparedMonth>{
    return this.http.get<ComparedMonth>(`${this._url}/transaction/compare-months/${this.User.getValue().cbu}`);
  }

  setCurrencyComparedData(data:comparedMonthCurrency){
    this.currencyComparedData.next(data);
  }

  getCurrencyComparedData(){
    return this.currencyComparedData.asObservable();
  }


  getExtractions(){
    return this.http.get(`${this._url}/extraction/${this.User.getValue().cbu}`);
  }


}
