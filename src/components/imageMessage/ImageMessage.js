import React from "react";
import "./imageMessage.css";
import MeImage from "./MeImage";
import OtherImage from "./OtherImage";

export default function ImageMessage({ imageMessages }) {
  return (
    <div className="imageMessage">
      {imageMessages.isUser === true ? (
        // display the image messages sent from myself
        <MeImage image={imageMessages.url} />
      ) : (
        // display the image messages sent from other people
        <OtherImage image={imageMessages.url} />
      )}
    </div>
  );
}
