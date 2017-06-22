import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CurrencyPage} from "./currency.page";
import {CurrencyRouting} from "./currency.routing";


@NgModule({
  imports: [
    CommonModule,
    CurrencyRouting,


  ],
  declarations: [
    CurrencyPage
  ]
})
export class CurrencyModule { }
