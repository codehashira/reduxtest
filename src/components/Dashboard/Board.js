import React, { useState } from "react";
import "./Board.css";
import Card from "../common/Card.js";
import { useSelector } from "react-redux";

const Board = () => {

  const tasks = useSelector(state => state.Tasks.tasks)
  console.log(tasks)

  return (
    <div className="board_container">
      <div className="board_title_bar">
        <div>
          <p>Incomplete</p>
          <div>
            {
              tasks.filter(item => item.completed === false).map((item) => <Card data={item} />)
            }
          </div>
        </div>
        <div>
          <p>Completed</p>
          <div>
            {
              tasks.filter(item => item.completed === true).map((item) => <Card data={item} />)
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default Board;
