import * as ActionTypes from "./tool.types";
export const toolboxActiveColor = (item: string, color: string) => ({
  type: ActionTypes.CHANGE_TOOL_COLOR,
  payload: {
    item,
    color,
  },
});

export const currentSliderValue = (item: string, brushSize: string) => ({
  type: ActionTypes.CURRENT_SLIDER_VALUE,
  payload: {
    item,
    brushSize,
  },
});
