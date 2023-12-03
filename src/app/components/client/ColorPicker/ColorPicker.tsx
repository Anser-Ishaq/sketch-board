"use client";
import { COLORS, MENU_ITEMS } from "@/constants/Board.constant";
import { useAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/menus/selectors/menu.selector";
import { toolboxService } from "@/services/tool.service";
import React from "react";
const ColorPicker = () => {
  const currentMenuValue = useAppSelector(currentMenu);
  console.log("color picker tsx", currentMenuValue);
  const showColorPicker = currentMenuValue === MENU_ITEMS.PENCIL;
  const { handleToolboxColor } = toolboxService();

  return (
    <>
      <span>Colors</span>
      {showColorPicker && (
        <div className="color-picker  flex justify-evenly ">
          <br />
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.WHITE)}
            className="bg-white h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.BLACK)}
            className="bg-black h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.YELLOW)}
            className="bg-yellow-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.ORANGE)}
            className="bg-orange-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.GREEN)}
            className="bg-green-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.BLUE)}
            className="bg-blue-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
          <div
            onClick={() => handleToolboxColor(currentMenuValue, COLORS.RED)}
            className="bg-red-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"
          ></div>
        </div>
      )}
    </>
  );
};

export default ColorPicker;
