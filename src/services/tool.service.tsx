import { useAppDispatch } from "@/hooks/redux.hook";
import {
  toolboxActiveColor,
  currentSliderValue,
} from "@/redux/toolbox/actions/tool.actions";
export const toolboxService = () => {
  const dispatch = useAppDispatch();

  const handleToolboxColor = (item: string, color: string) => {
    dispatch(toolboxActiveColor(item, color));
    console.log(
      `color from tool box is========== ${color} and item is========= ${item}`
    );
  };

  const handleSliderValue = (item: string, size: string) => {
    dispatch(currentSliderValue(item, size));
    console.log(
      `slider value from tool box is========== ${size} and item is========= ${item}`
    );
  };
  return {
    handleToolboxColor,
    handleSliderValue,
  };
};
