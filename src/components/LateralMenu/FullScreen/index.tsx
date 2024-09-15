import * as React from "react";
import style from "./style.module.css";
import { EXIT_FULL, FULL_ICON } from "@/utils/files";

export interface IFullScreenProps {}

function FullScreen(props: IFullScreenProps) {
  const [icon, setIcon] = React.useState<string>(FULL_ICON);
  const handleClick = () => {
    const element = document.getElementById("screen");
    if (icon === FULL_ICON) {
      setIcon(EXIT_FULL);
      if (element?.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      setIcon(FULL_ICON);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <button
      className={style.button}
      id="button_screen"
      onClick={handleClick}
      title="Fullscreen"
      aria-label="Fullscreen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style.icon}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg>
    </button>
  );
}
export default React.memo(FullScreen);
