import React from "react";

export default function SayHelloWithTimer({
  helloMsg,
  setHelloMsg,
  msgTime,
  setMsgTime,
  handleMessageWithTime,
}) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-purple-500 px-3 py-1 my-2 text-sm cursor-pointer"
      onClick={() => handleMessageWithTime(helloMsg)}
    >
      Say{" "}
      <input
        type="text"
        className="appearance-none w-24"
        value={helloMsg}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setHelloMsg(e.target.value)}
      />{" "}
      For
      <input
        type="number"
        className="appearance-none w-10"
        max="10"
        min="1"
        value={msgTime}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setMsgTime(e.target.value)}
      />
      seconds
    </div>
  );
}
