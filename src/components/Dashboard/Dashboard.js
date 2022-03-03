import React, { useState } from "react";
import Header from "./Header";
import Board from "./Board";

import "./Dashboard.css";
import Modal from "../common/Modal";

export const Dashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="dashboard_container">
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <Board modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </div>
  );
};
