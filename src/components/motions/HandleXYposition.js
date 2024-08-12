import React from "react";

export default function HandleXYposition({
  onDrag,
  stepsX,
  stepsY,
  handleXChange,
  handleYChange,
}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => onDrag(stepsX, stepsY)}
    >
      Go To X:
      <input
        type="number"
        className="appearance-none w-10"
        max="200"
        value={stepsX}
        onClick={(e) => e.stopPropagation()}
        onChange={handleXChange}
      />
      Y:
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
