import React from "react";
import Post from "../post/post";
import "./posts.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "./postsSlice";

import { useEffect } from "react";

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post id={post.data.name} post={post} />;
      })}
    </div>
  );
};

export default Posts;
