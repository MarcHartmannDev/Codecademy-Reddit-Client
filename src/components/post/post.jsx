import React from "react";
import "./post.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = ({ post, id }) => {
  const [user, setUser] = useState({});

  const url = process.env.REACT_APP_URL;

  const htmlDecode = (url) => {
    if (url) {
      const doc = new DOMParser().parseFromString(url, "text/html");
      return doc.documentElement.textContent;
    }
  };

  const getTime = () => {
    const now = new Date().getTime();
    const created = new Date(post.data.created_utc * 1000).getTime();
    const difference = new Date(now - created);

    if (difference.getHours() >= 24) {
      return `${Math.floor(difference.getHours() / 24)} days ago`;
    }
    if (difference.getHours() > 0) {
      return `${difference.getHours()} hours ago`;
    } else if (difference.getMinutes() >= 0) {
      return `${difference.getMinutes()} minutes ago`;
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const newUser = await axios.get(
        `${url}/api/user?user=${post.data.author_fullname}`
      );
      const key = Object.keys(newUser.data)[0];
      setUser(newUser.data[key]);
    };

    getUser();
  }, [post.data.author_fullname]);

  return (
    <div className="post">
      <Link to={`/post/${id}`}>
        <span className="votes">{post.data.ups} ups</span>
        <div className="contentwrapper">
          <div className="contenthead">
            <img src={htmlDecode(user.profile_img)} alt="Profile" />
            <span className="userdetails">
              r/{user.name} in r/{post.data.subreddit} - {getTime()}
            </span>
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
              <span>{post.data.num_comments} Comments</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
