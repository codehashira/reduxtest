import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import "./Header.css";

import Button from "../common/Button";

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div
      className="header_container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0px 1rem",
      }}
    >
      <SearchInput />
      <Button
        title="ADD +"
        onClick={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <div
        className="modal_container"
        style={
          modalVisible
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }
            : { display: "none" }
        }
        onClick={() => setModalVisible(!modalVisible)}
      >
        <div className="add_task_modal">
          <p>Modal</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
