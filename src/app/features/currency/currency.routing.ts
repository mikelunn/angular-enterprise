/**
 * Created by complunm on 5/19/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyPage} from "./currency.page";


const routes: Routes = [
  {
    path: '',
    component: CurrencyPage
  }
];

export const routedComponents = [CurrencyPage];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyRouting { }
