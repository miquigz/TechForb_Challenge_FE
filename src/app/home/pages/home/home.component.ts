import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { DEFAULT_USER } from 'src/app/core/constants/defaultUser';
import { CoreService } from 'src/app/core/services/core.service';
import { UserService } from 'src/app/services/user.service';
import { ComparedMonth } from '../../interfaces/comparedMonth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  User:User = DEFAULT_USER;
  loadingData:boolean = true;
  loadingMonthDataOutcome:boolean = true;
  loadingMonthDataIncome:boolean = true;

  subUserData!:Subscription;

  comparedMonthDataOutcome!:ComparedMonth;
  comparedMonthDataIncome!:ComparedMonth;

  constructor(
    private _userService:UserService,
    private _coreService:CoreService,
    private Router:Router
    ){
    }

  ngOnInit(): void {
    this.loadUserDataAndMonthTransactionData();
  }


  ngOnDestroy(): void {
    this.subUserData?.unsubscribe(); 
  }

  loadUserDataAndMonthTransactionData(){
    this.subUserData = this._userService.getUserInfo().subscribe({
      next: (data:User) => {
        this.User = data;
        this.loadingData = false;
        this.loadMonthTransactionData();
      },
      error: (err:any) => {
        this._coreService.setToastData({ show: true, message: "Reinice la sesion, por favor", background: 'bg-red-500', duration: 5000 });
        localStorage.removeItem('ACCESS_TOKEN');
        this.Router.navigate(['/auth/login']);
      }
    })
  }


  loadMonthTransactionData(){
    this._userService.getComparedOutcomeTransactions()
    .pipe(take(1))
    .subscribe({
      next: (data:ComparedMonth) => {
      this.comparedMonthDataOutcome = data;
      this.loadingMonthDataOutcome = false;
      console.log(this.comparedMonthDataOutcome);
      },
      error: (err:any) => {
        this._coreService.setToastData({ show: true, message: "Reinice la sesion, por favor", background: 'bg-red-500', duration: 5000 });
        localStorage.removeItem('ACCESS_TOKEN');
        this.Router.navigate(['/auth/login']);
    }
  })
    this._userService.getComparedIncomeTransactions()
    .pipe(take(1))
    .subscribe({
      next:(data:ComparedMonth) => {
      this.comparedMonthDataIncome = data;
      this.loadingMonthDataIncome = false;
      console.log(this.comparedMonthDataIncome);
    },
      error: (err:any) => {
        this._coreService.setToastData({ show: true, message: "Reinice la sesion, por favor", background: 'bg-red-500', duration: 5000 });
        localStorage.removeItem('ACCESS_TOKEN');
        this.Router.navigate(['/auth/login']);
      }
    })
  }

}
