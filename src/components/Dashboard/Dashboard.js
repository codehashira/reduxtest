import React from "react";
import Header from "./Header";
import Board from "./Board";

import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Header />
      <Board />
    </div>
  );
};
