import React from "react";
import Posts from "../../components/posts/posts";
import Top from "../../components/top/top";
import Trending from "../../components/trending/trending";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <Top />
      <Posts />
      <Trending />
    </div>
  );
};

export default Main;
