import React from "react";

export default function MoveXposition({changeXby,changeX,setChangeX}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => changeXby()}
    >
      Change X by:
      <input
        type="number"
        className="appearance-none w-10"
        max="200"
        value={changeX}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setChangeX(e.target.value)}
      />
    </div>
  );
}
