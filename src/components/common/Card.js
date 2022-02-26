import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card_container">
      <p style={{ color: "#192a56" }}>Go to office</p>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default Card;
