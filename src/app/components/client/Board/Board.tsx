"use client";
import { useAppSelector } from "@/hooks/redux.hook";
import { currentMenu } from "@/redux/menus/selectors/menu.selector";
import React, { useEffect, useLayoutEffect, useRef } from "react";

const Board = () => {
  const canvasRef: React.MutableRefObject<any> = useRef(null);
  const sholudDraw: React.MutableRefObject<boolean> = useRef(false);
  const currentMenuValue = useAppSelector(currentMenu);
  console.log("color picker tsx", currentMenuValue);
  const { color, brushSize } = useAppSelector(
    (state) => state.toolbox[currentMenuValue] || {}
  );
  console.log(color, brushSize);

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
