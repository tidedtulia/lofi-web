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

import { changeLocation, changeWeather } from "@/store/slices/case.slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { PLACE, WEATHER } from "@/utils/enums";
export interface IControllerLakeHouseInSideProps {}

export default function ControllerLakeHouseInSide(
  props: IControllerLakeHouseInSideProps
) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const dispatch = useDispatch();
  const hadleOutside = () => {
    dispatch(changeLocation(PLACE.OUT_SIDE));
  };

  const { rain, keyboard, people } = useSelector(
    (state: RootState) => state.sound
  );
  //tat/bat thanh am thanh
  const { stateRain, stateKeyboard, statePeople } = useSelector(
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
      <div className="absolute  lg:top-[40%] lg:left-[50%] top-[40%] left-[40%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute lg:top-[70%] lg:right-[10%] top-[65%] right-[10%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>

      <div className="absolute lg:top-[50%] lg:left-[30%] top-[50%] left-[15%]">
        <Button
          title="Rain"
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
