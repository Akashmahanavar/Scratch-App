import React from "react";

export default function HandleYPosition({
  onDrag,
  stepsY,
  position,
  handleYChange,
}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => onDrag(position.x, stepsY)}
    >
      Set Y To:
      <input
        type="number"
        className="appearance-none w-10"
        max="200"
        value={stepsY}
        onClick={(e) => e.stopPropagation()}
        onChange={handleYChange}
      />
    </div>
  );
}
