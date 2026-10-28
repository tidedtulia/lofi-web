import * as React from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { SCENE } from "@/utils/enums";

import AmIDreaming from "./AmIDreaming";
import BedRoom from "./BedRoom";
import BookCafe from "./BookCafe";
import CozyStudio from "./CozyStudio";
import InTheWoods from "./InTheWoods";
import LakeHouse from "./LakeHouse";
import LofiCafe from "./LofiCafe";
import Plane from "./Plane";
import Seoul from "./Seoul";

export interface IVideoProps {}
function Video(props: IVideoProps) {
  const { scene, place, time, weather } = useSelector(
    (state: RootState) => state.case
  );

  console.log({ scene, place, time, weather });

  const renderVideo = (): JSX.Element => {
    switch (scene) {
      case SCENE.LOFI_CAFE:
        return <LofiCafe />;

      case SCENE.BOOK_CAFE:
        return <BookCafe />;

      case SCENE.BEDROOM:
        return <BedRoom />;

      case SCENE.PLANE:
        return <Plane />;

      case SCENE.LAKE_HOUSE:
        return <LakeHouse />;

      case SCENE.IN_THE_WOODS:
        return <InTheWoods />;

      case SCENE.SEOUL:
        return <Seoul />;

      case SCENE.AM_I_DREAMING:
        return <AmIDreaming />;

      case SCENE.COZY_STUDIO:
        return <CozyStudio />;

      default:
        return <LofiCafe />;
    }
  };

  return <>{renderVideo()}</>;
}

export default React.memo(Video);
