---
name: inside
description: "Skill for the InSide area of lofi-web. 30 symbols across 13 files."
---

# InSide

30 symbols | 13 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how handleChangeVolumeKeyboard, changeVolumeKeyboardButton, changeVolumeKeyboardButton work
- Modifying inside-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/store/slices/sound.slice.ts` | changeVolumeKeyboard, openButtonKeyboard, closeButtonKeyboard, changeVolumePeople |
| `src/components/Controller/LofiCafe/InSide/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard, changeVolumePeopleButton |
| `src/components/Controller/BookCafe/InSide/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard, changeVolumePeopleButton |
| `src/components/LateralMenu/MixerPanel/index.tsx` | handleChangeVolumeKeyboard, handleChangeVolumePeople |
| `src/components/Controller/Plane/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard |
| `src/components/Controller/CozyStudio/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard |
| `src/components/Controller/BedRoom/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard |
| `src/components/Controller/Seoul/InSide/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard |
| `src/components/Controller/LakeHouse/OutSide/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard |
| `src/components/Controller/LakeHouse/InSide/index.tsx` | changeVolumeKeyboardButton, handleChangeKeyboard |

## Entry Points

Start here when exploring this area:

- **`handleChangeVolumeKeyboard`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:80`
- **`changeVolumeKeyboardButton`** (Function) — `src/components/Controller/Plane/index.tsx:28`
- **`changeVolumeKeyboardButton`** (Function) — `src/components/Controller/CozyStudio/index.tsx:32`
- **`changeVolumeKeyboardButton`** (Function) — `src/components/Controller/BedRoom/index.tsx:53`
- **`changeVolumeKeyboardButton`** (Function) — `src/components/Controller/Seoul/InSide/index.tsx:60`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `handleChangeVolumeKeyboard` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 80 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/Plane/index.tsx` | 28 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/CozyStudio/index.tsx` | 32 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/BedRoom/index.tsx` | 53 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/Seoul/InSide/index.tsx` | 60 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/LakeHouse/OutSide/index.tsx` | 61 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/LakeHouse/InSide/index.tsx` | 62 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/InTheWoods/InSide/index.tsx` | 62 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/AmIDreaming/UnderWater/index.tsx` | 33 |
| `changeVolumeKeyboardButton` | Function | `src/components/Controller/AmIDreaming/Space/index.tsx` | 33 |
| `handleChangeKeyboard` | Function | `src/components/Controller/Plane/index.tsx` | 21 |
| `handleChangeKeyboard` | Function | `src/components/Controller/CozyStudio/index.tsx` | 25 |
| `handleChangeKeyboard` | Function | `src/components/Controller/BedRoom/index.tsx` | 46 |
| `handleChangeKeyboard` | Function | `src/components/Controller/Seoul/InSide/index.tsx` | 53 |
| `handleChangeKeyboard` | Function | `src/components/Controller/LakeHouse/OutSide/index.tsx` | 54 |
| `handleChangeKeyboard` | Function | `src/components/Controller/LakeHouse/InSide/index.tsx` | 55 |
| `handleChangeKeyboard` | Function | `src/components/Controller/InTheWoods/InSide/index.tsx` | 55 |
| `handleChangeKeyboard` | Function | `src/components/Controller/AmIDreaming/UnderWater/index.tsx` | 26 |
| `handleChangeKeyboard` | Function | `src/components/Controller/AmIDreaming/Space/index.tsx` | 26 |
| `handleChangeVolumePeople` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 75 |

## How to Explore

1. `gitnexus_context({name: "handleChangeVolumeKeyboard"})` — see callers and callees
2. `gitnexus_query({query: "inside"})` — find related execution flows
3. Read key files listed above for implementation details
