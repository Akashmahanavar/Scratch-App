import React from "react";

export default function MoveSteps({ moveCat, steps, handlestepsChange }) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={moveCat}
    >
      Move
      <input
        type="number"
        className="appearance-none w-10"
        max="200"
        value={steps}
        onClick={(e) => e.stopPropagation()}
        onChange={handlestepsChange}
      />
      steps
    </div>
  );
}
