import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarRoute } from '../app.route';
import {errorRoute} from "./error/error.route";

const LAYOUT_ROUTES = [
  ...errorRoute
];


@NgModule({
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class LayoutRoutingModule { }
