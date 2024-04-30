import React from "react";
import "./Card.css";
import ResizedImage from "./ResizedImg";

const Card = ({data}) => {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.key} className="card-item">
          <ResizedImage src={item.image} width={120} height={125}/>
        </div>
      ))}
    </div>
  )
}

export default Card;