"use client";
import { MENU_ITEMS } from "@/constants/Board.constant";
import { useAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/selectors/menu.selector";
import React from "react";

const ColorPicker = () => {
  const currentMenuValue = useAppSelector(currentMenu);
  console.log("color picker tsx", currentMenuValue);
  const showColorPicker = currentMenuValue === MENU_ITEMS.PENCIL;
  return (
    <>
        <span>Colors</span>
      {showColorPicker && (
       
          <div className="color-picker  flex justify-evenly ">
            <br />
            <div className="bg-white h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
            <div className="bg-black h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
            <div className="bg-yellow-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
            <div className="bg-orange-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
            <div className="bg-green-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
            <div className="bg-blue-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
            <div className="bg-red-600 h-5 w-5 rounded hover:rounded-lg cursor-pointer"></div>
          </div>
         
      )}
    </>
  );
};

export default ColorPicker;
