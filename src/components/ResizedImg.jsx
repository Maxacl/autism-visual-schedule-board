import React from "react";
import "./ResizedImg.css";

const ResizedImage = ({ src, width, height }) => {
  return (
    <div className="image-container">
      <img className="resized-image" src={src} style={{width, height}} alt="stick-drawing"></img>
    </div>
  )
}

export default ResizedImage;