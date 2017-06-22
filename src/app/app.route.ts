/**
 * Created by complunm on 5/19/2017.
 */
import { Route } from '@angular/router';
import {NavbarComponent} from "./layout/navbar/navbar.component";

export const navbarRoute: Route = {
  path: '',
  component: NavbarComponent,
  outlet: 'navbar'
};
