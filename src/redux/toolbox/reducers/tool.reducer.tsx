import { COLORS, MENU_ITEMS } from "@/constants/Board.constant";
import * as ActionTypes from "../actions/tool.types";
 

const toolboxInitialState = {
  [MENU_ITEMS.PENCIL]: {
    color: COLORS.BLACK,
    brushSize: 3,
  },
  [MENU_ITEMS.ERASER]: {
    color: COLORS.WHITE,
    brushSize: 3,
  },
  [MENU_ITEMS.UNDO]: {},
  [MENU_ITEMS.REDO]: {},
  [MENU_ITEMS.DOWNLOAD]: {},
};

export const ToolBoxHandler = (state = toolboxInitialState, action: any) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TOOL_COLOR:
      return {
        ...state,
        [action?.payload.item]: {
          ...state[action?.payload.item],
          color: action.payload.color,
        },
      };

    case ActionTypes.CURRENT_SLIDER_VALUE:
      return {
        ...state,
        [action?.payload.item]: {
          ...state[action?.payload.item],
          brushSize: action.payload.brushSize,
        },
      };

    default:
      return state;
  }
};
