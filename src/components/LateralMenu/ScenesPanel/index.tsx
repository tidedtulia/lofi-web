import * as React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeScene } from "@/store/slices/case.slice";
import { SCENE } from "@/utils/enums";
import { CldImage } from "next-cloudinary";
import { SCENE_FILE } from "@/utils/files";

export interface IScenesPanelProps {}

function ScenesPanel(props: IScenesPanelProps) {
  const dispatch = useDispatch();
  const [stateScenes, setStateScenes] = React.useState<boolean>(false);

  const { scene } = useSelector((state: RootState) => state.case);
  const { isHide } = useSelector((state: RootState) => state.hide);

  const handleChangeType = (t: string) => {
    dispatch(changeScene(t));
    // dispatch(closeButtonRain());
  };

  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let handler = (e: any) => {
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(e.target)
      ) {
        setStateScenes(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={elementRef}>
      <button
        title="Scenes"
        aria-label="Scenes"
        className="w-fit h-full flex flex-col justify-center items-center"
        onClick={() => setStateScenes(!stateScenes)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={style.icon}
        >
          <path
            className={`${stateScenes ? style.isOpen : style.isClose}`}
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div className={`${style.container} ${!stateScenes ? style.hiden : ""}`}>
        {scene != SCENE.LOFI_CAFE && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.LOFI_CAFE)}
          >
            <p className={style.title}>Lofi Cafe</p>

            {/* <img className={style.img} src={scene.loficafe} alt="Lofi cafe" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.LOFI_CAFE}
              alt="Lofi cafe"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}
        {scene != SCENE.BOOK_CAFE && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.BOOK_CAFE)}
          >
            <p className={style.title}>Book Cafe</p>
            <CldImage
              className={style.img}
              src={SCENE_FILE.BOOK_CAFE}
              alt="Book cafe"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}
        {scene != SCENE.BEDROOM && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.BEDROOM)}
          >
            <p className={style.title}>Bedroom</p>
            {/* <img className={style.img} src={scene.bedroom} alt="Bedroom" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.BEDROOM}
              alt="Bedroom"
              width="0"
              height="0"
              sizes="100vh"
            />
          </div>
        )}
        {scene != SCENE.PLANE && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.PLANE)}
          >
            <p className={style.title}>Plane</p>
            {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.PLANE}
              alt="Plane"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}

        {scene != SCENE.LAKE_HOUSE && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.LAKE_HOUSE)}
          >
            <p className={style.title}>Lake House</p>
            {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.LAKE_HOUSE}
              alt="Plane"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}
        {scene != SCENE.IN_THE_WOODS && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.IN_THE_WOODS)}
          >
            <p className={style.title}>In The Woods</p>
            {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.IN_THE_WOODS}
              alt="Plane"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}
        {scene != SCENE.SEOUL && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.SEOUL)}
          >
            <p className={style.title}>Seoul</p>
            {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.SEOUL}
              alt="Plane"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}
        {scene != SCENE.AM_I_DREAMING && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.AM_I_DREAMING)}
          >
            <p className={style.title}>Am I Dreaming???</p>
            {/* <img className={style.img} src={scene.plane} alt="Plane" /> */}
            <CldImage
              className={style.img}
              src={SCENE_FILE.AM_I_DREAMING}
              alt="Plane"
              width="0"
              height="0"
              sizes="100vh"
            />
          </div>
        )}
        {scene != SCENE.COZY_STUDIO && (
          <div
            className={style.item}
            onClick={() => handleChangeType(SCENE.COZY_STUDIO)}
          >
            <p className={style.title}>Cozy Studio</p>
            <CldImage
              className={style.img}
              src={SCENE_FILE.COZY_STUDIO}
              alt="Plane"
              width="0"
              height="0"
              sizes="100vw"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(ScenesPanel);
