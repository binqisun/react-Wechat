import React from "react";
import "./textMessage.css";
import OtherText from "./OtherText";
import MeText from "./MeText";

export default function TextMessage({ textMessages }) {
  return (
    <div className="textMessage">
      {textMessages.isUser === true ? (
        <MeText text={textMessages.text} />
      ) : (
        <OtherText text={textMessages.text} />
      )}
    </div>
  );
}
