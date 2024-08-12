import React from "react";
import Icon from "../Icon";

export default function HandleRightRotation({
  rotateCat,
  degree,
  handleRotationChange,
}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-blue-500 px-2 py-1 my-2 text-sm cursor-pointer"
      onClick={() => rotateCat("right")}
    >
      {"Turn "}
      <Icon name="redo" size={15} className="mx-2" />
      <input
        type="number"
        className="w-10"
        max="200"
        value={degree}
        onChange={handleRotationChange}
        onClick={(e) => e.stopPropagation()}
      />
      {"degrees"}
    </div>
  );
}
