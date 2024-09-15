import { RootState } from "@/store";
import * as React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { concateString } from "@/utils/utils";
import { PLACE, TIME, WEATHER } from "@/utils/enums";
import { VIDEO_FILE } from "@/utils/files";

export interface ISeoulProps {}

export default function Seoul(props: ISeoulProps) {
  const { place, time, weather } = useSelector(
    (state: RootState) => state.case
  );
  const activeVideo = concateString([place, time, weather]);

  const renderVideos = () => {
    const result: string[] = [];
    for (let place in PLACE) {
      for (let time in TIME) {
        for (let weather in WEATHER) {
          result.push(concateString([place, time, weather]));
        }
      }
    }

    return result.map((item, index) => (
      <div
        key={index}
        className={`${activeVideo === item ? style.bg_in : style.bg_out}`}
      >
        <video
          src={VIDEO_FILE.SEOUL[item]}
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
