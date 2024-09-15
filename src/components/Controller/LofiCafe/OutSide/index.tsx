import * as React from "react";
import style from "./style.module.css";
import Button from "@/components/Button";
import {
  changeVolumeRain,
  changeVolumeTraffic,
  openButtonRain,
  closeButtonRain,
  openButtonTraffic,
  closeButtonTraffic,
} from "@/store/slices/sound.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeLocation, changeWeather } from "@/store/slices/case.slice";
import { PLACE, WEATHER } from "@/utils/enums";

export interface IOutSideProps {}

function OutSide(props: IOutSideProps) {
  const weather = useSelector((state: RootState) => state.case.weather);
  const { rain, traffic } = useSelector((state: RootState) => state.sound);

  const { stateRain } = useSelector((state: RootState) => state.sound);

  const { stateTraffic } = useSelector((state: RootState) => state.sound);
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

  const handleChangeTraffic = () => {
    if (stateTraffic == true) {
      dispatch(closeButtonTraffic());
    } else {
      dispatch(openButtonTraffic());
    }
  };
  const changeVolumeTrafficButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeTraffic(v));
  };

  return (
    <div className={style.container}>
      <div className="absolute top-[40vh] left-[10vw]">
        <Button
          title="City Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute top-[50vh] left-[40vw]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute top-[40vh] left-[70vw]">
        <Button
          title="City Traffic"
          type="audio"
          state={stateTraffic}
          volume={traffic}
          action={handleChangeTraffic}
          changeVolumeSound={changeVolumeTrafficButton}
        />
      </div>
    </div>
  );
}

export default React.memo(OutSide);
