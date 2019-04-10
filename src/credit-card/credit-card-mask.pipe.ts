import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {
  
  transform(plainCreditCard: string): string {
    return 'XXXX-XXXX-XXXX-' + plainCreditCard.slice(-4);
  }  

}
