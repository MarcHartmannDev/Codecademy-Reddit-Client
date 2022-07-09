import React from "react";
import Posts from "../posts/posts";
import Top from "../top/top";
import Trending from "../trending/trending";
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
