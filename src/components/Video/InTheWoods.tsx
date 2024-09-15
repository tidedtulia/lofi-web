import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "./style.module.css";

import { concateString } from "@/utils/utils";
import { PLACE, WEATHER } from "@/utils/enums";
import { VIDEO_FILE } from "@/utils/files";

export interface IInTheWoodsProps {}

export default function InTheWoods(props: IInTheWoodsProps) {
  const { place, weather } = useSelector((state: RootState) => state.case);
  const activeVideo = concateString([place, weather]);
  const renderVideos = () => {
    let result: string[] = [];

    for (let place in PLACE) {
      for (let weather in WEATHER) {
        result.push(concateString([place, weather]));
      }
    }

    return result.map((item, index) => (
      <div
        key={index}
        className={`${activeVideo === item ? style.bg_in : style.bg_out}`}
      >
        <video
          src={VIDEO_FILE.IN_THE_WOODS[item]}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    ));
  };

  return <div className="w-full h-[100vh]">{renderVideos()}</div>;
}
