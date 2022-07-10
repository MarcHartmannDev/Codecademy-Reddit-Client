import React from "react";
import "./post.scss";
import pic from "../../assets/img/4709870.webp";

const Post = () => {
  return (
    <div className="post">
      <span className="votes">147</span>
      <div className="contentwrapper">
        <div className="contenthead">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="Profile"
          />
          <span className="userdetails">r/username - 9 minutes ago</span>
        </div>
        <div className="content">
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium, voluptatem quod ratione fugiat facilis provident.
            Repellendus ad debitis explicabo saepe!
          </p>
          <img src={pic} alt="" />
          <div className="comments">
            <i class="fa-solid fa-comment-dots"></i>
            <span>31 Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
