import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { PLACE, SCENE } from "@/utils/enums";

import LateralMenu from "../LateralMenu";
import FullScreen from "../LateralMenu/FullScreen";
import Sound from "../Sound";
import { AmIDreamingSpace, AmIDreamingUnderWater } from "./AmIDreaming/inde";
import ControllerBedRoom from "./BedRoom";
import {
  ControllerBookCafeInSide,
  ControllerBookCafeOutSide,
} from "./BookCafe";
import ControllerCozyStudio from "./CozyStudio";
import { ControllerInTheWoodsOutSide } from "./InTheWoods";
import ControllerIntheWoodsInSide from "./InTheWoods/InSide";
import {
  ControllerLakeHouseInSide,
  ControllerLakeHouseOutSide,
} from "./LakeHouse";
import { ControllLofiCafeInSide, ControllLofiCafeOutSide } from "./LofiCafe";
import ControllerPlane from "./Plane";
import { ControllerSeoulInSide, ControllerSeoulOutSide } from "./Seoul";
import style from "./style.module.css";

export interface IControllerProps {
  isMouseMoving: boolean;
}

function Controller(props: IControllerProps) {
  const { isMouseMoving } = props;
  const { scene, place } = useSelector((state: RootState) => state.case);
  const { isHide } = useSelector((state: RootState) => state.hide);

  const renderController = (): JSX.Element => {
    switch (scene) {
      case SCENE.AM_I_DREAMING: {
        return place == PLACE.OUT_SIDE ? (
          <AmIDreamingSpace />
        ) : (
          <AmIDreamingUnderWater />
        );
      }

      case SCENE.BEDROOM: {
        return <ControllerBedRoom />;
      }

      case SCENE.BOOK_CAFE: {
        return place == PLACE.OUT_SIDE ? (
          <ControllerBookCafeOutSide />
        ) : (
          <ControllerBookCafeInSide />
        );
      }

      case SCENE.COZY_STUDIO: {
        return <ControllerCozyStudio />;
      }

      case SCENE.IN_THE_WOODS: {
        return place == PLACE.IN_SIDE ? (
          <ControllerIntheWoodsInSide />
        ) : (
          <ControllerInTheWoodsOutSide />
        );
      }

      case SCENE.LAKE_HOUSE: {
        return place == PLACE.OUT_SIDE ? (
          <ControllerLakeHouseOutSide />
        ) : (
          <ControllerLakeHouseInSide />
        );
      }

      case SCENE.LOFI_CAFE: {
        return place == PLACE.OUT_SIDE ? (
          <ControllLofiCafeOutSide />
        ) : (
          <ControllLofiCafeInSide />
        );
      }

      case SCENE.PLANE: {
        return <ControllerPlane />;
      }

      case SCENE.SEOUL: {
        return place == PLACE.OUT_SIDE ? (
          <ControllerSeoulOutSide />
        ) : (
          <ControllerSeoulInSide />
        );
      }

      default:
        return <ControllLofiCafeOutSide />;
    }
  };

  return (
    <div
      className={`${style.container} ${
        isHide && !isMouseMoving ? style.container_off : ""
      }`}
    >
      <FullScreen />
      <div className={style.main}>{renderController()}</div>
      <LateralMenu />
      <Sound />
    </div>
  );
}

export default React.memo(Controller);
