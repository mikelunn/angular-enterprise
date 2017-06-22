/**
 * Created by complunm on 5/19/2017.
 */
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {HttpService} from "../../services/http.service";
import * as functions from '../entity/entity.functions';
import {slices, typeFor} from '../util';
import {Observable} from "rxjs/Observable";
import {ActionTypes} from "../entity/entity.actions";
import * as EntityActions from '../entity/entity.actions';
@Injectable()
export class CurrencyEffects {

  @Effect() loadCategories$ = functions
    .loadFromRemote$(
      this.actions$,
      slices.CURRENCY,
      this.httpService
    );

  constructor(private actions$: Actions, private httpService: HttpService) {}


}
