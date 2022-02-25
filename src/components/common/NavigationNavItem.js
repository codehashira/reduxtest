import React from "react";
import "./NavigationNavItem.css";
const NavigationNavItem = (props) => {
  console.log(props.activeIndex === props.index);

  return (
    <div
      className="navigationNavItem_container"
      onClick={() => props.handleClick(props.index)}
    >
      <p
        style={
          ([{ fontSize: "16px" }],
          props.activeIndex === props.index
            ? {
                fontWeight: "bold",
              }
            : {})
        }
      >
        {props.title}
      </p>
      <span
        style={{
          fontSize: "10px",
          color: "#f5f6fa",
          //   backgroundColor: "#f5f6fa",
          borderRadius: "50%",
          height: "20px",
          width: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.count}
      </span>
    </div>
  );
};

export default NavigationNavItem;
