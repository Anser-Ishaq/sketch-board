"use client";
import React, { useEffect, useRef } from "react";

const Board = () => {
  const canvasRef: React.MutableRefObject<null> = useRef(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    const canvasContext = canvas.getContext("2d");

    // just to test static canvas

    // if (canvasContext) {
    //    canvasContext.fillStyle = "green";
    //    canvasContext.fillRect(100, 10, 50, 100);

    //  }
  }, []);

  return (
    <div className="w-full flex flex-1">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default Board;
