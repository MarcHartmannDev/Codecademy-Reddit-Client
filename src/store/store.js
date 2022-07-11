import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../app/appSlice";
import topReducer from "../components/top/topSlice";
import postsReducer from "../components/posts/postsSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    top: topReducer,
    posts: postsReducer,
  },
});

export default store;
