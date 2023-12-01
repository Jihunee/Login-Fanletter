import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

const initialState = token;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      return action.payload;
    },
  },
});

export default authSlice.reducer;
export const { signUp } = authSlice.actions;
