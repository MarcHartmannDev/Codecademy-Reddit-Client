import "./navbar.scss";
import logo from "../../assets/img/Group 8.png";
import menuBtn from "../../assets/img/Group 1.png";
import Searchbar from "../searchbar/searchbar";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <Searchbar />
      <img src={menuBtn} alt="Menu" />
    </div>
  );
};

export default Navbar;