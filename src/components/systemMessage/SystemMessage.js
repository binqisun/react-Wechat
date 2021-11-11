import React from "react";
import "./systemMessage.css";

export default function SystemMessage({ systemMessages }) {
  return (
    <div className="systemContent">
      <p className="systemP">{systemMessages.text}</p>
    </div>
  );
}
