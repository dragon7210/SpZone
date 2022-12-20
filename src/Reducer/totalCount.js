import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const totalCountSlice = createSlice({
  name: "TotalCount",
  initialState,
  reducers: {
    setTotalCount: (state, action) => {
      console.log(action.payload);
      return { value: action.payload };
    },
  },
});

export const { setTotalCount } = totalCountSlice.actions;

export default totalCountSlice.reducer;
