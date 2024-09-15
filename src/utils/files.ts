import { PLACE, SCENE, SOUND, TIME, WEATHER } from "./enums";
import { concateString } from "./utils";

//------------const -1
export const TYPE_1: number = Number.parseInt(process.env.NEXT_PUBLIC_TYPE_1!);
export const TYPE_2: number = Number.parseInt(process.env.NEXT_PUBLIC_TYPE_2!);
export const TYPE_3: number = Number.parseInt(process.env.NEXT_PUBLIC_TYPE_3!);
export const MAX: number = Math.max(TYPE_1, TYPE_2, TYPE_3) + 1;
export const MIN: number = Math.min(TYPE_1, TYPE_2, TYPE_3);

export const PLAY_PAUSE: string =
  "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z";
export const PLAY: string =
  "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z";

export const FULL_ICON: string =
  "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15";
export const EXIT_FULL: string =
  "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25";

//------------logo
export const logo_header: string =
  "https://res.cloudinary.com/dp7dspftn/image/upload/v1687671216/lofi/logo-header_oxnn92.jpg";

export const loading_logo: string =
  "https://res.cloudinary.com/dp7dspftn/image/upload/v1680602044/lofi/logo.0cbf9e63b4a021661126_rttu7d.gif";
export const rotate_logo: string =
  "https://res.cloudinary.com/dp7dspftn/image/upload/v1681146978/lofi/rotate_vdfskt.gif";

export const SCENE_FILE = {
  [SCENE.LOFI_CAFE]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1680943047/lofi/lofi-cafe/cafe-out.0d307fb8651788cfd35c_xmhhvz.png",
  [SCENE.BOOK_CAFE]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1680943011/lofi/book-cafe/book_cafe_preview_out.aeae5beef7737b9ae88e_pfaah7.png",
  [SCENE.BEDROOM]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1680943034/lofi/bed-room/bed-room-scene.png",
  [SCENE.PLANE]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1685539303/lofi/plane/plane.b4697a27c4ace88c60dd_ncdi4o.png",
  [SCENE.LAKE_HOUSE]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1688044139/lofi/lake-house/lakehouse.png",
  [SCENE.IN_THE_WOODS]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1688044288/lofi/in-the-woods/inthewoods.png",
  [SCENE.SEOUL]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1704521202/lofi/seoul/seoul-outside.176c7ba739a57d5ce1b8_s9ggks.png",
  [SCENE.AM_I_DREAMING]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1704551264/lofi/am_i_dreaming/space-pw.ac804a3b498e914527bd_qwxmdr.png",
  [SCENE.COZY_STUDIO]:
    "https://res.cloudinary.com/dp7dspftn/image/upload/v1707043076/lofi/cozy_studio/cozyStudio.de922c920cb86d55e204_rhnv37.png",
};

export const SOUND_FILE = {
  [SOUND.RAIN]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1685538027/lofi/sounds/window_rain_azb0tc.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/window_rain.mp3",
  [SOUND.TRAFFIC]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1680752449/lofi/sounds/city_traffic_v4hfjq.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/city_traffic.mp3",
  [SOUND.KEYBOARD]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1680752450/lofi/sounds/keyboard_ujvpge.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/keyboard.mp3",
  [SOUND.PEOPLE]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1680752456/lofi/sounds/people_talk_inside_rzfzoz.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/people_talk_inside.mp3",
  [SOUND.TRAIN]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1685538018/lofi/sounds/train_xto9cm.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/train.mp3",
  [SOUND.THUNDER]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1685538024/lofi/sounds/thunders_npf1uv.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/thunders.mp3",
  [SOUND.FOREST_NIGHT]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1685538012/lofi/sounds/forest_night_dveizy.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/forest_night.mp3",
  [SOUND.CAMPFIRE]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1685538013/lofi/sounds/campfire_xbujma.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/campfire.mp3",
  [SOUND.PLANE]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1685536880/lofi/sounds/airplane_mhbhhm.mp3" ||
    "https://lofico.nyc3.cdn.digitaloceanspaces.com/effects/airplane.mp3",
  [SOUND.BIRD]:
    "https://res.cloudinary.com/dp7dspftn/video/upload/v1688132402/lofi/sounds/birds_fmntjs.mp3",
};

//-------Video
export const VIDEO_FILE = {
  [SCENE.LOFI_CAFE]: {
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602885/lofi/lofi-cafe/outside_wawxxg.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602888/lofi/lofi-cafe/outside-rain_qa7nxa.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602885/lofi/lofi-cafe/outside-night_kfb4nn.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602889/lofi/lofi-cafe/outside-night-rain_tl4qkz.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602886/lofi/lofi-cafe/inside_b3a5ti.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602889/lofi/lofi-cafe/inside-rain_zkd07g.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602886/lofi/lofi-cafe/inside-night_x9ejvr.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680602889/lofi/lofi-cafe/inside-night-rain_jdfgw5.mp4",
  },
  [SCENE.BOOK_CAFE]: {
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940925/lofi/book-cafe/ExteriorDay_bhjrat.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940949/lofi/book-cafe/ExteriorRainyDay_frhrss.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940924/lofi/book-cafe/ExteriorNight_r07dai.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940949/lofi/book-cafe/ExteriorRainyNight_rpfyig.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940924/lofi/book-cafe/CafeDay_vfaqbe.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940928/lofi/book-cafe/CafeRainyDay_sint4p.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940924/lofi/book-cafe/CafeNight_vrepzb.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940926/lofi/book-cafe/CafeRainyNight_jefe5m.mp4",
  },
  [SCENE.BEDROOM]: {
    [concateString([TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940982/lofi/bed-room/Day-sunny_mafjyt.mp4",
    [concateString([TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940984/lofi/bed-room/Day-rainny_tbw2t7.mp4",
    [concateString([TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940981/lofi/bed-room/Night-clear_wxdzgx.mp4",
    [concateString([TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1680940983/lofi/bed-room/Night-rainny_p0kx9g.mp4",
  },
  [SCENE.PLANE]: {
    [TIME.DAY]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1685536253/lofi/plane/plane-day_mskkhn.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/plane/plane-day.mp4",
    [TIME.NIGHT]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1685536258/lofi/plane/plane-night_mljdzn.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/plane/plane-night.mp4",
  },
  [SCENE.LAKE_HOUSE]: {
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044143/lofi/lake-house/Outside_Day_zs4hus.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Outside_Day.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044145/lofi/lake-house/Outside_Day_Rain_rnvotq.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Outside_Day_Rain.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044142/lofi/lake-house/outside_night_irlvja.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/outside_night.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044138/lofi/lake-house/outside_night_rain_xhuiqi.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/outside_night_rain.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044136/lofi/lake-house/Inside_Day_cngao1.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Inside_Day.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044139/lofi/lake-house/Inside_Day_Rain_okneac.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Inside_Day_Rain.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044136/lofi/lake-house/Inside_Night_mstdkf.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Inside_Night.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044135/lofi/lake-house/Inside_Night_Rain_xuttbc.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/lake-house/Inside_Night_Rain.mp4",
  },
  [SCENE.IN_THE_WOODS]: {
    [concateString([PLACE.IN_SIDE, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044288/lofi/in-the-woods/inside_sun_kfm409.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/inthewoods/inside_sun.mp4",
    [concateString([PLACE.IN_SIDE, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044289/lofi/in-the-woods/inside_rain_oipl6r.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/inthewoods/inside_rain.mp4",
    [concateString([PLACE.OUT_SIDE, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044289/lofi/in-the-woods/outside_sun_xnrgj0.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/inthewoods/outside_sun.mp4",
    [concateString([PLACE.OUT_SIDE, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1688044289/lofi/in-the-woods/outside_rain_sumitk.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/inthewoods/outside_rain.mp4",
  },
  [SCENE.SEOUL]: {
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517443/lofi/seoul/outside-day_oqz64p.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/outside-day.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517445/lofi/seoul/outside-day-rain_ikzkzj.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/outside-day-rain.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517434/lofi/seoul/outside-night_chepef.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/outside-night.mp4",
    [concateString([PLACE.OUT_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517441/lofi/seoul/outside-night-rain_caqt4r.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/outside-night-rain.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517426/lofi/seoul/inside-day_kgdljb.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/inside-day.mp4",
    [concateString([PLACE.IN_SIDE, TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517436/lofi/seoul/inside-day-rain_kbuzf3.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/inside-day-rain.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517440/lofi/seoul/inside-night_knyazq.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/inside-night.mp4",
    [concateString([PLACE.IN_SIDE, TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517446/lofi/seoul/inside-night-rain_jnkycr.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/seoul/inside-night-rain.mp4",
  },
  [SCENE.AM_I_DREAMING]: {
    [PLACE.SPAPCE]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517472/lofi/am_i_dreaming/space_gkcaxd.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/am_i_dreaming/space.mp4",
    [PLACE.UNDER_WATER]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1704517473/lofi/am_i_dreaming/underwater_epsk8m.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/am_i_dreaming/underwater.mp4",
  },
  [SCENE.COZY_STUDIO]: {
    [concateString([TIME.DAY, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1707042232/lofi/cozy_studio/Studio_day_lqc39q.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/Cozy_Studio/Studio_day.mp4",
    [concateString([TIME.DAY, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1707042231/lofi/cozy_studio/Studio_day_rain_rhabdo.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/Cozy_Studio/Studio_day_rain.mp4",
    [concateString([TIME.NIGHT, WEATHER.STOP_RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1707042231/lofi/cozy_studio/Studio_night_fne6kp.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/Cozy_Studio/Studio_night.mp4",
    [concateString([TIME.NIGHT, WEATHER.RAIN])]:
      "https://res.cloudinary.com/dp7dspftn/video/upload/v1707042231/lofi/cozy_studio/Studio_night_rain_zxfqhc.mp4" ||
      "https://lofico.nyc3.cdn.digitaloceanspaces.com/scenes/Cozy_Studio/Studio_night_rain.mp4",
  },
};
