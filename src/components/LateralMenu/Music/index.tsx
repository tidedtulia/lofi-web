import { RootState } from "@/store";
import { changeNumMusic } from "@/store/slices/music.slice";
import { changeVolumeAudio } from "@/store/slices/sound.slice";
import { PLAY, PLAY_PAUSE, TYPE_1, TYPE_2, TYPE_3 } from "@/utils/files";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
export interface IMusicProps {}

function Music() {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [isPlaying, setIsPlaying] = React.useState({
    isPlay: false,
    icon: PLAY,
  });

  const { type, num, src } = useSelector((state: RootState) => state.music);
  const { audio } = useSelector((state: RootState) => state.sound);
  const volume = useSelector((state: RootState) => state.sound.audio);

  const audioRef = React.useRef<HTMLAudioElement>(null);
  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.preload = "none";
      audioRef.current.volume = audio;
    }
  }, [audio]);

  React.useEffect(() => {
    let handler = (e: any) => {
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handlePlay = () => {
    const audio = audioRef.current;
    if (isPlaying.isPlay === true) {
      setIsPlaying({ isPlay: false, icon: PLAY });
      audio?.pause();
    } else {
      setIsPlaying({ isPlay: true, icon: PLAY_PAUSE });
      audio?.play();
    }
  };

  const handleNext = () => {
    if (type == 1) {
      if (num == TYPE_1) {
        dispatch(changeNumMusic(0));
      } else {
        dispatch(changeNumMusic(num + 1));
      }
    } else if (type == 2) {
      if (num == TYPE_2) {
        dispatch(changeNumMusic(0));
      } else {
        dispatch(changeNumMusic(num + 1));
      }
    } else if (type == 3) {
      if (num == TYPE_3) {
        dispatch(changeNumMusic(0));
      } else {
        dispatch(changeNumMusic(num + 1));
      }
    }
    setIsPlaying({ isPlay: true, icon: PLAY_PAUSE });
  };

  const handlePrev = () => {
    if (type == 1) {
      if (num == 0) {
        dispatch(changeNumMusic(TYPE_1));
      } else {
        dispatch(changeNumMusic(num - 1));
      }
    } else if (type == 2) {
      if (num == 0) {
        dispatch(changeNumMusic(TYPE_2));
      } else {
        dispatch(changeNumMusic(num - 1));
      }
    } else if (type == 3) {
      if (num == 0) {
        dispatch(changeNumMusic(TYPE_3));
      } else {
        dispatch(changeNumMusic(num - 1));
      }
    }
    setIsPlaying({ isPlay: true, icon: PLAY_PAUSE });
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeAudio(value));
  };
  const handleOpenVolume = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.container} ref={elementRef}>
      <div className={style.control}>
        <button
          className={style.button}
          id="button_back"
          onClick={handlePrev}
          title="Back"
          aria-label="Back"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className={style.button}
          id="button_play"
          onClick={handlePlay}
          title="Play/Pause"
          aria-label="Play/Pause"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isPlaying.icon}
            />
          </svg>
        </button>
        <button
          className={style.button}
          id="button_forward"
          onClick={handleNext}
          title="Forward"
          aria-label="Forward"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          className={style.button}
          id="button_volumn"
          onClick={handleOpenVolume}
          title="Volumn"
          aria-label="Volumn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={style.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
            />
          </svg>
        </button>
      </div>
      <div className={`${style.volume} ${!isOpen ? style.closeVolumn : ""}`}>
        <input
          className={style.input}
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={changeVolume}
        />
      </div>
      <audio autoPlay ref={audioRef} src={src} onEnded={handleNext} />
    </div>
  );
}

export default React.memo(Music);
