import * as React from "react";
import style from "./style.module.css";
import Button from "@/components/Button";
import {
  changeVolumeRain,
  openButtonRain,
  closeButtonRain,
  changeVolumeKeyboard,
  openButtonKeyboard,
  closeButtonKeyboard,
  changeVolumePeople,
  openButtonPeople,
  closeButtonPeople,
} from "@/store/slices/sound.slice";

import { changeLocation, changeWeather } from "@/store/slices/case.slice";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/store";
import { PLACE, WEATHER } from "@/utils/enums";
export interface IInSideProps {}

function InSide(props: IInSideProps) {
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
  //chuyen am luong
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

  //-----people
  const handleChangePeople = () => {
    if (statePeople == true) {
      dispatch(closeButtonPeople());
    } else {
      dispatch(openButtonPeople());
    }
  };
  const changeVolumePeopleButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumePeople(v));
  };

  return (
    <div className={style.container}>
      <div className="absolute  top-[40%] left-[70%]">
        <Button title="Outside" type="position" action={hadleOutside} />
      </div>
      <div className="absolute top-[70%] left-[40%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute top-[70%] left-[60%]">
        <Button
          title="People Talks"
          type="audio"
          state={statePeople}
          volume={people}
          action={handleChangePeople}
          changeVolumeSound={changeVolumePeopleButton}
        />
      </div>
      <div className="absolute top-[35%] left-[10%]">
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

export default React.memo(InSide);
