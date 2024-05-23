import React from "react";
import "./App.css";
import { useDrag } from 'react-dnd';


const Card = ({item}) => {

  const [{isDragging, dropped}, dragRef] = useDrag(() => ({
    type: "card",
    item: {id: item?.id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      dropped: !!monitor.didDrop()
    })
  }));
    
  // console.log(`Card is dragging: ${isDragging}`);
  // console.log(`Card dropped: ${dropped}`);

  return (
    <div className="card-container" ref={dragRef}>
      <div className="card" style={{width: 150}}>
        <h5 className="card-title" style={{textAlign: "center"}}>{item?.title}</h5> 
        <img className="card-img-top" style={{width: '100%', height: '100%'}} src={item?.image} alt="Card image cap"/>
      </div>
    </div>
  );
};

export default Card;