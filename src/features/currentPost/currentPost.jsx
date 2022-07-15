import React from "react";
import { useParams } from "react-router-dom";
import "./currentPost.scss";
import pic from "../../assets/img/4709870.webp";
import { useState } from "react";

const CurrentPost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  return (
    <div className="currentpost">
      <div className="postcard">
        <span className="ups">1234 ups</span>
        <div className="currentpostwrapper">
          <div className="currentheader">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt=""
            />
            <span className="currentuser">
              r/HansMeiser in r/tolleThemen - 10 hours ago
            </span>
          </div>
          <p className="title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aliquam
            quisquam architecto corrupti expedita unde suscipit itaque. In, esse
            sit.
          </p>
          <div className="maincontent">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPost;
