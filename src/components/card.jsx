import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/card.css";

export default function Card(props) {
  const navigate = useNavigate();

  return (
    <div
      className="Card"
      style={{ backgroundColor: props.bgc, cursor: "pointer" }}
      onClick={() => navigate(props.link)}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
