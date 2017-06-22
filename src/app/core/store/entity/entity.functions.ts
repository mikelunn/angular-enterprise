import {Actions} from "@ngrx/effects";
import {HttpService} from "../../services/http.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {Action} from "@ngrx/store";
import {typeFor} from "../util";
import {ActionTypes, EntityAction} from "./entity.actions";
import * as EntityActions from './entity.actions';
import "rxjs/add/observable/from";
import "rxjs/add/observable/of";
import {Entities} from "./entity.model";
/**
 * Created by complunm on 5/19/2017.
 */

export function addToStore<T>(state: Entities<T>, action: EntityActions.Add<T> | EntityActions.Load<T>): Entities<T> {
  console.log(action);
  const entities = Object.assign({}, state.entities);
  entities[action.payload.id] = reduceOne(state, null, action);
  return Object.assign({}, state, {
    entities: action.payload,
    selectedEntityId: action.payload.id || null,
    loaded: true,
    loading: false,
  });
};
export function loadFromRemote$(actions$: Actions, slice: string, httpService: HttpService): Observable<Action> {
  return actions$
    .ofType(typeFor(slice, ActionTypes.LOAD))
    .switchMap(() => httpService.getEntities(slice)
      .mergeMap((fetchedEntities) => {
        console.log(slice);
        console.log(fetchedEntities);
        return Observable.of(fetchedEntities);
      })
      .map((fetchedEntity) => {
              console.log(fetchedEntity);
          return new EntityActions.LoadSuccess(slice, fetchedEntity);
      })
      .catch((err) => {
        console.log(err);
        return Observable.of(new EntityActions.LoadFail(slice, null));
      })
);
}
function reduceOne<T>(state: Entities<T>, entity: T = null, action: EntityAction<T>): T {
  // console.log('reduceOne entity:' + JSON.stringify(entity) + ' ' + action.type)
  switch (action.type) {


    case typeFor(state.slice, ActionTypes.DELETE):
      return Object.assign({}, entity, action.payload, { deleteMe: true });
    case typeFor(state.slice, ActionTypes.DELETE_FAIL):
      return Object.assign({}, entity, action.payload, { deleteMe: false });
    case typeFor(state.slice, ActionTypes.ADD_SUCCESS):
      return Object.assign({}, state.initialEntity, entity, action.payload);
    case typeFor(state.slice, ActionTypes.LOAD_SUCCESS):
      return Object.assign({}, state.initialEntity, action.payload);
    default:
      return entity;
  }
};


