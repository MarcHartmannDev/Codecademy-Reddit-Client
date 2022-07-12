import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getToken = createAsyncThunk("app/getToken", async () => {
  const token = await axios.get("/api/access_token");
  return token.data;
});

const appSlice = createSlice({
  name: "app",
  initialState: {
    token: "",
    expires_in: null,
    isLoading: false,
    hasError: false,
  },
  reducers: {
    deleteToken: (state, action) => {
      state.token = "";
      state.expires_in = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    });
    builder.addCase(getToken.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    });
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.token = action.payload.access_token;
      state.expires_in = action.payload.expires_in;
    });
  },
});

export const selectToken = (state) => state.app.token;
export const selectExpires = (state) => state.app.expires_in;

export default appSlice.reducer;
export const { deleteToken } = appSlice.actions;
