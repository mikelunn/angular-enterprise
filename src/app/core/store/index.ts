
import * as fromHttp from "./http/http.reducer";
import * as fromCurrency from "./currency/currency.reducer";
import * as fromLayout from "./layout/layout.reducer";
import {ActionReducer, combineReducers} from "@ngrx/store";
import {Currency} from "./currency/currency.model";
import {Entities} from "./entity/entity.model";
import {Layout} from "./layout/layout.model";

export interface AppState {
  pendingRequests: number;
  currency: Entities<Currency>;
  layout: Layout;
};

const reducers = {
  pendingRequests: fromHttp.reducer,
  currency: fromCurrency.reducer,
  layout: fromLayout.reducer
};

const combinedReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  return combinedReducer(state, action);
}
