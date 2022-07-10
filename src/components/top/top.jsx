import React from "react";
import "./top.scss";
import menu from "../../assets/img/Group 2.png";
import Community from "../community/community";

const Top = () => {
  return (
    <div className="top">
      <div className="topHeader">
        Top Communities
        <img src={menu} alt="Filter Menu" />{" "}
      </div>
      <div className="communities">
        <Community />
        <Community />
        <Community />
        <Community />
        <div className="btnwrapper">
          <button className="viewall">View all</button>
        </div>
      </div>
    </div>
  );
};

export default Top;
