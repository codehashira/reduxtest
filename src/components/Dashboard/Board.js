import React from "react";
import "./Board.css";
import Card from "../common/Card.js";

const Board = () => {
  return (
    <div className="board_container">
      <div className="board_title_bar">
        <div>
          <p>Incomplete</p>
          <div>
            <Card />
          </div>
        </div>
        <div>
          <p>Completed</p>
        </div>
        <div>
          <p>Not Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Board;
