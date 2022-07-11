import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPopular = createAsyncThunk(
  "top/getPopular",
  async ({ limit, token }) => {
    const popular = await axios.get(
      `https://reddit-client-backend.herokuapp.com/popular?limit=${limit}&token=${token}`
    );
    return popular.data;
  }
);

const topSlice = createSlice({
  name: "top",
  initialState: {
    communities: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getPopular.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(getPopular.fulfilled, (state, action) => {
      const newCommunities = action.payload.data.children;

      state.isLoading = false;
      state.hasError = false;

      state.communities = newCommunities;
    });
  },
});

export const selectCommunities = (state) => state.top.communities;

export default topSlice.reducer;
