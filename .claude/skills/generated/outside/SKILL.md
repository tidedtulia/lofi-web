---
name: outside
description: "Skill for the OutSide area of lofi-web. 58 symbols across 17 files."
---

# OutSide

58 symbols | 17 files | Cohesion: 90%

## When to Use

- Working with code in `src/`
- Understanding how handleChangeVolumeRain, changeVolumeRainButton, changeVolumeRainButton work
- Modifying outside-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/store/slices/sound.slice.ts` | changeVolumeRain, openButtonRain, closeButtonRain, changeVolumeTraffic, openButtonTraffic (+2) |
| `src/components/Controller/Seoul/OutSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, handleInside, changeVolumeTrafficButton, handleChangeTraffic |
| `src/components/Controller/LofiCafe/OutSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, handleInside, changeVolumeTrafficButton, handleChangeTraffic |
| `src/components/Controller/BookCafe/OutSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, handleInside, changeVolumeTrafficButton, handleChangeTraffic |
| `src/components/Controller/CozyStudio/index.tsx` | changeVolumeRainButton, handleChangeWeather, changeVolumeTrafficButton, handleChangeTraffic |
| `src/components/Controller/LakeHouse/OutSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, handleInside, changeVolumeBirdButton |
| `src/components/Controller/InTheWoods/OutSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, handleInside, changeVolumeBirdButton |
| `src/components/LateralMenu/MixerPanel/index.tsx` | handleChangeVolumeRain, handleChangeVolumeTraffic, handleChangeVolumeBird |
| `src/components/Controller/Seoul/InSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, hadleOutside |
| `src/components/Controller/LofiCafe/InSide/index.tsx` | changeVolumeRainButton, handleChangeWeather, hadleOutside |

## Entry Points

Start here when exploring this area:

- **`handleChangeVolumeRain`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:60`
- **`changeVolumeRainButton`** (Function) — `src/components/Controller/CozyStudio/index.tsx:55`
- **`changeVolumeRainButton`** (Function) — `src/components/Controller/BedRoom/index.tsx:38`
- **`changeVolumeRainButton`** (Function) — `src/components/Controller/Seoul/OutSide/index.tsx:36`
- **`changeVolumeRainButton`** (Function) — `src/components/Controller/Seoul/InSide/index.tsx:44`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `handleChangeVolumeRain` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 60 |
| `changeVolumeRainButton` | Function | `src/components/Controller/CozyStudio/index.tsx` | 55 |
| `changeVolumeRainButton` | Function | `src/components/Controller/BedRoom/index.tsx` | 38 |
| `changeVolumeRainButton` | Function | `src/components/Controller/Seoul/OutSide/index.tsx` | 36 |
| `changeVolumeRainButton` | Function | `src/components/Controller/Seoul/InSide/index.tsx` | 44 |
| `changeVolumeRainButton` | Function | `src/components/Controller/LakeHouse/OutSide/index.tsx` | 46 |
| `changeVolumeRainButton` | Function | `src/components/Controller/LakeHouse/InSide/index.tsx` | 46 |
| `changeVolumeRainButton` | Function | `src/components/Controller/InTheWoods/OutSide/index.tsx` | 46 |
| `changeVolumeRainButton` | Function | `src/components/Controller/InTheWoods/InSide/index.tsx` | 46 |
| `handleChangeWeather` | Function | `src/components/Controller/CozyStudio/index.tsx` | 60 |
| `handleChangeWeather` | Function | `src/components/Controller/BedRoom/index.tsx` | 28 |
| `handleChangeWeather` | Function | `src/components/Controller/Seoul/OutSide/index.tsx` | 27 |
| `handleChangeWeather` | Function | `src/components/Controller/Seoul/InSide/index.tsx` | 33 |
| `handleChangeWeather` | Function | `src/components/Controller/LakeHouse/OutSide/index.tsx` | 37 |
| `handleChangeWeather` | Function | `src/components/Controller/LakeHouse/InSide/index.tsx` | 36 |
| `handleChangeWeather` | Function | `src/components/Controller/InTheWoods/OutSide/index.tsx` | 37 |
| `handleChangeWeather` | Function | `src/components/Controller/InTheWoods/InSide/index.tsx` | 36 |
| `handleInside` | Function | `src/components/Controller/Seoul/OutSide/index.tsx` | 24 |
| `hadleOutside` | Function | `src/components/Controller/Seoul/InSide/index.tsx` | 28 |
| `handleInside` | Function | `src/components/Controller/LakeHouse/OutSide/index.tsx` | 34 |

## How to Explore

1. `gitnexus_context({name: "handleChangeVolumeRain"})` — see callers and callees
2. `gitnexus_query({query: "outside"})` — find related execution flows
3. Read key files listed above for implementation details
