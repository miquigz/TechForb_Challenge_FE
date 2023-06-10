import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../auth/interfaces/user.interface';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { DEFAULT_USER } from '../core/constants/defaultUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  User:BehaviorSubject<User> = new BehaviorSubject<User>(DEFAULT_USER);
  defaultUser:BehaviorSubject<User> = new BehaviorSubject<User>(DEFAULT_USER);

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
    

}
