import React from "react";
import "./Title.css";

const Title = ({title}) => {
  return (
    <h1 className="card-title">
      {title}
    </h1>
  )
}

export default Title;