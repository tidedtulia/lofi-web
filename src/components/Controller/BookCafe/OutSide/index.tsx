import * as React from "react";
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
    <div className="w-full h-full">
      <div className="absolute top-[40%] left-[20%]">
        <Button
          title="City Rain"
          type="audio"
          state={stateRain}
          volume={rain}
          action={handleChangeWeather}
          changeVolumeSound={changeVolumeRainButton}
        />
      </div>
      <div className="absolute lg:top-[40%] lg:left-[55%] top-[35%] left-[50%]">
        <Button title="Inside" type="position" action={handleInside} />
      </div>
      <div className="absolute top-[65%] right-[15%]">
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
