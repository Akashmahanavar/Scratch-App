import React from "react";

export default function MoveYposition({ changeY, setChangeY, changeYby }) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => changeYby()}
    >
      Change Y by:
      <input
        type="number"
        className="appearance-none w-10"
        max="200"
        value={changeY}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setChangeY(e.target.value)}
      />
    </div>
  );
}
