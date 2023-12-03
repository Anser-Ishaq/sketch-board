import React from "react";
import RangeSlider from "../../client/RangeSlider/RangeSlider";
import ColorPicker from "../../client/ColorPicker/ColorPicker";
import { useAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/menus/selectors/menu.selector";
 
const Toolbox = () => {
 
  return (
    <div className="tool-box bg-gray-500 rounded-md p-2 absolute w-1/5 top-1/4">
      <div className="colors p-2">
        
        <ColorPicker />
      </div>
      <div className="brushs p-2">
        <span>Brush Size</span>
        <RangeSlider />
      </div>
    </div>
  );
};

export default Toolbox;
