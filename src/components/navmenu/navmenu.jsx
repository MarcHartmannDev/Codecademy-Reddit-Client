import React from "react";
import "./navmenu.scss";
import { Link } from "react-router-dom";

const Navmenu = ({ visible }) => {
  return (
    <div data-visible={visible} className="navmenu">
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navmenu;
