import React from "react";

export default function HandleXPostion({
  onDrag,
  stepsX,
  handleXChange,
  position,
}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => onDrag(stepsX, position.y)}
    >
      Set X To:
      <input
        type="number"
        className="appearance-none w-10"
        max="200"
        value={stepsX}
        onClick={(e) => e.stopPropagation()}
        onChange={handleXChange}
      />
    </div>
  );
}
