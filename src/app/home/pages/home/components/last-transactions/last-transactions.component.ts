import { Component, Input, OnInit } from '@angular/core';
import { pipe, take } from 'rxjs';
import { Transaction } from 'src/app/home/interfaces/transaction';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-last-transactions',
  templateUrl: './last-transactions.component.html',
  styleUrls: ['./last-transactions.component.scss']
})
export class LastTransactionsComponent implements OnInit {

  transactions:Transaction[] = [];
  loadingData = true;
  actualFiveTransactions:Transaction[] = [];
  @Input() cbu:string = '';

  actualIndex = 1;

  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(){
    this.userService.getActualMonthTransactions()
    .pipe(take(1))
    .subscribe({
      next: (data:Transaction[]) => {
        console.log(data)
        this.transactions = data.sort((a:Transaction, b:Transaction) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        });
        this.setHoursAndMinutesTransactions();
        console.log(this.transactions)
        this.actualFiveTransactions = this.transactions.slice(0, 5);
        this.loadingData = false;
      }
    });
  }

  setHoursAndMinutesTransactions(){
    this.transactions.forEach((transaction:Transaction) => {
      transaction.createdHour = new Date(transaction.createdAt).getHours() + ':' + new Date(transaction.createdAt).getMinutes();
    });
  }

  isOutcome(transaction:Transaction){
    return transaction.fromCBU === this.cbu;
  }

  sortFiveTransactions(num:number){
    this.actualIndex = num;
    this.actualFiveTransactions = this.transactions.slice(num * 5 - 5, num * 5);
  }



}
