import React from "react";
import "./Card.css";
import ResizedImage from "./ResizedImg";
import { useDrag } from 'react-dnd';


const Card = ({data}) => {
    
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.key} className="card-item">
          <div className="card-item-content">
            <ResizedImage src={item.image} width={120} height={125}/>
          </div>  
        </div>
      ))}
    </div>
  )
}

export default Card;