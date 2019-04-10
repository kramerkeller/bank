import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditCardMaskPipe } from './credit-card-mask.pipe';
import { CreditCardComponent } from './credit-card.component';

@NgModule({
  declarations: [
    CreditCardMaskPipe,
    CreditCardComponent
  ],
  imports: [CommonModule],
  exports: [CreditCardComponent]
})
export class CreditCardModule { }
