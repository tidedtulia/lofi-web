import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import LofiCafe from "./LofiCafe";
import BookCafe from "./BookCafe";
import BedRoom from "./BedRoom";
import Plane from "./Plane";
import LakeHouse from "./LakeHouse";
import InTheWoods from "./InTheWoods";
import Seoul from "./Seoul";
import AmIDreaming from "./AmIDreaming";
import CozyStudio from "./CozyStudio";
import { SCENE } from "@/utils/enums";

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
