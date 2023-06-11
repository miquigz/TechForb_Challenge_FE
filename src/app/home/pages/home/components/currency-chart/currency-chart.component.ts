import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-currency-chart',
  templateUrl: './currency-chart.component.html',
  styleUrls: ['./currency-chart.component.scss']
})
export class CurrencyChartComponent {

  isLoading = true;
  outcomeData:number[] = [];
  incomeData:number[] = [];

  constructor(private userService:UserService){
    this.userService.getCurrencyComparedData()
    .pipe(take(1))
    .subscribe({
      next: (data:any) => {
        this.outcomeData = [data.outcomeLast, data.outcomeActual];
        this.incomeData = [data.incomeLast, data.incomeActual];
        this.isLoading = false;
        this.setOptions();
      }
    })
  }

  setOptions(){
    this.options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#674a99',
          },
        },
      },
      legend: {
        data: ['Ingresos', 'Egresos'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mes anterior', 'Mes Actual'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Ingresos',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            color: '#7352aa',
          },
          label: {
            show: true,
            position: 'top',
          },
          data: [this.incomeData[0], this.incomeData[1]]
        },
        {
          name: 'Egresos',
          type: 'line',
          stack: 'counts',
          areaStyle: {
            color: '#747ebc',
          },
          data: [this.outcomeData[0], this.outcomeData[1]],
        },
      ],
    };
  }

  options!: EChartsOption;

}
