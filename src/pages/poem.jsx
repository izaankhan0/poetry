import React from "react";
import "../styles/poem.css";
import poemBg from "../assets/poem-bg.png";
import Ink from "../assets/ink.png";
import { useNavigate } from "react-router-dom";

export default function Poem(props) {
  const navigate = useNavigate();

  // Splitting poem into individual lines and handling gaps
  const lines = [];
  
  props.poem.split("\n").forEach((line, index) => {
    const alignment = props.alignments[index] || "gap"; // Default alignment is right

    if (alignment === "") {
      // Push an explicit div to create a real gap
      lines.push(
        <div className="gap" key={`gap-${index}`}></div>
      );
    } else {
      lines.push(
        <p key={index} className={alignment}>
          {line}
        </p>
      );
    }
  });

  return (
    <div className="poem">
      <img src={poemBg} alt="Poem Background" />
      <div className="top">
        <button onClick={() => navigate(-1)}>Back</button>
        <h1>{props.date}</h1>
        <h2>{props.title}</h2>
      </div>
      <div className="box">
        <div className="poem-txt">{lines}</div>
        <div className="foot">
          <img src={Ink} alt="Ink" />
          <p>- {props.author}</p>
        </div>
      </div>
    </div>
  );
}
