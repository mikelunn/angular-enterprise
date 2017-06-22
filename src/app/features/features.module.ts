import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeaturesComponent} from "./features.component";
import { HomeComponent } from './home/home.component';
import {FeaturesRoutingModule} from "./features.routing";

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  declarations: [
    FeaturesComponent,
    HomeComponent
  ],
  exports: [

  ]
})
export class FeaturesModule { }
