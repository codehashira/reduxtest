import React from "react";

import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <div className="checkbox_container">
      <span
        className="mark_indicator"
        style={props.isCompleted ? { backgroundColor: "#718093" } : {}}
      ></span>
    </div>
  );
};

export default Checkbox;
