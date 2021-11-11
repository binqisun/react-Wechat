import React from "react";
import "./imageMessage.css";
import MeImage from "./MeImage";
import OtherImage from "./OtherImage";

export default function ImageMessage({ imageMessages }) {
  return (
    <div className="imageMessage">
      {imageMessages.isUser === true ? (
        <MeImage image={imageMessages.url} />
      ) : (
        <OtherImage image={imageMessages.url} />
      )}
    </div>
  );
}
