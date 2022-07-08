import React from "react";
import "./searchbar.scss";
import lupe from "../../assets/img/Lupe.png";
import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("Search");

  const handleFocus = () => {
    if (search === "Search") {
      setSearch("");
    }
  };

  const handleBlur = () => {
    if (!search) {
      setSearch("Search");
    }
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div className="searchbar">
      <input
        id="searchbar"
        type="text"
        value={search}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <img src={lupe} alt="Lupe" />
    </div>
  );
};

export default Searchbar;
