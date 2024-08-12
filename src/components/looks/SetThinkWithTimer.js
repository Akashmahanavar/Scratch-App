import React from "react";

export default function SetThinkWithTimer({
  thinkingMsg,
  setThinkingMsg,
  msgTime,
  setMsgTime,
  handleMessageWithTime,
}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-purple-500 px-3 py-1 my-2 text-sm cursor-pointer"
      onClick={() => handleMessageWithTime(thinkingMsg)}
    >
      Think
      <input
        type="text"
        className="appearance-none w-24"
        value={thinkingMsg}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setThinkingMsg(e.target.value)}
      />
      for{" "}
      <input
        type="number"
        className="appearance-none w-10"
        max="10"
        min="1"
        value={msgTime}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setMsgTime(e.target.value)}
      />{" "}
      seconds
    </div>
  );
}
