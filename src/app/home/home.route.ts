/**
 * Created by complunm on 5/19/2017.
 */
import { Route } from '@angular/router';
import {HomePage} from "./home.component";


export const homeRoute: Route = {
  path: '',
  component: HomePage,
  data: {
    pageTitle: 'Home'
  }
};
