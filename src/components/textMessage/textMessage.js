import React from "react";
import "./textMessage.css";
import OtherText from "./otherText";
import MeText from "./meText";

export default function textMessage() {
  return (
    <div className="textMessage">
      <OtherText />
      <MeText />
    </div>
  );
}
