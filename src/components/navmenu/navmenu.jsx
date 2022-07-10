import React from "react";
import "./navmenu.scss";
import { Link } from "react-router-dom";

const Navmenu = ({ visible }) => {
  return (
    <div data-visible={visible} className="navmenu">
      <Link to="/">Home</Link>
    </div>
  );
};

export default Navmenu;
