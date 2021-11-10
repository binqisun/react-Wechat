import React from "react";
import SystemMessage from "./systemMessage/systemMessage";
import ImageMessage from "./imageMessage/imageMessage";
import TextMessage from "./textMessage/textMessage";

export default function messageList() {
  return (
    <div className="messageList">
      <SystemMessage />
      <ImageMessage />
      <TextMessage />
    </div>
  );
}
