import React from "react";
import "./imageMessage.css";
// import MeImage from "./meImage";
// import OtherImage from "./otherImage";

export default function imageMessage({ imageMessages }) {
  const image = imageMessages.map((message, index) => {
    if (message.type === 2) {
      if (message.isUser === true) {
        return <div>me image</div>;
      } else {
        return <div>other image</div>;
      }
    } else {
      return <div></div>;
    }
  });
  return <div className="imageMessage">{image}</div>;
}
