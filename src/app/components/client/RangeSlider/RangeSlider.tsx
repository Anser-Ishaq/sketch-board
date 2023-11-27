"use client";

import { MENU_ITEMS } from "@/constants/Board.constant";
import { useAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/selectors/menu.selector";
import { ChangeEvent } from "react";

const RangeSlider = () => {
  const currentMenuValue = useAppSelector(currentMenu);
  console.log("range slider tsx", currentMenuValue);
  const showRangeSlider =
    currentMenuValue === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;
  function handleBrushSize(e: ChangeEvent<HTMLInputElement>) {
    console.log("brush size changed");
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
            onChange={handleBrushSize}
          />
        </div>
      )}
    </>
  );
};

export default RangeSlider;
