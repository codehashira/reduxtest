import React, { useState } from "react";
import SearchInput from "../common/SearchInput";
import "./Header.css";

import Button from "../common/Button";

const Header = (props) => {
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
          props.setModalVisible(!props.modalVisible);
        }}
      />
    </div>
  );
};

export default Header;
