import * as React from "react";
import style from "./style.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Setting from "./Setting";
import Timer from "./Timer";
import { Position } from "@/utils/interface";
export interface IPomodoroTimerPanelProps {}

export default function PomodoroTimerPanel(props: IPomodoroTimerPanelProps) {
  const { setting } = useSelector((state: RootState) => state.pomodoro);
  const [stateTimer, setStateTimer] = React.useState<boolean>(false);
  //change postition

  React.useEffect(() => {
    const checkSize = (): boolean => {
      let size: number = 0;
      if (typeof window !== "undefined") size = window.innerWidth;

      return size >= 1024 ? true : false;
    };
    setPosition({
      x: checkSize() ? 50 : 0,
      y: checkSize() ? -250 : -100,
    });
  }, []);
  const [position, setPosition] = React.useState<Position>({
    x: 0,
    y: 0,
  });
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
    //e.stopPropagation();
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
    // e.stopPropagation();
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
    <div>
      <button
        title="Pomodoro timer"
        aria-label="Pomodoro timer"
        className="w-fit h-full flex flex-col justify-end items-center"
        onClick={() => setStateTimer(!stateTimer)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={style.icon}
        >
          <path
            className={`${stateTimer ? style.isOpen : style.isClose}`}
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${style.container} ${!stateTimer ? style.hiden : ""}`}
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
        <div className={style.title}>Pomodoro timer</div>
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
            onClick={() => setStateTimer(false)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        {setting ? <Setting /> : <Timer />}
      </div>
    </div>
  );
}
