import {RouterModule, Routes} from "@angular/router";
import {FeaturesComponent} from "./features.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "../layout/error/error.component";
/**
 * Created by complunm on 5/19/2017.
 */
const routes: Routes = [
  {
    path: 'features',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'currency',
        loadChildren: './currency/currency.module#CurrencyModule'
      }
    ]
  }
];
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
