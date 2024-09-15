import { RootState } from "@/store";
import * as React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";
import LateralMenu from "../LateralMenu";
import { PLACE, SCENE, TIME } from "@/utils/enums";
import { ControllLofiCafeInSide, ControllLofiCafeOutSide } from "./LofiCafe";
import {
  ControllerBookCafeInSide,
  ControllerBookCafeOutSide,
} from "./BookCafe";
import { AmIDreamingSpace, AmIDreamingUnderWater } from "./AmIDreaming/inde";
import ControllerBedRoom from "./BedRoom";
import ControllerIntheWoodsInSide from "./InTheWoods/InSide";
import { ControllerInTheWoodsOutSide } from "./InTheWoods";
import {
  ControllerLakeHouseInSide,
  ControllerLakeHouseOutSide,
} from "./LakeHouse";
import ControllerPlane from "./Plane";
import ControllerCozyStudio from "./CozyStudio";
import { ControllerSeoulInSide, ControllerSeoulOutSide } from "./Seoul";
import Sound from "../Sound";
import FullScreen from "../LateralMenu/FullScreen";

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
