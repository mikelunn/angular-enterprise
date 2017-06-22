import {Currency, initialCurrency} from "./currency.model";
import {Entities, initialEntities} from "../entity/entity.model";
import {slices, typeFor} from "../util";
import {ActionTypes, EntityAction} from "../entity/entity.actions";
import * as functions from '../entity/entity.functions';
/**
 * Created by complunm on 5/19/2017.
 */
export function reducer(state: Entities<Currency> = initialEntities<Currency>({},
  slices.CURRENCY, ActionTypes, initialCurrency), action: EntityAction<Currency>): Entities<Currency> {
  switch (action.type) {
    case typeFor(slices.CURRENCY, ActionTypes.LOAD):
      return Object.assign({}, state, {
        entities: null,
        loaded: false,
        loading: true,
      });
    case typeFor(slices.CURRENCY, ActionTypes.LOAD_SUCCESS):
      return functions.addToStore<Currency>(state, <any>action);
    case typeFor(slices.CURRENCY, ActionTypes.LOAD_FAIL):
    default:
      return state;
  }
}
