import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: "카리나",
};

const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    setMember: (state, action) => {
      state.member = action.payload;
    },
  },
});

export default memberSlice.reducer;
export const { setMember } = memberSlice.actions;
