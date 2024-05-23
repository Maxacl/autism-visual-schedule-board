import React from "react";
import Card from "./Card.jsx";
import data from "../data.js";
import Prompt from "./Prompt.jsx";
import DropZone from "./DroppableArea.jsx";
import { useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.css";

function App() {

  const [droppedItems, setDroppedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(10); // Assuming you start with 10 cards displayed

  const handleDrop = (item) => {
    // Add dropped item to the list of dropped items
    setDroppedItems((prevItems) => [...prevItems, item]);

    // Update current index to render the next card
    setCurrentIndex((prevIndex) => prevIndex + 1);
    console.log("This is the 'droppedItems' array:", droppedItems);
    console.log("This is the 'droppedItems' array:", JSON.stringify(droppedItems));

    console.log("This is the 'currentIndex' index:", currentIndex);

  };


  return (
    <div className="grid">
      <DndProvider backend={HTML5Backend}>
        <div className="card-container">
          {data.slice(0, 10).map((info) => (
            <Card item={info} />
          ))}
        </div>
        <Prompt />
        <DropZone onDrop={handleDrop}/>
      </DndProvider>
    </div>

  );
}

export default App;
