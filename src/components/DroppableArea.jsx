import React from "react";
import { useDrop } from "react-dnd";
import { useState } from "react";
import "./DroppableArea.css";
import Card from "./Card.jsx";


import data from "../data.js";

const DropZone = ({onDrop}) => {

  const [dropTarget, setDropTarget] = useState([]);

  const addToTarget = (item) => {
    console.log(item.id);
    const cardList = data.filter((card) => item.id === card.id);
    if (cardList.length > 0) {
      setDropTarget([cardList[0]]);
    }
  };

  const [{isOver}, dropRef] = useDrop({
    accept: 'card', // type of element to accept
    drop: (item) => {
      addToTarget(item); //function that's passed the item
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div className="drop-zone-container" ref={dropRef}>
      {dropTarget.map((picture) => {
        return <Card item={picture} />;
      })
      }
d    </div>
  )
}

export default DropZone;