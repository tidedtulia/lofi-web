import * as React from "react";

import Clock from "./Clock";
import GeneralSetting from "./GeneralSetting";
import MixerPanel from "./MixerPanel";
import Music from "./Music";
import PomodoroTimerPanel from "./PomodoroTimer";
import ScenesPanel from "./ScenesPanel";
import TodoList from "./TodoList";
import Toggle from "./Toggle";

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
