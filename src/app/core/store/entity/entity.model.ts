/**
 * Created by complunm on 5/19/2017.
 */
export interface Entities<T> {
  entities: T[];
  loaded?: boolean;
  loading?: boolean;
  selectedEntityId?: string;
  slice: string;
  initialEntity: T;
  getData: Function;
};
export function initialEntities<T>(vals: any = {}, slice: string, actionNames: any, initialEntity): Entities<T> {

  return Object.assign({
    entities: {},
    loaded: false,
    loading: false,
    selectedEntityId: null,
    slice,
    initialEntity,
  }, vals);
};
