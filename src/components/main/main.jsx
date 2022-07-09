import React from "react";
import Posts from "../posts/posts";
import Top from "../top/top";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <Top />
      <Posts />
    </div>
  );
};

export default Main;
