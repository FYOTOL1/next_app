import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers: any = createAsyncThunk(
  "userSlice/getUsers",
  async () => {
    try {
      const GetUsers = await axios.get("/api/account/user");
      const data = await GetUsers?.data;
      return data;
    } catch (error) {
      return console.log("ERROR", error);
    }
  }
);

export const postUser: any = createAsyncThunk(
  "userSlice/postUser",
  async ({ Username, Phone_number, Email, Password }: any) => {
    try {
      const GetUsers = await axios.post("/api/account/user", {
        username: Username,
        phone_number: Phone_number,
        email: Email,
        password: Password,
      });
      const Data = await GetUsers?.data;
      return Data;
    } catch (error) {
      return error;
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.data = payload;
    },
    //
    [postUser.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [postUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [postUser.rejected]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export default userSlice.reducer;
