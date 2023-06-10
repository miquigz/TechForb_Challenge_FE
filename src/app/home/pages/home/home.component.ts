import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { DEFAULT_USER } from 'src/app/core/constants/defaultUser';
import { CoreService } from 'src/app/core/services/core.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  User:User = DEFAULT_USER;
  loadingData:boolean = true;

  subUserData!:Subscription;

  constructor(
    private _userService:UserService,
    private _coreService:CoreService,
    private Router:Router
    ){
    }

  ngOnInit(): void {
    this.subUserData = this._userService.getUserInfo().subscribe({
      next: (data:User) => {
        this.User = data;
        this.loadingData = false;
      },
      error: (err:any) => {
        this._coreService.setToastData({ show: true, message: "Reinice la sesion, por favor", background: 'bg-red-500', duration: 5000 });
        localStorage.removeItem('ACCESS_TOKEN');
        this.Router.navigate(['/auth/login']);
      }
    })
  }


  ngOnDestroy(): void {
    
  }



}
