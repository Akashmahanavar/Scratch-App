import React from "react";
import CatSprite from "./CatSprite";
import Draggable from "react-draggable";

export default function PreviewArea({
  position,
  rotation,
  onDrag,
  message,
  showImage,
}) {
  const { x, y } = position;
  return (
    <div className="flex-none grid content-center justify-center w-full h-full overflow-y-auto p-2">
      <Draggable
        position={{ x, y }}
        onStop={(e, data) => onDrag(data.x, data.y)}
      >
        <div
          className={`relative transition-all duration-500 ease-in-out cursor-pointer`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`,
          }}
        >
          {message && (
            <div className="absolute max-w-xs left-16 -top-14 p-4 bg-yellow-300 rounded-lg shadow-lg">
              <p className="text-black">{message}</p>
              <div className="absolute -bottom-3 transform -translate-x-1/2 w-3 h-3 rounded-3xl bg-yellow-300"></div>
            </div>
          )}
          {showImage && <CatSprite />}
        </div>
      </Draggable>
    </div>
  );
}
