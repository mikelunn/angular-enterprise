import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomePage} from "./home.component";
import {RouterModule} from "@angular/router";
import {homeRoute} from "./home.route";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([homeRoute])
  ],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
