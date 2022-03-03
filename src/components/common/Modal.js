import React, { useState } from "react";
import "./Modal.css";
import Button from "../common/Button";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  taskAdded,
  taskEdited,
  taskSetActiveEditID,
} from "../../features/taskSlice";

const Modal = (props) => {
  const ActiveEditId = useSelector((state) => state.Tasks.activeEditId);

  const ActiveEditTaskTitle = useSelector((state) =>
    state.Tasks.tasks.find((item) => item.id === ActiveEditId)
  );

  console.log(ActiveEditTaskTitle);

  const [taskInput, setTaskInput] = useState("");

  const dispatch = useDispatch();
  return (
    <div
      className="modal_container"
      style={
        props.modalVisible
          ? {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }
          : { display: "none" }
      }
    >
      <div className="add_task_modal">
        <header>
          <h2>ADD TASK</h2>
        </header>
        <div>
          <input
            type={"text"}
            value={taskInput}
            onChange={(text) => setTaskInput(text.target.value)}
            placeholder="What do you wanna do today!"
            className="modal_task_input"
          />
          <div>
            <Button
              title="DONE"
              onClick={() => {
                if (ActiveEditId !== null) {
                  dispatch(
                    taskEdited({
                      title: taskInput,
                      date: new Date().toLocaleDateString(),
                    })
                  );
                  dispatch(taskSetActiveEditID(null));
                  props.setModalVisible(!props.modalVisible);
                  setTaskInput("");
                } else {
                  const data = {
                    id: nanoid(),
                    title: taskInput,
                    date: new Date().toLocaleDateString(),
                    completed: false,
                  };
                  dispatch(taskAdded(data));

                  props.setModalVisible(!props.modalVisible);
                  setTaskInput("");
                }
              }}
            />
            <Button title="CANCEL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
