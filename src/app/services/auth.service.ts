import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../auth/interfaces/user-login.interface';
import { User } from '../auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = environment.url + '/api/v1';

  constructor(
    private http:HttpClient
  ) { }

  validateToken(token:string){
    return this.http.get(`${this.url}/auth/validate-token/${token}`)
  }

  login(data:UserLogin){
    return this.http.post(`${this.url}/auth/login`, data);
  }

  register(data:User){
    return this.http.post(`${this.url}/auth/register`, data);
  }

}
