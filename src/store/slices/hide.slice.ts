import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  time: 15,
  isHide: true,
};
const hideSlice = createSlice({
  name: "hide",
  initialState,
  reducers: {
    changeHide: (state, action: PayloadAction<boolean>) => {
      state.isHide = action.payload;
    },
    changeTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
  },
});
const { actions, reducer } = hideSlice;
export const { changeHide, changeTime } = actions;
export default reducer;
