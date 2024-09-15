import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import caseReducer from "./slices/case.slice";
import soundReducer from "./slices/sound.slice";
import musicReducer from "./slices/music.slice";
import hireReducer from "./slices/hide.slice";
import pomodoroReducer from "./slices/pomodoro.slice";
export const store = configureStore({
  reducer: {
    case: caseReducer,
    sound: soundReducer,
    music: musicReducer,
    hide: hireReducer,
    pomodoro: pomodoroReducer,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
