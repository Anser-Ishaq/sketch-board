"use client";
import { MENU_ITEMS } from "@/constants/Board.constant";
import { useAppDispatch, useAppSelector } from "@/hooks/redux.hook";
import { currentMenu, actionMenu } from "@/redux/menus/selectors/menu.selector";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  actionItemClicked,
  activeItemClicked,
} from "@/redux/menus/actions/menu.actions";
const Board = () => {
  const canvasRef: React.MutableRefObject<any> = useRef(null);
  const sholudDraw: React.MutableRefObject<boolean> = useRef(false);
  const drawHistory: { current: (ImageData | undefined)[] } = { current: [] };
  const [drawHistoryCanvas, setDrawHistoryCanvas] = useState<
    (ImageData | undefined)[]
  >([]);
  const [historyPointerCanvas, setHistoryPointerCanvas] = useState<number>(0);

  const currentMenuValue = useAppSelector(currentMenu);
  const dispatch = useAppDispatch();
  console.log("color picker tsx", currentMenuValue);
  const currentActionMenu = useAppSelector(actionMenu);
  const { color, brushSize } = useAppSelector(
    (state) => state.toolbox[currentMenuValue] || {}
  );
  console.log(color, brushSize);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");
    if (currentActionMenu === MENU_ITEMS.DOWNLOAD) {
      const URL = canvas.toDataURL();
      console.log(URL);
      const anchorTag = document.createElement("a");
      anchorTag.href = URL;
      anchorTag.download = `sketch${brushSize}${Date.now()}.png`;
      anchorTag.click();
    } else if (currentActionMenu === MENU_ITEMS.UNDO) {
      if (historyPointerCanvas > 0) {
        console.log("histort pointer anvas $$$$$$$$", historyPointerCanvas - 1);
        const imageData = drawHistoryCanvas[historyPointerCanvas - 1];
        console.log("drawHistoryCanvas", drawHistoryCanvas);
        console.log("undo image data", imageData);
        if (imageData instanceof ImageData) {
          canvasContext?.putImageData(imageData, 0, 0);
          setHistoryPointerCanvas((prevPointer) => prevPointer - 1);
        } else {
          console.error("Invalid imageData type or imageData is undefined");
        }
      }
    } else if (currentActionMenu === MENU_ITEMS.REDO) {
      if (historyPointerCanvas > 0) {
        console.log("histort pointer anvas $$$$$$$$", historyPointerCanvas);
        const imageData = drawHistoryCanvas[historyPointerCanvas + 1];
        if (imageData instanceof ImageData) {
          canvasContext?.putImageData(imageData, 0, 0);
          setHistoryPointerCanvas((prevPointer) => prevPointer + 1);
        } else {
          console.error("Invalid imageData type or imageData is undefined");
        }
      }
    }
    dispatch(actionItemClicked(null));
  }, [currentActionMenu, dispatch]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");
    const changeConfig = () => {
      if (canvasContext) {
        if (color) {
          canvasContext.strokeStyle = color;
        }

        if (brushSize !== undefined) {
          canvasContext.lineWidth = brushSize;
        }
      }
    };

    changeConfig();
  }, [color, brushSize]);

  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x: number, y: number) => {
      canvasContext?.beginPath();
      canvasContext?.moveTo(x, y);
    };

    const drawLine = (x: number, y: number) => {
      canvasContext?.lineTo(x, y);
      canvasContext?.stroke();
    };
    const handleMouseDown = (e: any) => {
      sholudDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };
    const handleMouseMove = (e: any) => {
      if (!sholudDraw.current) return;
      drawLine(e.clientX, e.clientY);
    };
    const handleMouseUp = (e: any) => {
      sholudDraw.current = false;
      const imageData = canvasContext?.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      setDrawHistoryCanvas((prevHistory) => [...prevHistory, imageData]);
      setHistoryPointerCanvas((prevPointer) => prevPointer + 1);
    };
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="w-full flex flex-1 ">
      <canvas className="absolute top-0" ref={canvasRef}></canvas>
    </div>
  );
};

export default Board;
