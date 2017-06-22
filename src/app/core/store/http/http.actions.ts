/**
 * Created by complunm on 5/16/2017.
 */
export const ActionTypes = {
  HTTP_START: '[Http] Start',
  HTTP_STOP: '[Http] Stop',
};

export class HttpStartAction {
  type = ActionTypes.HTTP_START;
  constructor() {}
}
export class HttpStopAction {
  type = ActionTypes.HTTP_STOP;
  constructor() {}
}

export type Actions = HttpStartAction | HttpStopAction;
