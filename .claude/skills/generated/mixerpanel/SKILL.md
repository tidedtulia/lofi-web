---
name: mixerpanel
description: "Skill for the MixerPanel area of lofi-web. 7 symbols across 3 files."
---

# MixerPanel

7 symbols | 3 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how MixerPanel, handleChangeType, checkSize work
- Modifying mixerpanel-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/components/LateralMenu/MixerPanel/index.tsx` | MixerPanel, handleChangeType, checkSize |
| `src/store/slices/music.slice.ts` | changeNumMusic, changeType |
| `src/components/LateralMenu/Music/index.tsx` | handleNext, handlePrev |

## Entry Points

Start here when exploring this area:

- **`MixerPanel`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:23`
- **`handleChangeType`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:123`
- **`checkSize`** (Function) — `src/components/LateralMenu/MixerPanel/index.tsx:138`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `MixerPanel` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 23 |
| `handleChangeType` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 123 |
| `checkSize` | Function | `src/components/LateralMenu/MixerPanel/index.tsx` | 138 |
| `changeNumMusic` | Function | `src/store/slices/music.slice.ts` | 30 |
| `changeType` | Function | `src/store/slices/music.slice.ts` | 34 |
| `handleNext` | Function | `src/components/LateralMenu/Music/index.tsx` | 62 |
| `handlePrev` | Function | `src/components/LateralMenu/Music/index.tsx` | 85 |

## Execution Flows

| Flow | Type | Steps |
|------|------|-------|
| `MixerPanel → ChangeType` | intra_community | 3 |

## How to Explore

1. `gitnexus_context({name: "MixerPanel"})` — see callers and callees
2. `gitnexus_query({query: "mixerpanel"})` — find related execution flows
3. Read key files listed above for implementation details
