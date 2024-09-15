import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Case } from "@/utils/interface";
import { PLACE, SCENE, TIME, WEATHER } from "@/utils/enums";

const initialState: Case = {
  scene: SCENE.LOFI_CAFE,
  place: PLACE.OUT_SIDE,
  time: TIME.DAY,
  weather: WEATHER.STOP_RAIN,
};
const caseSlice = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    changeScene: (state, action: PayloadAction<string>) => {
      state.scene = action.payload;
      state.place = PLACE.OUT_SIDE;

      // state.weather = weather_scene.stop_rain;
    },
    changeLocation: (state, action: PayloadAction<string>) => {
      state.place = action.payload;
    },
    changeDay: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    changeWeather: (state, action: PayloadAction<string>) => {
      state.weather = action.payload;
    },
  },
});
const { actions, reducer } = caseSlice;
export const { changeScene, changeLocation, changeDay, changeWeather } =
  actions;
export default reducer;
