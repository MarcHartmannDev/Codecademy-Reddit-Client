import React from "react";
import "./top.scss";
import menu from "../../assets/img/Group 2.png";
import Community from "../community/community";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPopular, selectCommunities } from "./topSlice";

const Top = () => {
  const dispatch = useDispatch();
  const communities = useSelector(selectCommunities);

  useEffect(() => {
    dispatch(getPopular({ limit: 5 }));
  }, [dispatch]);

  return (
    <div className="top">
      <div className="topHeader">
        Top Communities
        <img src={menu} alt="Filter Menu" />{" "}
      </div>
      <div className="communities">
        {communities.map((community, index) => {
          return (
            <Community key={index} community={community} count={index + 1} />
          );
        })}
        <div className="btnwrapper">
          <button className="viewall">View all</button>
        </div>
      </div>
    </div>
  );
};

export default Top;
