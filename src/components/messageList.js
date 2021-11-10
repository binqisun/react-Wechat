import React from "react";
import SystemMessage from "./systemMessage/systemMessage";
import ImageMessage from "./userMessage/imageMessage";
import TextMessage from "./userMessage/textMessage";

export default function messageList() {
  return (
    <div className="messageList">
      <SystemMessage />
      <ImageMessage />
      <TextMessage />
    </div>
  );
}
