import * as React from "react";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import SoundItem from "./SoundItem";
import { SOUND_FILE } from "@/utils/files";

export interface ISoundProps {}

export default function Sound(props: ISoundProps) {
  const {
    rain,
    traffic,
    keyboard,
    people,
    train,
    thunder,
    forest_night,
    campfire,
    plane,
    bird,
  } = useSelector((state: RootState) => state.sound);
  return (
    <div>
      {rain != 0 && <SoundItem src={SOUND_FILE.RAIN} volume={rain} />}
      {traffic != 0 && <SoundItem src={SOUND_FILE.TRAFFIC} volume={traffic} />}
      {keyboard != 0 && (
        <SoundItem src={SOUND_FILE.KEYBOARD} volume={keyboard} />
      )}
      {people != 0 && <SoundItem src={SOUND_FILE.PEOPLE} volume={people} />}

      {train != 0 && <SoundItem src={SOUND_FILE.TRAIN} volume={train} />}
      {thunder != 0 && <SoundItem src={SOUND_FILE.THUNDER} volume={thunder} />}
      {forest_night != 0 && (
        <SoundItem src={SOUND_FILE.FOREST_NIGHT} volume={forest_night} />
      )}
      {campfire != 0 && (
        <SoundItem src={SOUND_FILE.CAMPFIRE} volume={campfire} />
      )}
      {plane != 0 && <SoundItem src={SOUND_FILE.PLANE} volume={plane} />}
      {bird != 0 && <SoundItem src={SOUND_FILE.BIRD} volume={bird} />}
    </div>
  );
}
