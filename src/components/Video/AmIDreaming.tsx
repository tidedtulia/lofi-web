import { RootState } from "@/store";
import * as React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import { PLACE } from "@/utils/enums";
import { VIDEO_FILE } from "@/utils/files";

export interface IAmIDreamingProps {}

export default function AmIDreaming(props: IAmIDreamingProps) {
  const { place } = useSelector((state: RootState) => state.case);
  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${place == PLACE.OUT_SIDE ? style.bg_in : style.bg_out}`}
      >
        <video
          src={VIDEO_FILE.AM_I_DREAMING.SPACE}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className={`${place == PLACE.IN_SIDE ? style.bg_in : style.bg_out}`}>
        <video
          src={VIDEO_FILE.AM_I_DREAMING.UNDER_WATER}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
    </div>
  );
}
