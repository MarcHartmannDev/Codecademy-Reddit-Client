import React from "react";
import Post from "../post/post";
import "./posts.scss";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "./postsSlice";
import { selectToken } from "../../app/appSlice";
import { useEffect } from "react";

const Posts = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectToken);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    if (token) {
      dispatch(getPosts(token));
    }
  }, [dispatch, token]);

  return (
    <div className="posts">
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default Posts;
