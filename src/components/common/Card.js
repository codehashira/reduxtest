import React from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { taskCompleted } from "../../features/taskSlice";

const Card = (props) => {

  const dispatch = useDispatch()

  const handleCompleteTask = () => {
    dispatch(taskCompleted(props.data.id))
  }

  return (
    <div className="card_container" onClick={handleCompleteTask}>
      <p style={{ color: "#192a56" }}>{props.data.title}</p>
      <p>{props.data.date}</p>
    </div>
  );
};

export default Card;
