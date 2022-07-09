import React, { useState } from "react";
import "./top.scss";
import menu from "../../assets/img/Group 2.png";
import Community from "../community/community";

const Top = () => {
  const [filter, setFilter] = useState("Top");

  return (
    <div className="top">
      <div className="topHeader">
        {filter} Communities
        <img src={menu} alt="Filter Menu" />{" "}
      </div>
      <div className="communities">
        <Community />
        <Community />
        <Community />
        <Community />
      </div>
    </div>
  );
};

export default Top;
