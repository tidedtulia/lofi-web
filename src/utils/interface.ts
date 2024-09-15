export interface Music {
  index: number;
  name: string;
  src: string;
}
export interface Case {
  scene: string;
  place: string;
  time: string;
  weather: string;
}
export interface PomodoroSetting {
  workMinutes: number;
  breakMinutes: number;
  setting: boolean;
}
export interface Position {
  x: number;
  y: number;
}

export interface Todo {
  id: number;
  text: string;
}
