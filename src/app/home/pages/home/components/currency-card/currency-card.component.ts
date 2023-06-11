import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ComparedMonth } from 'src/app/home/interfaces/comparedMonth';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent implements OnInit {

  @Input() outcome:boolean = true;
  comparedMonthData!:ComparedMonth;
  loading = true;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    if(this.outcome){
      this.userService.getComparedOutcomeTransactions().pipe(take(1)).subscribe({
        next: (data:ComparedMonth) => {
          this.comparedMonthData = data;
          this.loading = false;
          this.userService.setCurrencyComparedData({
            outcomeActual: data.lastMonthAmount,
            outcomeLast: data.actualMonthAmount,
            incomeActual: this.userService.currencyComparedData.getValue().incomeActual,
            incomeLast: this.userService.currencyComparedData.getValue().incomeLast
          })
        }
      });
    }
    else{
      this.userService.getComparedIncomeTransactions().pipe(take(1)).subscribe({
        next: (data:ComparedMonth) => {
          this.comparedMonthData = data;
          this.loading = false;
          this.userService.setCurrencyComparedData({
            outcomeActual: this.userService.currencyComparedData.getValue().outcomeActual,
            outcomeLast: this.userService.currencyComparedData.getValue().outcomeLast,
            incomeActual: data.lastMonthAmount,
            incomeLast: data.actualMonthAmount
          })
        }
      });
    }
  }


  
}
