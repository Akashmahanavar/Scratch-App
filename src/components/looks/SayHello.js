import React from "react";

export default function SayHello({ helloMsg, setHelloMsg, setMessage }) {
  return (
    <div
      className="flex gap-1 items-center rounded-xl bg-purple-500 px-3 py-1 my-2 text-sm cursor-pointer"
      onClick={() => setMessage(helloMsg)}
    >
      Say
      <input
        type="text"
        className="appearance-none w-24"
        value={helloMsg}
        onClick={(e) => e.stopPropagation()}
        onChange={(e) => setHelloMsg(e.target.value)}
      />
    </div>
  );
}
