import React from "react";
import "../styles/card.css";

export default function Card(props) {
  return (
    <div className="Card" style={{ backgroundColor: props.bgc }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
