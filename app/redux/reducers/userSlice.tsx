import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers: any = createAsyncThunk(
  "userSlice/getUsers",
  async () => {
    try {
      const GetUsers: any = await axios.get("/api/v2/get", {});
      const data = await GetUsers?.data;
      return data;
    } catch (error) {
      return console.log("ERROR", error);
    }
  }
);

export const signup: any = createAsyncThunk(
  "userSlice/signup",
  async (
    { Username, Phone_number, Email, Password, Role, Status }: any,
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const postUser = await axios.post("/api/v2/account/signup", {
        username: Username,
        phone_number: Phone_number,
        email: Email,
        password: Password,
        role: Role,
        status: Status,
      });
      const Data = await postUser?.data;
      return Data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

type LOGIN = {
  email: string;
  password: string;
  phone_number: number;
  role: string;
};

export const login: any = createAsyncThunk(
  "userSlice/login",
  async ({ email, password, phone_number }: LOGIN, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const getUserData = await axios.post("/api/v2/account/login", {
        email,
        password,
        phone_number,
      });
      const res = await getUserData?.data;
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    data: [],
    loading: false,
    error: "",
    status: "",
  },
  reducers: {
    errorController: (state, { payload }) => {
      state.error = payload;
    },
  },
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
    [signup.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [signup.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      localStorage.setItem("u_id", payload._id);
    },
    [signup.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.response.data.message;
    },
    //
    [login.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload.user;
      const set: any = localStorage.setItem("u_id", payload?.u_id);
    },
    [login.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.response.data.message;
    },
  },
});

export const { errorController } = userSlice.actions;

export default userSlice.reducer;
