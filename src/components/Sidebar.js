import React from "react";
import Icon from "./Icon";
import MoveSteps from "./motions/MoveSteps";
import HandleLeftRotation from "./motions/HandleLeftRotation";
import HandleRightRotation from "./motions/HandleRightRotation";
import HandleXYposition from "./motions/HandleXYposition";
import HandleXPostion from "./motions/HandleXPostion";
import HandleYPosition from "./motions/HandleYPosition";
import MoveXposition from "./motions/MoveXposition";
import MoveYposition from "./motions/MoveYposition";
import SayHello from "./looks/SayHello";
import SayHelloWithTimer from "./looks/SayHelloWithTimer";
import SetThink from "./looks/SetThink";
import SetThinkWithTimer from "./looks/setThinkWithTimer";
import ImageVisibility from "./looks/ImageVisibility";

export default function Sidebar({
  changeX,
  changeY,
  changeXby,
  changeYby,
  degree,
  handleRotationChange,
  handlestepsChange,
  handleXChange,
  handleYChange,
  moveCat,
  onDrag,
  position,
  rotateCat,
  steps,
  stepsX,
  stepsY,
  setChangeX,
  setChangeY,
  helloMsg,
  setHelloMsg,
  thinkingMsg,
  setThinkingMsg,
  setMessage,
  msgTime,
  setMsgTime,
  handleMessageWithTime,
  setShowImage,
}) {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold"> {"Motion"} </div>
      <MoveSteps
        moveCat={moveCat}
        steps={steps}
        handlestepsChange={handlestepsChange}
      />
      <HandleLeftRotation
        rotateCat={rotateCat}
        degree={degree}
        handleRotationChange={handleRotationChange}
      />
      <HandleRightRotation
        rotateCat={rotateCat}
        degree={degree}
        handleRotationChange={handleRotationChange}
      />
      <HandleXYposition
        onDrag={onDrag}
        stepsX={stepsX}
        stepsY={stepsY}
        handleXChange={handleXChange}
        handleYChange={handleYChange}
      />
      <HandleXPostion
        onDrag={onDrag}
        stepsX={stepsX}
        handleXChange={handleXChange}
        position={position}
      />
      <HandleYPosition
        onDrag={onDrag}
        stepsY={stepsY}
        position={position}
        handleYChange={handleYChange}
      />
      <MoveXposition
        changeXby={changeXby}
        changeX={changeX}
        setChangeX={setChangeX}
      />
      <MoveYposition
        changeY={changeY}
        setChangeY={setChangeY}
        changeYby={changeYby}
      />
      <div className="font-bold"> {"Looks"} </div>
      <SayHello
        helloMsg={helloMsg}
        setHelloMsg={setHelloMsg}
        setMessage={setMessage}
      />
      <SayHelloWithTimer
        helloMsg={helloMsg}
        setHelloMsg={setHelloMsg}
        msgTime={msgTime}
        setMsgTime={setMsgTime}
        handleMessageWithTime={handleMessageWithTime}
      />
      <SetThink
        thinkingMsg={thinkingMsg}
        setThinkingMsg={setThinkingMsg}
        setMessage={setMessage}
      />
      <SetThinkWithTimer
        thinkingMsg={thinkingMsg}
        setThinkingMsg={setThinkingMsg}
        msgTime={msgTime}
        setMsgTime={setMsgTime}
        handleMessageWithTime={handleMessageWithTime}
      />
      <ImageVisibility
        action={"Show"}
        setShowImage={setShowImage}
        value={true}
      />
      <ImageVisibility
        action={"Hide"}
        setShowImage={setShowImage}
        value={false}
      />
    </div>
  );
}
