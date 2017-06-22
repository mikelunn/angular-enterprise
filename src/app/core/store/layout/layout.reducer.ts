import {initialLayout, Layout} from "./layout.model";
import * as layout from './layout.actions';
/**
 * Created by complunm on 5/22/2017.
 */

export function reducer(state: Layout = initialLayout, action?: layout.Actions): Layout {
  switch (action.type) {
    case layout.ActionTypes.INITIALIZE:
      return Object.assign({}, state, {
        initialNavItems: [].concat(state.defaultNavItems, action.payload)
      })
    case layout.ActionTypes.TOGGLE_NAV:
      return Object.assign({}, state, {
        navButtonActive: state.navButtonActive = !state.navButtonActive,
        currentNavItems: state.initialNavItems,
        previousNavItems: []
      })
    case layout.ActionTypes.MENU_FORWARD:
      const newState = Object.assign({}, state, {
        currentNavItems: action.payload,
      });
      newState.previousNavItems.push(state.currentNavItems);
      return newState;
      // try push.apply
      // return Object.assign({}, state, {
      //   currentNavItems: action.payload,
      //   previousNavItems: [].concat(state.previousNavItems, state.currentNavItems)
      // })
    case layout.ActionTypes.MENU_BACK:
      console.log(state);
      const last = state.previousNavItems[state.previousNavItems.length - 1];
      const prev = state.previousNavItems;
      prev.pop();
      return Object.assign({}, state, {
        currentNavItems: last,
        previousNavItems: prev
        // previousNavItems: state.previousNavItems.map((obj, idx) => {
        //   const lastIdx = state.previousNavItems.length - 1;
        //   if (idx <= lastIdx) {
        //     return obj;
        //   }
        // })
      })
    default:
      return state;
  }
}
