import React from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import {
  taskCompleted,
  taskDeleted,
  taskSetActiveEditID,
  taskEdited,
} from "../../features/taskSlice";
import Checkbox from "./Checkbox";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(taskCompleted(props.data.id));
  };

  const handleDeleteTask = () => {
    dispatch(taskDeleted(props.data.id));
  };

  return (
    <div className="card_container">
      <Checkbox isCompleted={props.data.completed} />
      <p style={{ color: "#192a56" }}>{props.data.title}</p>
      <p>{props.data.date}</p>

      <div className="card_options">
        <span class="material-icons-outlined" onClick={handleCompleteTask}>
          done
        </span>
        <span
          class="material-icons-outlined"
          onClick={() => {
            dispatch(taskSetActiveEditID(props.data.id));
            props.setModalVisible(!props.modalVisible);
          }}
        >
          edit
        </span>
        <span class="material-icons-outlined" onClick={handleDeleteTask}>
          clear
        </span>
      </div>
    </div>
  );
};

export default Card;
