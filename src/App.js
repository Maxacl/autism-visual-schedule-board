import React from "react";
import Card from "./components/Card.jsx";
import data from "./data.js";
import Prompt from "./components/Prompt.jsx";

import "./App.css";

function App() {

  return (
    <div className="grid">
      <div className="grid-container">
          <Card data={data} />
          <Card data={data} />

        <Prompt text="I Want" />
      </div>
    </div>

  );
}

export default App;
