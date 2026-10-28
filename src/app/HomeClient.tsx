"use client";
import { CldImage } from "next-cloudinary";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Controller from "@/components/Controller";
import Video from "@/components/Video";
import { RootState } from "@/store";
import { setListMusic, setSrc } from "@/store/slices/music.slice";
import { loading_logo, rotate_logo } from "@/utils/files";
import { Music } from "@/utils/interface";

export default function HomeClient() {
  const dispatch = useDispatch();

  const { type, num } = useSelector((state: RootState) => state.music);
  const { time } = useSelector((state: RootState) => state.hide);

  let timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isMouseMoving, setIsMouseMoving] = useState(false);

  const [state, setState] = useState<{
    isLoading: boolean;
    isLandscape: boolean;
  }>({ isLoading: true, isLandscape: true });

  const handleMouseMove = useCallback(() => {
    setIsMouseMoving(true);

    if (!!timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIsMouseMoving(false);
    }, time * 1000);
  }, [time]);

  useEffect(() => {
    const getListMusic = async () => {
      const res = await fetch(`/api/musics?type=${type}`);
      const data: Music[] = await res.json();

      if (data.length == 0) {
        console.error("fetch list music fail");
        getListMusic();
      } else {
        if (!!data) {
          dispatch(setListMusic(data));
          dispatch(setSrc(data[num].src));
        }
      }
    };

    getListMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState((prev) => ({ ...prev, isLoading: false }));
    }, 2000);

    const handleResize = () => {
      const { matches } = window.matchMedia("(orientation: landscape)");
      setState((prev) => ({ ...prev, isLandscape: matches }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (!!timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseMoving]);

  return (
    <>
      {!state.isLandscape && (
        <div
          className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-[#333]"
          id="landscape"
        >
          <CldImage
            className="w-[50vw]"
            src={rotate_logo}
            alt="Please rotate your device horizontally"
            width={0}
            height={0}
            sizes="100vw"
          />
          <h1 className="text-[#ddd]">Please rotate your device horizontally</h1>
        </div>
      )}
      {state.isLoading && (
        <div className="fixed inset-0 z-[1000] flex flex-col justify-center items-center bg-[#333]">
          <CldImage
            className="w-[50vw]"
            src={loading_logo}
            alt="Loading..."
            width="0"
            height="0"
            sizes="100vw"
          />
          <h1 className="text-[#ddd]">Loading.....</h1>
        </div>
      )}
      <main className="w-screen h-screen bg-black fixed" id="screen">
        <Controller isMouseMoving={isMouseMoving} />
        <Video />
      </main>
    </>
  );
}
