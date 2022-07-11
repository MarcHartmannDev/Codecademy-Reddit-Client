import React from "react";
import "./post.scss";
import { useSelector } from "react-redux";
import { selectToken } from "../../app/appSlice";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Post = ({ post }) => {
  const [user, setUser] = useState({});

  const token = useSelector(selectToken);

  const htmlDecode = (url) => {
    if (url) {
      const doc = new DOMParser().parseFromString(url, "text/html");
      return doc.documentElement.textContent;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const newUser = await axios.get(
        `https://reddit-client-backend.herokuapp.com/user?token=${token}&user=${post.data.author_fullname}`
      );
      const key = Object.keys(newUser.data)[0];
      setUser(newUser.data[key]);
    };

    getUser();
  }, [token, post.data.author_fullname]);

  return (
    <div className="post">
      <span className="votes">{post.data.ups}</span>
      <div className="contentwrapper">
        <div className="contenthead">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="Profile"
          />
          <span className="userdetails">r/{user.name} - 9 minutes ago</span>
        </div>
        <div className="content">
          <p className="text">{post.data.title}</p>
          <img
            src={
              post.data.preview &&
              htmlDecode(post.data.preview.images[0].source.url)
            }
            alt=""
          />
          <div className="comments">
            <i className="fa-solid fa-comment-dots"></i>
            <span>31 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
