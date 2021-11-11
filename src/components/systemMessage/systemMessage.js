import React from "react";
import "./systemMessage.css";

export default function systemMessage({ systemMessages }) {
  const text = systemMessages.map((message, index) => {
    if (message.type === 3) {
      return <p className="systemP">{message.text}</p>;
    } else {
      return <div></div>;
    }
  });
  return <div className="systemContent">{text}</div>;
}
