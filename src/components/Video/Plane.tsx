import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import style from "./style.module.css";
import { VIDEO_FILE } from "@/utils/files";
import { TIME } from "@/utils/enums";

export interface IPlaneProps {}

export default function Plane(props: IPlaneProps) {
  const { time } = useSelector((state: RootState) => state.case);
  const activeVideo = time;

  return (
    <div className="w-full h-[100vh]">
      <div
        className={`${activeVideo === TIME.DAY ? style.bg_in : style.bg_out}`}
      >
        <video
          src={VIDEO_FILE.PLANE.DAY}
          className={style.video}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>

      <div
        className={`${activeVideo === TIME.NIGHT ? style.bg_in : style.bg_out}`}
      >
        <video
          src={VIDEO_FILE.PLANE.NIGHT}
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
