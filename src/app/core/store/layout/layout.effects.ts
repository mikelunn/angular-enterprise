/**
 * Created by complunm on 5/22/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Router} from "@angular/router";
import * as layout from "./layout.actions";
import {MenuForwardAction, ToggleNavAction} from "./layout.actions";
import {Observable} from "rxjs/Observable";
@Injectable()
export class LayoutEffects {
  @Effect() navigate$ = this.actions$
  // Listen for '{Layout] Menu Forward Side Effects'
    .ofType(layout.ActionTypes.MENU_ITEM_ACTIVATE)
    .map(action => action.payload)
    .switchMap((payload) => {
      if (!payload.children) {
        return this.router.navigateByUrl(payload.route)
          .then(result => new ToggleNavAction())
          // Perhaps we can dispatch ToggleNavError
          .catch(err => new ToggleNavAction());
      } else {
        return Observable.of(new MenuForwardAction(payload.children));
      }
    })
  constructor(private actions$: Actions, private router: Router) {}


}
