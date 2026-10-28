---
name: button
description: "Skill for the Button area of lofi-web. 3 symbols across 3 files."
---

# Button

3 symbols | 3 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how changeSetting, SettingButton, BackButton work
- Modifying button-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/store/slices/pomodoro.slice.ts` | changeSetting |
| `src/components/LateralMenu/PomodoroTimer/Button/SettingButton.tsx` | SettingButton |
| `src/components/LateralMenu/PomodoroTimer/Button/BackButton.tsx` | BackButton |

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `changeSetting` | Function | `src/store/slices/pomodoro.slice.ts` | 17 |
| `SettingButton` | Function | `src/components/LateralMenu/PomodoroTimer/Button/SettingButton.tsx` | 6 |
| `BackButton` | Function | `src/components/LateralMenu/PomodoroTimer/Button/BackButton.tsx` | 6 |

## How to Explore

1. `gitnexus_context({name: "changeSetting"})` — see callers and callees
2. `gitnexus_query({query: "button"})` — find related execution flows
3. Read key files listed above for implementation details
