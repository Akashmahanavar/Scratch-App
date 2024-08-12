import React from "react";

export default function SetThink({ thinkingMsg, setThinkingMsg, setMessage }) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-purple-500 px-3 py-1 my-2 text-sm cursor-pointer"
      onClick={() => setMessage(thinkingMsg)}
    >
      Think
      <input
        type="text"
        className="appearance-none w-24"
        value={thinkingMsg}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setThinkingMsg(e.target.value)}
      />
    </div>
  );
}
