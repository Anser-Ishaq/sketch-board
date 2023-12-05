import * as ActionTypes from "./menu.types";

export const activeItemClicked = (item: any) => ({
  type: ActionTypes.ACTIVE_MENU_ITEM,
  payload: item,
});

export const actionItemClicked = (item: any) => ({
  type: ActionTypes.ACTION_MENU_ITEM,
  payload: item,
});
