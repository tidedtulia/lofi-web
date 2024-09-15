import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "./style.module.css";
import { concateString } from "@/utils/utils";
import { PLACE, TIME, WEATHER } from "@/utils/enums";
import { VIDEO_FILE } from "@/utils/files";

export interface ILakeHouseProps {}

export default function LakeHouse(props: ILakeHouseProps) {
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
          src={VIDEO_FILE.LAKE_HOUSE[item]}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    ));
  };

  return <div className="w-full h-screen">{renderVideos()}</div>;
}
