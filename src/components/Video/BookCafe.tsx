import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "./style.module.css";
import { VIDEO_FILE } from "@/utils/files";
import { concateString } from "@/utils/utils";
import { PLACE, TIME, WEATHER } from "@/utils/enums";

export interface IAppProps {}

export default function App(props: IAppProps) {
  const { place, time, weather } = useSelector(
    (state: RootState) => state.case
  );

  const activeVideo = concateString([place, time, weather]);

  const renderVideos = () => {
    let result: string[] = [];
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
          src={VIDEO_FILE.BOOK_CAFE[item]}
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
