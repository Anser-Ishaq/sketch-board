import { MENU_ITEMS } from "@/constants/Board.constant";
import * as ActionTypes from "../actions/menu.types";
import { ActiveMenuState } from "../types/menu.types";


const initialState: ActiveMenuState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
};
export const ActiveMenuIcon = (
  state: ActiveMenuState = initialState,
  action: any
) => {
  switch (action.type) {
    
    case ActionTypes.ACTIVE_MENU_ITEM:
      return {
        ...state,
        activeMenuItem: action.payload,
      };
    case ActionTypes.ACTION_MENU_ITEM:
      return {
        ...state,
        actionMenuItem: action.payload,
      };

    default:
      return state;
  }
};
