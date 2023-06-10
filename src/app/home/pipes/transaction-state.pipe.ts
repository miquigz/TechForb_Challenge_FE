import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionState'
})
export class TransactionStatePipe implements PipeTransform {

  transform(value:string):string {
    if (value === 'PENDING')
      return 'Pendiente';
    else if (value === 'ACCEPTED')
      return 'Completado';
    else if (value === 'REJECTED')
      return 'Cancelado';

    return value;
  }

}
