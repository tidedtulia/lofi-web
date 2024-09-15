import * as React from "react";
import Music from "./Music";
import Clock from "./Clock";
import Toggle from "./Toggle";
import MixerPanel from "./MixerPanel";
import ScenesPanel from "./ScenesPanel";
import FullScreen from "./FullScreen";
import GeneralSetting from "./GeneralSetting";
import TodoList from "./TodoList";
import PomodoroTimerPanel from "./PomodoroTimer";

export interface ILateralMenuProps {}

function LateralMenu(props: ILateralMenuProps) {
  return (
    <div className="w-[98vw] mx-auto mb-[1vh] flex flex-row justify-center items-center relative bg-transparent backdrop-blur-lg border border-white rounded-xl">
      <div className="absolute left-0 flex flex-row justify-between items-center gap-2">
        <Clock />
        <Toggle />
      </div>

      <div className="mx-auto flex flex-row justify-center items-center gap-2">
        <Music />
        <MixerPanel />
        <ScenesPanel />
        <GeneralSetting />
        <PomodoroTimerPanel />
        <TodoList />
      </div>
    </div>
  );
}

export default React.memo(LateralMenu);
