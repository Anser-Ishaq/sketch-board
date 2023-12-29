"use client";

import { MENU_ITEMS } from "@/constants/Board.constant";
import { UseAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/menus/selectors/menu.selector";
import { ChangeEvent } from "react";
import { toolboxService } from "@/services/tool.service";

const RangeSlider = () => {
  const currentMenuValue = UseAppSelector(currentMenu);
  console.log("range slider tsx", currentMenuValue);
  const showRangeSlider =
    currentMenuValue === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
  const { handleSliderValue } = toolboxService();
  const {   brushSize } = UseAppSelector(
    (state) => state.toolbox[currentMenuValue] || {}
  );
  console.log(  brushSize);
  function handleBrushSize(e: ChangeEvent<HTMLInputElement>) {
    const sliderValue = e.target.value;
    console.log(`slide value is ${sliderValue}`)
    handleSliderValue(currentMenuValue, sliderValue);
  }
  return (
    <>
      {showRangeSlider && (
        <div className="range-slider">
          <input
            className="w-full"
            type="range"
            min={1}
            max={10}
            step={1}
            value={brushSize}
            onChange={handleBrushSize}
          />
        </div>
      )}
    </>
  );
};

export default RangeSlider;
