---
name: slices
description: "Skill for the Slices area of lofi-web. 39 symbols across 14 files."
---

# Slices

39 symbols | 14 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how handleChangeBird, handleChangeBird, handleChangeVolumeAudio work
- Modifying slices-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/store/slices/sound.slice.ts` | openButtonPeople, closeButtonPeople, openButtonBird, closeButtonBird, changeVolumeAudio (+9) |
| `src/components/LateralMenu/MixerPanel/index.tsx` | handleChangeVolumeAudio, handleChangeVolumeForestNight, handleChangeVolumePlane, handleChangeVolumeTrain, handleChangeVolumeThunder (+1) |
| `src/components/Controller/InTheWoods/OutSide/index.tsx` | handleChangeBird, changeVolumeForestNightButton, handleChangeForestNight |
| `src/components/Controller/Plane/index.tsx` | changeVolumePlaneButton, handleChangePlane |
| `src/store/slices/pomodoro.slice.ts` | changeWorkMinutes, changeBreakMinutes |
| `src/components/LateralMenu/PomodoroTimer/Setting/index.tsx` | handleChangeWorkMinutes, handleChangeBreakMinutes |
| `src/store/slices/hide.slice.ts` | changeHide, changeTime |
| `src/components/LateralMenu/GeneralSetting/index.tsx` | handleChange, handleChangeTime |
| `src/components/Controller/LofiCafe/InSide/index.tsx` | handleChangePeople |
| `src/components/Controller/BookCafe/InSide/index.tsx` | handleChangePeople |

## Entry Points

Start here when exploring this area:

- **`handleChangeBird`** (Function) — `src/components/Controller/LakeHouse/OutSide/index.tsx:68`
- **`handleChangeBird`** (Function) — `src/components/Controller/InTheWoods/OutSide/index.tsx:54`
- **`handleChangeVolumeAudio`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:55`
- **`handleChangeVolumeForestNight`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:99`
- **`changeVolumeForestNightButton`** (Function) — `src/components/Controller/InTheWoods/OutSide/index.tsx:73`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `handleChangeBird` | Function | `src/components/Controller/LakeHouse/OutSide/index.tsx` | 68 |
| `handleChangeBird` | Function | `src/components/Controller/InTheWoods/OutSide/index.tsx` | 54 |
| `handleChangeVolumeAudio` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 55 |
| `handleChangeVolumeForestNight` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 99 |
| `changeVolumeForestNightButton` | Function | `src/components/Controller/InTheWoods/OutSide/index.tsx` | 73 |
| `handleChangeVolumePlane` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 113 |
| `changeVolumePlaneButton` | Function | `src/components/Controller/Plane/index.tsx` | 42 |
| `handleChangeForestNight` | Function | `src/components/Controller/InTheWoods/OutSide/index.tsx` | 66 |
| `handleChangePlane` | Function | `src/components/Controller/Plane/index.tsx` | 35 |
| `handleChangeVolumeTrain` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 87 |
| `handleChangeVolumeThunder` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 92 |
| `handleChangeVolumeCampfire` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 106 |
| `handleChangeWorkMinutes` | Function | `src/components/LateralMenu/PomodoroTimer/Setting/index.tsx` | 17 |
| `handleChangeBreakMinutes` | Function | `src/components/LateralMenu/PomodoroTimer/Setting/index.tsx` | 20 |
| `openButtonPeople` | Function | `src/store/slices/sound.slice.ts` | 95 |
| `closeButtonPeople` | Function | `src/store/slices/sound.slice.ts` | 99 |
| `handleChangePeople` | Function | `src/components/Controller/LofiCafe/InSide/index.tsx` | 72 |
| `handleChangePeople` | Function | `src/components/Controller/BookCafe/InSide/index.tsx` | 71 |
| `openButtonBird` | Function | `src/store/slices/sound.slice.ts` | 119 |
| `closeButtonBird` | Function | `src/store/slices/sound.slice.ts` | 123 |

## How to Explore

1. `gitnexus_context({name: "handleChangeBird"})` — see callers and callees
2. `gitnexus_query({query: "slices"})` — find related execution flows
3. Read key files listed above for implementation details
