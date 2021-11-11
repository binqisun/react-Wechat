import React from "react";
import SystemMessage from "./systemMessage/systemMessage";
import ImageMessage from "./imageMessage/imageMessage";
import TextMessage from "./textMessage/textMessage";

// Create fake messages
const messages = [
  {
    id: 0,
    type: 1,
    time: "1586923206000",
    text: "Hi 你们下午有空一起吃饭吗？",
    isUser: true
  },
  {
    id: 1,
    type: 1,
    time: "1586923302000",
    text: "好啊， 吃什么？",
    isUser: false
  },
  {
    id: 2,
    type: 1,
    time: "1586929802000",
    text: "这个怎么样？",
    isUser: true
  },
  {
    id: 3,
    type: 3,
    time: "158692902000",
    text: "你撤回一条信息",
    isUser: false
  },
  {
    id: 3,
    type: 2,
    time: "158692902000",
    url: "./public/HotPot.jpeg",
    isUser: false
  }
];
const textMessages = messages.filter((message) => {
  return message.type === 1;
});
const imageMessages = messages.filter((message) => {
  return message.type === 2;
});
const systemMessages = messages.filter((message) => {
  return message.type === 3;
});

export default function messageList() {
  return (
    <div className="messageList">
      <SystemMessage systemMessages={systemMessages} />
      <ImageMessage imageMessages={imageMessages} />
      <TextMessage textMessages={textMessages} />
    </div>
  );
}
