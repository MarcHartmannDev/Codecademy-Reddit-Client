import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_URL;

export const getPopular = createAsyncThunk(
  "top/getPopular",
  async ({ limit }) => {
    const popular = await axios.get(`${url}/api/popular?limit=${limit}`);
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
