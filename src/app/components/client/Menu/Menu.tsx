"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import MenuServices from "@/services/menu.service";
import { MENU_ITEMS } from "@/constants/Board.constant";
import { UseAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/menus/selectors/menu.selector";
import { getMenuIconClass } from "@/utils/MenuColors";

const Menu = () => {
  const { handleActiveItem,handleActionItem } = MenuServices();
  const currentMenuValue = UseAppSelector(currentMenu);
  console.log("color picker tsx", currentMenuValue);


  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative z-10 w-1/2	 bg-gray-500 mt-8 h-14 flex justify-center items-center border-solid hover:border-dotted border-slate-600	rounded-md	 ">
        <div className="flex justify-evenly p-1 w-full">
          <FontAwesomeIcon
            icon={faPencil}
            className={`h-5 hover:cursor-pointer  hover:text-neutral-800 ${getMenuIconClass(
              currentMenuValue,
              MENU_ITEMS.PENCIL
            )} p-2 rounded`}
            onClick={() => handleActiveItem(MENU_ITEMS.PENCIL)}
          />
          <FontAwesomeIcon
            icon={faEraser}
            className={`h-5 hover:cursor-pointer hover:text-neutral-800 ${getMenuIconClass(
              currentMenuValue,
              MENU_ITEMS.ERASER
            )} p-2 rounded`}
            onClick={() => handleActiveItem(MENU_ITEMS.ERASER)}
          />
          <FontAwesomeIcon
            icon={faRotateLeft}
            className={`h-5 hover:cursor-pointer hover:text-neutral-800 ${getMenuIconClass(
              currentMenuValue,
              MENU_ITEMS.UNDO
            )} p-2 rounded`}
            onClick={() => handleActionItem(MENU_ITEMS.UNDO)}
          />
          <FontAwesomeIcon
            icon={faRotateRight}
            className={`h-5 hover:cursor-pointer hover:text-neutral-800 ${getMenuIconClass(
              currentMenuValue,
              MENU_ITEMS.REDO
            )} p-2 rounded`}
            onClick={() => handleActionItem(MENU_ITEMS.REDO)}
          />
          <FontAwesomeIcon
            icon={faFileArrowDown}
            className={`h-5 hover:cursor-pointer hover:text-neutral-800 ${getMenuIconClass(
              currentMenuValue,
              MENU_ITEMS.DOWNLOAD
            )} p-2 rounded`}
            onClick={() => handleActionItem(MENU_ITEMS.DOWNLOAD)}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
