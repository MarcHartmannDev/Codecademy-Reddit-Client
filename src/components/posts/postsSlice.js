import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts", async (token) => {
  const posts = await axios.get(`/api/hot?token=${token}`);
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
