import {Action} from "@ngrx/store";
import {typeFor} from "../util";

/**
 * Created by complunm on 5/19/2017.
 */
export const ActionTypes = {
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  ADD_UPDATE_FAIL: 'ADD_UPDATE_FAIL',
  DELETE: 'DELETE',
  DELETE_FAIL: 'DELETE_FAIL',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  LOAD: 'LOAD',
  LOAD_FAIL: 'LOAD_FAIL',
  LOAD_SUCCESS: 'LOAD_SUCCESS',
};
export class EntityAction<T> implements Action {
  protected actionName = '';
  constructor(public slice: string, public payload?: any) {}
  get type() {
    return typeFor(this.slice, this.actionName);
  }
}
export class Add<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.ADD;
  constructor(public slice: string, payload: any = {}) {
    super(slice, Object.assign({}, payload));
  }
}
export class AddSuccess<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.ADD_SUCCESS;
}

export class AddUpdateFail<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.ADD_UPDATE_FAIL;
}

export class Delete<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.DELETE;
}

export class DeleteFail<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.DELETE_FAIL;
}

export class DeleteSuccess<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.DELETE_SUCCESS;
}
export class Load<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.LOAD;
}

export class LoadFail<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.LOAD_FAIL;
}

export class LoadSuccess<T> extends EntityAction<T> {
  protected actionName: string = ActionTypes.LOAD_SUCCESS;
}

