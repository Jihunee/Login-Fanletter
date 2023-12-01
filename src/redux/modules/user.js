import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      return [action.payload];
    },
  },
});

export default userSlice.reducer;
export const { signIn } = userSlice.actions;
