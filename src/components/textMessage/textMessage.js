import React from "react";
import "./textMessage.css";
import OtherText from "./otherText";
import MeText from "./meText";

export default function textMessage({ textMessages }) {
  const text = textMessages.map((message, index) => {
    if (message.type === 1) {
      if (message.isUser === true) {
        return <MeText text={message.text} />;
      } else {
        return <OtherText text={message.text} />;
      }
    } else {
      return <div></div>;
    }
  });
  return <div className="textMessage">{text}</div>;
}
