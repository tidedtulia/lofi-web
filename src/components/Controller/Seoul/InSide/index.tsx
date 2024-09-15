import Button from "@/components/Button";
import { changeLocation, changeWeather } from "@/store/slices/case.slice";
import {
  changeVolumeKeyboard,
  changeVolumeRain,
  closeButtonKeyboard,
  closeButtonRain,
  openButtonKeyboard,
  openButtonRain,
} from "@/store/slices/sound.slice";
import { RootState } from "@/store";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PLACE, WEATHER } from "@/utils/enums";

export interface IInSideProps {}

export default function InSide(props: IInSideProps) {
  const dispatch = useDispatch();

  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, keyboard } = useSelector((state: RootState) => state.sound);
  //tat/bat thanh am thanh
  const { stateRain, stateKeyboard } = useSelector(
    (state: RootState) => state.sound
  );

  //ra ngoai
  const hadleOutside = () => {
    dispatch(changeLocation(PLACE.OUT_SIDE));
  };

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
      <div className="absolute  lg:top-[40%] lg:left-[10%] top-[40%] left-[10%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute lg:top-[80%] lg:left-[35%] top-[70%] left-[30%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[20%] lg:left-[50%] top-[20%] left-[50%]">
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
