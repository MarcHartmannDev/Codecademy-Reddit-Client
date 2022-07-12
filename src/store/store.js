import { configureStore } from "@reduxjs/toolkit";
import topReducer from "../components/top/topSlice";
import postsReducer from "../components/posts/postsSlice";

const store = configureStore({
  reducer: {
    top: topReducer,
    posts: postsReducer,
  },
});

export default store;
