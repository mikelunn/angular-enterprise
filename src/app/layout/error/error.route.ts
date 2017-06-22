import {Routes} from "@angular/router";
import {ErrorComponent} from "./error.component";
/**
 * Created by complunm on 5/19/2017.
 */
export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      pageTitle: 'Error'
    },
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      pageTitle: 'Access Denied'
    },
  }

];
