import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  audio: 0.5,
  rain: 0,
  stateRain: false,
  traffic: 0,
  stateTraffic: false,
  keyboard: 0,
  stateKeyboard: false,
  people: 0,
  statePeople: false,
  train: 0,
  thunder: 0,
  forest_night: 0,
  stateForest_Night: false,
  campfire: 0,
  plane: 0,
  statePlane: false,
  bird: 0,
  stateBird: false,
};
const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    changeVolumeAudio: (state, action) => {
      state.audio = action.payload;
    },
    changeVolumeRain: (state, action) => {
      state.rain = action.payload;
      if (action.payload > 0) state.stateRain = true;
      else state.stateRain = false;
    },
    changeVolumeTraffic: (state, action) => {
      state.traffic = action.payload;
    },
    changeVolumeKeyboard: (state, action) => {
      state.keyboard = action.payload;
      if (action.payload > 0) state.stateKeyboard = true;
      else state.stateKeyboard = false;
    },
    changeVolumePeople: (state, action) => {
      state.people = action.payload;
      if (action.payload > 0) state.statePeople = true;
      else state.statePeople = false;
    },
    changeVolumeTrain: (state, action) => {
      state.train = action.payload;
    },
    changeVolumeThunder: (state, action) => {
      state.thunder = action.payload;
    },
    changeVolumeForestNight: (state, action) => {
      state.forest_night = action.payload;
      if (action.payload > 0) state.stateForest_Night = true;
      else state.stateForest_Night = false;
    },
    changeVolumeCampfire: (state, action) => {
      state.campfire = action.payload;
    },
    changeVolumePlane: (state, action) => {
      state.plane = action.payload;
      if (action.payload > 0) state.statePlane = true;
      else state.statePlane = false;
    },
    changeVolumeBird: (state, action) => {
      state.bird = action.payload;
      if (action.payload > 0) state.stateBird = true;
      else state.stateBird = false;
    },
    openButtonRain: (state) => {
      state.rain = 0.5;
      state.stateRain = true;
    },
    closeButtonRain: (state) => {
      state.rain = 0;
      state.stateRain = false;
    },
    openButtonTraffic: (state) => {
      state.traffic = 0.5;
      state.stateTraffic = true;
    },
    closeButtonTraffic: (state) => {
      state.traffic = 0;
      state.stateTraffic = false;
    },
    openButtonKeyboard: (state) => {
      state.keyboard = 0.5;
      state.stateKeyboard = true;
    },
    closeButtonKeyboard: (state) => {
      state.keyboard = 0;
      state.stateKeyboard = false;
    },
    openButtonPeople: (state) => {
      state.people = 0.5;
      state.statePeople = true;
    },
    closeButtonPeople: (state) => {
      state.people = 0;
      state.statePeople = false;
    },
    openButtonForestNight: (state) => {
      state.forest_night = 0.5;
      state.stateForest_Night = true;
    },
    closeButtonForestNight: (state) => {
      state.forest_night = 0;
      state.stateForest_Night = false;
    },
    openButtonPlane: (state) => {
      state.plane = 0.5;
      state.statePlane = true;
    },
    closeButtonPlane: (state) => {
      state.plane = 0;
      state.statePlane = false;
    },
    openButtonBird: (state) => {
      state.bird = 0.5;
      state.stateBird = true;
    },
    closeButtonBird: (state) => {
      state.bird = 0;
      state.stateBird = false;
    },
  },
});
const { actions, reducer } = soundSlice;
export const {
  changeVolumeAudio,
  changeVolumeRain,
  changeVolumeTraffic,
  changeVolumeKeyboard,
  changeVolumePeople,
  changeVolumeTrain,
  changeVolumeThunder,
  changeVolumeForestNight,
  changeVolumeCampfire,
  changeVolumePlane,
  changeVolumeBird,

  openButtonRain,
  closeButtonRain,

  openButtonTraffic,
  closeButtonTraffic,

  openButtonKeyboard,
  closeButtonKeyboard,

  openButtonPeople,
  closeButtonPeople,

  openButtonForestNight,
  closeButtonForestNight,

  openButtonPlane,
  closeButtonPlane,

  openButtonBird,
  closeButtonBird,
} = actions;
export default reducer;
