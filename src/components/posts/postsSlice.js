import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL;

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const posts = await axios.get(`${url}/api/hot`);
  return posts.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      const newPosts = action.payload.data.children;

      state.isLoading = false;
      state.hasError = false;

      state.posts = newPosts;
    });
  },
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
