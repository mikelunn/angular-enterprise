import {Action} from "@ngrx/store";
import {NavItem} from "./layout.model";

export const ActionTypes = {
  INITIALIZE: '[Layout] Initialize',
  TOGGLE_NAV: '[Layout] Toggle Nav',
  MENU_ITEM_ACTIVATE: '[Layout] Menu Item Activate',
  MENU_FORWARD: '[Layout] Menu Forward',
  MENU_BACK: '[Layout] Menu Back'
};
export class ToggleNavAction implements Action {
  type = ActionTypes.TOGGLE_NAV;
  constructor(public payload?: NavItem[]) {}
}
export class InitializeAction implements Action {
  type = ActionTypes.INITIALIZE;
  constructor(public payload: NavItem[]) {}
}
export class MenuItemActivateAction implements Action {
  type = ActionTypes.MENU_ITEM_ACTIVATE;
  constructor(public payload: NavItem) {}
}

export class MenuForwardAction implements Action {
  type = ActionTypes.MENU_FORWARD;
  constructor(public payload: NavItem[]) {}
}
export class MenuBackAction implements Action {
  type = ActionTypes.MENU_BACK;
  constructor(public payload?: NavItem[]) {}
}

export type Actions
= ToggleNavAction
  | InitializeAction
  | MenuItemActivateAction
  | MenuForwardAction
  | MenuBackAction;
