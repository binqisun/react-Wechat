import React from "react";
import "./systemMessage.css";

export default function SystemMessage({ systemMessages }) {
  return (
    // Display system messages passed from parent component
    <div className="systemContent">
      <p className="systemP">{systemMessages.text}</p>
    </div>
  );
}
