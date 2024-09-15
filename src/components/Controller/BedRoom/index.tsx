import * as React from "react";
import Button from "@/components/Button";
import {
  changeVolumeRain,
  openButtonRain,
  closeButtonRain,
  changeVolumeKeyboard,
  openButtonKeyboard,
  closeButtonKeyboard,
} from "@/store/slices/sound.slice";
import { changeWeather } from "@/store/slices/case.slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { WEATHER } from "@/utils/enums";
export interface IControllerBedRoomProps {}

export default function ControllerBedRoom(props: IControllerBedRoomProps) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const dispatch = useDispatch();

  const { rain, keyboard } = useSelector((state: RootState) => state.sound);
  //tat/bat thanh am thanh
  const { stateRain, stateKeyboard } = useSelector(
    (state: RootState) => state.sound
  );
  //-----mua
  //chuyen canh+am thanh
  const handleChangeWeather = () => {
    if (weather == WEATHER.STOP_RAIN) {
      dispatch(changeWeather(WEATHER.RAIN));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather(WEATHER.STOP_RAIN));
      dispatch(closeButtonRain());
    }
  };
  //chuyen am lwong
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));

    if (v > 0) dispatch(changeWeather(WEATHER.RAIN));
    else dispatch(changeWeather(WEATHER.STOP_RAIN));
  };
  //-------ban phim
  const handleChangeKeyboard = () => {
    if (stateKeyboard == true) {
      dispatch(closeButtonKeyboard());
    } else {
      dispatch(openButtonKeyboard());
    }
  };
  const changeVolumeKeyboardButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeKeyboard(v));
  };
  return (
    <div className="w-full h-full">
      <div className="absolute top-[45%] left-[45%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[20%] lg:right-[22%] top-[30%] right-[15%]">
        <Button
          title="City Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
    </div>
  );
}
