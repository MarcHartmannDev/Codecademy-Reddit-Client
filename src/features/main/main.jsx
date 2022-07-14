import React from "react";
import Posts from "../../components/posts/posts";
import Top from "../../components/top/top";
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
