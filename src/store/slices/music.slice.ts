import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "@/utils/interface";
import { MAX, MIN } from "@/utils/files";

interface MusicSlice {
  type: number;
  num: number;
  src: string;
  listMusic: Music[];
}

const initialState: MusicSlice = {
  type: 1,
  num: Math.floor(Math.random() * MAX),
  src: "",
  listMusic: [],
};
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    // changeTypeMusic: (state, action: PayloadAction<number>) => {
    //   state.type = action.payload;
    // },
    setListMusic: (state, action: PayloadAction<Music[]>) => {
      state.listMusic = action.payload;
    },
    setSrc: (state, action: PayloadAction<string>) => {
      state.src = action.payload;
    },
    changeNumMusic: (state, action: PayloadAction<number>) => {
      state.num = action.payload;
      state.src = state.listMusic[action.payload].src;
    },
    changeType: (state, action: PayloadAction<number>) => {
      state.type = action.payload;
      state.num = Math.floor(Math.random() * MIN);
    },
  },
});
const { actions, reducer } = musicSlice;
export const { setListMusic, setSrc, changeNumMusic, changeType } = actions;
export default reducer;
