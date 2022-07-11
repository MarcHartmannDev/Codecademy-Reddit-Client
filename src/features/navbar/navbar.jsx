import "./navbar.scss";
import logo from "../../assets/img/Group 8.png";
import menuBtn from "../../assets/img/Group 1.png";
import menuX from "../../assets/img/Group X.png";
import Searchbar from "../../components/searchbar/searchbar";
import React, { useState } from "react";
import Navmenu from "../../components/navmenu/navmenu";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [button, setButton] = useState(menuBtn);

  const handleClick = async () => {
    if (!visible) {
      await setVisible(true);
      await setButton(menuX);
    } else {
      await setVisible(false);
      await setButton(menuBtn);
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <Searchbar />
      <img onClick={handleClick} src={button} alt="Menu" />
      <Navmenu visible={visible} />
    </div>
  );
};

export default Navbar;
