import React from "react";
import "./textMessage.css";
import OtherText from "./OtherText";
import MeText from "./MeText";

export default function TextMessage({ textMessages }) {
  return (
    <div className="textMessage">
      {textMessages.isUser === true ? (
        // display the text messages sent from myself
        <MeText text={textMessages.text} />
      ) : (
        // display the text messages sent from other people
        <OtherText text={textMessages.text} />
      )}
    </div>
  );
}
