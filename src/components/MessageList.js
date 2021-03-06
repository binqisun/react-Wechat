import React, { useState } from "react";

// import components for different message types
import SystemMessage from "./systemMessage/SystemMessage";
import ImageMessage from "./imageMessage/ImageMessage";
import TextMessage from "./textMessage/TextMessage";

export default function MessageList() {
  // Create fake messages
  // useState for future messages migration
  const [messages] = useState([
    {
      id: 0,
      type: 1,
      user_id: 2761,
      name: "吃货1号",
      time: "1586923206000",
      text: "Hi 你们下午有空一起吃饭吗？",
      isUser: true
    },
    {
      id: 1,
      type: 1,
      user_id: 8312,
      name: "吃货2号",
      time: "1586923302000",
      text: "好啊， 吃什么?",
      isUser: false
    },
    {
      id: 2,
      type: 1,
      user_id: 2761,
      name: "吃货1号",
      time: "1586929802000",
      text: "这个怎么样？",
      isUser: true
    },
    {
      id: 3,
      type: 2,
      user_id: 2761,
      name: "吃货1号",
      time: "158692902000",
      url: "../HotPot.jpeg",
      isUser: true
    },
    {
      id: 4,
      type: 3,
      time: "158692902000",
      text: "你撤回一条信息",
      isUser: false
    },
    {
      id: 5,
      type: 1,
      user_id: 8312,
      name: "吃货2号",
      time: "158692902000",
      text: "问一下其他人意见吧",
      isUser: false
    },
    {
      id: 6,
      type: 3,
      time: "158692902000",
      text: "吃货3号加入群聊",
      isUser: false
    }
  ]);

  // Display different types of messages
  const messageContent = messages.map((message) => {
    return message.type === 1 ? (
      // Type 1 display text messages
      <TextMessage textMessages={message} />
    ) : message.type === 2 ? (
      // Type 2 display image messages
      <ImageMessage imageMessages={message} />
    ) : message.type === 3 ? (
      // Type 3 display System messages
      <SystemMessage systemMessages={message} />
    ) : (
      "Other Message Type"
    );
  });

  // read the message content
  return <div className="messageList">{messageContent}</div>;
}
