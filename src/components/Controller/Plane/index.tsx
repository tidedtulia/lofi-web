import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "@/components/Button";
import { RootState } from "@/store";
import {
  changeVolumeKeyboard,
  changeVolumePlane,
  closeButtonKeyboard,
  closeButtonPlane,
  openButtonKeyboard,
  openButtonPlane,
} from "@/store/slices/sound.slice";

export interface IControllerPlaneProps {}

export default function ControllerPlane(props: IControllerPlaneProps) {
  const { plane, statePlane, keyboard, stateKeyboard } = useSelector(
    (state: RootState) => state.sound
  );
  const dispatch = useDispatch();
  //ban phim
  const handleChangeKeyboard = () => {
    if (stateKeyboard == true) {
      dispatch(closeButtonKeyboard());
    } else {
      dispatch(openButtonKeyboard());
    }
  };
  const changeVolumeKeyboardButton = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumeKeyboard(v));
  };
  //may bay
  const handleChangePlane = () => {
    if (statePlane == true) {
      dispatch(closeButtonPlane());
    } else {
      dispatch(openButtonPlane());
    }
  };
  const changeVolumePlaneButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    dispatch(changeVolumePlane(v));
  };

  return (
    <div className="w-full h-full">
      <div className="absolute top-[50%] left-[15%]">
        <Button
          title="Keyboard"
          type="audio"
          state={stateKeyboard}
          volume={keyboard}
          action={handleChangeKeyboard}
          changeVolumeSound={changeVolumeKeyboardButton}
        />
      </div>
      <div className="absolute lg:top-[30%] lg:right-[22%] top-[40%] right-[15%]">
        <Button
          title="Plane"
          type="audio"
          state={statePlane}
          volume={plane}
          action={handleChangePlane}
          changeVolumeSound={changeVolumePlaneButton}
        />
      </div>
    </div>
  );
}
