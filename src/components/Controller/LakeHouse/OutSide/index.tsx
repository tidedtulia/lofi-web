import * as React from "react";
import Button from "@/components/Button";

import {
  changeVolumeRain,
  changeVolumeKeyboard,
  changeVolumeBird,
  openButtonRain,
  closeButtonRain,
  openButtonKeyboard,
  closeButtonKeyboard,
  openButtonBird,
  closeButtonBird,
} from "@/store/slices/sound.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { PLACE, WEATHER } from "@/utils/enums";
import { changeLocation, changeWeather } from "@/store/slices/case.slice";
export interface IControllerLakeHouseOutSideProps {}

export default function ControllerLakeHouseOutSide(
  props: IControllerLakeHouseOutSideProps
) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, keyboard, bird } = useSelector(
    (state: RootState) => state.sound
  );

  const { stateRain, stateKeyboard, stateBird } = useSelector(
    (state: RootState) => state.sound
  );

  const dispatch = useDispatch();

  const handleInside = () => {
    dispatch(changeLocation(PLACE.IN_SIDE));
  };
  const handleChangeWeather = () => {
    if (weather == WEATHER.STOP_RAIN) {
      dispatch(changeWeather(WEATHER.RAIN));
      dispatch(openButtonRain());
    } else {
      dispatch(changeWeather(WEATHER.STOP_RAIN));
      dispatch(closeButtonRain());
    }
  };
  const changeVolumeRainButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeRain(v));

    if (v > 0) dispatch(changeWeather(WEATHER.RAIN));
    else dispatch(changeWeather(WEATHER.STOP_RAIN));
  };

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

  const handleChangeBird = () => {
    if (stateBird == true) {
      dispatch(closeButtonBird());
    } else {
      dispatch(openButtonBird());
    }
  };
  const changeVolumeBirdButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeBird(v));
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-[40%] left-[50%]">
        <Button
          title="Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute lg:top-[40%] lg:left-[15%] top-[35%] left-[10%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute lg:left-[15%] top-[75%] left-[10%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[50%] lg:right-[15%] top-[75%] right-[10%]">
        <Button
          title="Bird Chirping"
          type="audio"
          state={stateBird}
          volume={bird}
          action={handleChangeBird}
          changeVolumeSound={changeVolumeBirdButton}
        />
      </div>
    </div>
  );
}
