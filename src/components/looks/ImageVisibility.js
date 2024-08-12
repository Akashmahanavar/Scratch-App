import React from "react";

export default function ImageVisibility({ action, setShowImage, value }) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-purple-500 px-3 py-1 my-2 text-sm cursor-pointer"
      onClick={() => setShowImage(value)}
    >
      {action}
    </div>
  );
}
