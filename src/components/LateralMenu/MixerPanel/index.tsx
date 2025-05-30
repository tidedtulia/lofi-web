import * as React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  changeVolumeAudio,
  changeVolumeBird,
  changeVolumeCampfire,
  changeVolumeForestNight,
  changeVolumeKeyboard,
  changeVolumePeople,
  changeVolumePlane,
  changeVolumeRain,
  changeVolumeThunder,
  changeVolumeTraffic,
  changeVolumeTrain,
} from "@/store/slices/sound.slice";
import { changeWeather } from "@/store/slices/case.slice";
import { Position } from "@/utils/interface";
import { WEATHER } from "@/utils/enums";
import { changeNumMusic, changeType } from "@/store/slices/music.slice";
export interface IMixerPanelProps {}

export default function MixerPanel(props: IMixerPanelProps) {
  const dispatch = useDispatch();

  const [stateMixer, setStateMixer] = React.useState<boolean>(false);

  const {
    audio,
    rain,
    traffic,
    people,
    keyboard,
    train,
    thunder,
    forest_night,
    campfire,
    plane,
    bird,
  } = useSelector((state: RootState) => state.sound);
  const { type, num, listMusic } = useSelector(
    (state: RootState) => state.music
  );

  const [open, setOpen] = React.useState<boolean>(false);

  const scrollRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (num) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [num, open]);

  const handleChangeVolumeAudio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeAudio(value));
  };

  const handleChangeVolumeRain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeRain(value));

    if (value > 0) dispatch(changeWeather(WEATHER.RAIN));
    else dispatch(changeWeather(WEATHER.STOP_RAIN));
  };

  const handleChangeVolumeTraffic = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeTraffic(value));
  };

  const handleChangeVolumePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumePeople(value));
  };

  const handleChangeVolumeKeyboard = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeKeyboard(value));
  };

  const handleChangeVolumeTrain = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeTrain(value));
  };

  const handleChangeVolumeThunder = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeThunder(value));
  };

  const handleChangeVolumeForestNight = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeForestNight(value));
  };

  const handleChangeVolumeCampfire = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeCampfire(value));
  };

  const handleChangeVolumePlane = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumePlane(value));
  };

  const handleChangeVolumeBird = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch(changeVolumeBird(value));
  };

  const handleChangeType = (t: number) => {
    if (t == type) return;
    else {
      dispatch(changeType(t));
    }
  };

  //change potition

  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    const checkSize = (): boolean => {
      let element = document.documentElement;
      let size = 0;
      if (element) {
        size = element.clientWidth;
      }

      return size >= 1024 ? true : false;
    };
    setPosition({ x: checkSize() ? 400 : 250, y: checkSize() ? -250 : -150 });
  }, []);

  const [dragging, setDragging] = React.useState<boolean>(false);
  const [offset, setOffset] = React.useState<Position>({ x: 0, y: 0 });

  const handleMouseDown = (e: any) => {
    e.stopPropagation();
    setDragging(true);

    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };
  const handleMouseUp = () => {
    setDragging(false);
  };
  const handleMouseMove = (e: any) => {
    e.stopPropagation();
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };
  const handleTouchStart = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    setDragging(true);
    const touch = e.touches[0];
    setOffset({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };
  const handleTouchEnd = () => {
    setDragging(false);
  };
  const handleTouchMove = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (dragging) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - offset.x,
        y: touch.clientY - offset.y,
      });
    }
  };

  return (
    <>
      <button
        title="Mixer"
        aria-label="Mixer"
        onClick={() => setStateMixer(!stateMixer)}
        className="w-fit h-fit"
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
            className={`${stateMixer ? style.isOpen : style.isClose}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
          />
        </svg>
      </button>

      <div
        className={`${style.container} ${stateMixer ? "" : style.hiden}`}
        style={{
          position: "absolute",
          bottom: -position.y,
          left: position.x,
          cursor: dragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <p
          className={style.close}
          onTouchStart={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
            onClick={() => setStateMixer(false)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <div className="flex flex-row justify-between items-center">
          <div
            className={style.controll}
            onTouchStart={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={style.mood_menu}>
              <div
                className={`${style.mood_menu_item} ${
                  type == 1 && style.mood_active
                }`}
                onClick={() => handleChangeType(1)}
              >
                <div className={style.mood_menu_bg_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={style.icon_type}
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className={style.mood_menu_item_title}>Lofi</p>
              </div>
              <div
                className={`${style.mood_menu_item} ${
                  type == 2 && style.mood_active
                }`}
                onClick={() => handleChangeType(2)}
              >
                <div className={style.mood_menu_bg_icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={style.icon_type}
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.432 4.103a.75.75 0 00-.364-1.455L4.128 6.632l-.2.033C2.498 6.904 1.5 8.158 1.5 9.575v9.175a3 3 0 003 3h15a3 3 0 003-3V9.574c0-1.416-.997-2.67-2.429-2.909a49.016 49.016 0 00-7.255-.658l7.616-1.904zm-9.585 8.56a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.06 0l-.006-.005a.75.75 0 010-1.061l.005-.005a.75.75 0 011.06 0l.006.005zM9.781 15.85a.75.75 0 001.061 0l.005-.005a.75.75 0 000-1.061l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zm-1.055-1.066a.75.75 0 010 1.06l-.005.006a.75.75 0 01-1.061 0l-.005-.005a.75.75 0 010-1.06l.005-.006a.75.75 0 011.06 0l.006.005zM7.66 13.73a.75.75 0 001.061 0l.005-.006a.75.75 0 000-1.06l-.005-.005a.75.75 0 00-1.06 0l-.006.005a.75.75 0 000 1.06l.005.006zM9.255 9.75a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V10.5a.75.75 0 01.75-.75h.008zm3.624 3.28a.75.75 0 00.275-1.025L13.15 12a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.024l.004.007a.75.75 0 001.024.274l.007-.003zm-1.38 5.126a.75.75 0 01-1.024-.274l-.004-.007a.75.75 0 01.275-1.024l.006-.004a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.282-6.776a.75.75 0 00-.274-1.025l-.007-.003a.75.75 0 00-1.024.274l-.004.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zm1.369 5.129a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025l.004-.006a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-.145-1.502a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zm-3.75 2.243a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75V18a.75.75 0 01.75-.75h.008zm-2.871-.47a.75.75 0 00.274-1.025l-.003-.006a.75.75 0 00-1.025-.275l-.006.004a.75.75 0 00-.275 1.025l.004.006a.75.75 0 001.024.274l.007-.003zm1.366-5.12a.75.75 0 01-1.025-.274l-.004-.006a.75.75 0 01.275-1.025l.006-.003a.75.75 0 011.025.274l.004.007a.75.75 0 01-.275 1.024l-.006.004zm.281 6.215a.75.75 0 00-.275-1.024l-.006-.004a.75.75 0 00-1.025.274l-.003.007a.75.75 0 00.274 1.024l.007.004a.75.75 0 001.024-.274l.004-.007zM6.655 12.76a.75.75 0 01-1.025.274l-.006-.003a.75.75 0 01-.275-1.025L5.353 12a.75.75 0 011.025-.275l.006.004a.75.75 0 01.275 1.024l-.004.007zm-1.15 2.248a.75.75 0 00.75-.75v-.007a.75.75 0 00-.75-.75h-.008a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008zM17.25 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1.5 6a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className={style.mood_menu_item_title}>Chill</p>
              </div>
              <div
                className={`${style.mood_menu_item} ${
                  type == 3 && style.mood_active
                }`}
                onClick={() => handleChangeType(3)}
              >
                <div className={style.mood_menu_bg_icon}>
                  <svg
                    fill="currentColor"
                    height="20px"
                    width="20px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className={style.icon_type}
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M472.653,250.911c-21.344-12.842-48.328-17.581-71.909-20.523c-20.896-2.607-36.656-20.454-36.656-41.516 c0-97.87-79.623-177.493-177.495-177.493h-10.239C78.485,11.378,0,91.001,0,188.871v311.751h512V318.578 C510.545,288.453,497.237,265.703,472.653,250.911z M32.996,188.871c0-38.116,14.961-74.068,42.126-101.234 c27.167-27.166,63.118-42.126,101.234-42.126h10.239c38.116,0,74.068,14.961,101.234,42.126s42.127,63.118,42.127,101.234 c0,38.244,28.616,70.655,66.565,75.388c49.095,6.125,78.491,17.203,81.15,54.319H32.996V188.871z M420.978,466.489H91.022V409.6 h22.756v39.822h34.133V409.6h28.444v39.822h34.133V409.6h28.444v39.822h34.133V409.6h28.444v39.822h34.133V409.6h28.444v39.822 h34.133V409.6h22.756V466.489z M477.867,466.489h-22.756v-91.022H56.889v91.022H34.133V352.711h443.733V466.489z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <p className={style.mood_menu_item_title}>Piano</p>
              </div>
            </div>
            {/* <div className={style.music_volume}>
            <p className={style.title}>Music volume</p>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              className={style.music_volume_range}
              value={audio}
              onChange={handleChangeVolumeAudio}
            />
          </div> */}
            <div className={style.sounds}>
              <p className={style.title}>Sound</p>
              <div className={style.sounds_list}>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_traffic"
                    className={style.sounds_item_title}
                  >
                    Traffic city
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_traffic"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={traffic}
                    onChange={handleChangeVolumeTraffic}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_city-rain"
                    className={style.sounds_item_title}
                  >
                    City rain
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_city-rain"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={rain}
                    onChange={handleChangeVolumeRain}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_people-talking"
                    className={style.sounds_item_title}
                  >
                    People talking
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_people-talking"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={people}
                    onChange={handleChangeVolumePeople}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_keyboard"
                    className={style.sounds_item_title}
                  >
                    Keyboard
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_keyboard"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={keyboard}
                    onChange={handleChangeVolumeKeyboard}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_train"
                    className={style.sounds_item_title}
                  >
                    Train
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_train"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={train}
                    onChange={handleChangeVolumeTrain}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_thunder"
                    className={style.sounds_item_title}
                  >
                    Thunder
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_thunder"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={thunder}
                    onChange={handleChangeVolumeThunder}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_forest-night"
                    className={style.sounds_item_title}
                  >
                    Forest Night
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_forest-night"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={forest_night}
                    onChange={handleChangeVolumeForestNight}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_campfire"
                    className={style.sounds_item_title}
                  >
                    Campfire
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_campfire"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={campfire}
                    onChange={handleChangeVolumeCampfire}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_plane"
                    className={style.sounds_item_title}
                  >
                    Plane
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_plane"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={plane}
                    onChange={handleChangeVolumePlane}
                  />
                </div>
                <div className={style.sounds_item}>
                  <label
                    htmlFor="sound-item_bird"
                    className={style.sounds_item_title}
                  >
                    Bird chirping
                  </label>
                  <input
                    className={style.sounds_item_volume}
                    id="sound-item_bird"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={bird}
                    onChange={handleChangeVolumeBird}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-6 lg:w-10 flex flex-row justify-center text-white hover:text-yellow-500">
            <div
              className="w-full h-10 flex justify-center items-center"
              onClick={() => setOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 lg:w-6 lg:h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={`${
                    open
                      ? "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                      : "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  }`}
                />
              </svg>
            </div>
          </div>
        </div>
        {open && (
          <div className="w-40 mx-2 lg:ml-3 lg:w-60 h-52 lg:h-72 flex flex-col">
            <div
              className={style.music_volume}
              onTouchStart={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <p className={style.title}>Music volume</p>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                className={style.music_volume_range}
                value={audio}
                onChange={handleChangeVolumeAudio}
              />
            </div>
            <div
              className={style.listMusics}
              onTouchStart={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <ul className={style.listData}>
                {listMusic.map((music, index) => (
                  <li
                    key={music.index}
                    ref={num == index ? scrollRef : null}
                    className={`flex items-center w-full cursor-pointer text-xs py-1 lg:py-1 ${
                      num === index ? "text-yellow-500" : "text-white"
                    }`}
                    onClick={() => {
                      dispatch(changeNumMusic(index));
                    }}
                  >
                    {num === index && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-3 h-3 text-yellow-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )}
                    {music.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
