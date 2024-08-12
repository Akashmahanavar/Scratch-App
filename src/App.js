import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [changeX, setChangeX] = useState(10);
  const [changeY, setChangeY] = useState(10);
  const [degree, setDegree] = useState(15);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [steps, setSteps] = useState(10);
  const [stepsX, setStepsX] = useState(10);
  const [stepsY, setStepsY] = useState(10);
  const [helloMsg, setHelloMsg] = useState("Hello...");
  const [thinkingMsg, setThinkingMsg] = useState("Hmmmm...");
  const [message, setMessage] = useState(null);
  const [msgTime, setMsgTime] = useState(2);
  const [showImage, setShowImage] = useState(true);
  const handleXChange = (event) => {
    setStepsX(Number(event.target.value));
  };
  const handlestepsChange = (event) => {
    setSteps(Number(event.target.value));
  };
  const handleYChange = (event) => {
    setStepsY(Number(event.target.value));
  };

  const handleRotationChange = (event) => {
    setDegree(event.target.value);
  };

  const moveCat = () => {
    setPosition((prev) => ({ ...prev, x: prev.x + steps }));
  };
  const rotateCat = (type) => {
    if (type === "right") setRotation(rotation + degree);
    else if (type === "left") setRotation(rotation - degree);
  };
  const onDrag = (x, y) => {
    setPosition({ x, y });
    if (x !== stepsX && y !== stepsY) {
      setStepsX(x);
      setStepsY(y);
    }
  };
  const changeXby = () => {
    setStepsX((prev) => prev + changeX);
    setPosition((prev) => ({ ...prev, x: stepsX }));
  };
  const changeYby = () => {
    setStepsY((prev) => prev + changeY);
    setPosition((prev) => ({ ...prev, y: stepsY }));
  };
  const handleMessageWithTime = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), msgTime * 1000);
  };
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            changeX={changeX}
            changeY={changeY}
            changeXby={changeXby}
            changeYby={changeYby}
            degree={degree}
            handleRotationChange={handleRotationChange}
            handlestepsChange={handlestepsChange}
            handleXChange={handleXChange}
            handleYChange={handleYChange}
            moveCat={moveCat}
            onDrag={onDrag}
            position={position}
            rotateCat={rotateCat}
            steps={steps}
            stepsX={stepsX}
            stepsY={stepsY}
            setChangeX={setChangeX}
            setChangeY={setChangeY}
            helloMsg={helloMsg}
            setHelloMsg={setHelloMsg}
            thinkingMsg={thinkingMsg}
            setThinkingMsg={setThinkingMsg}
            message={message}
            setMessage={setMessage}
            msgTime={msgTime}
            setMsgTime={setMsgTime}
            handleMessageWithTime={handleMessageWithTime}
            setShowImage={setShowImage}
          />
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea
            position={position}
            rotation={rotation}
            degree={degree}
            onDrag={onDrag}
            message={message}
            showImage={showImage}
          />
        </div>
      </div>
    </div>
  );
}
