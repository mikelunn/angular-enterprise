/**
 * Created by complunm on 5/16/2017.
 */
import * as http from "./http.actions";

const pendingRequests = 0;
export function reducer(state = pendingRequests, action: http.Actions) {
  switch (action.type) {
    case http.ActionTypes.HTTP_START:
      return state += 1;
    case http.ActionTypes.HTTP_STOP:
      return state -= 1;
    default:
      return state;
  }
}
