import React from "react";
import Topic from "../topic/topic";
import "./trending.scss";

const Trending = () => {
  return (
    <div className="trending">
      <h1>Trending today</h1>
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
    </div>
  );
};

export default Trending;
