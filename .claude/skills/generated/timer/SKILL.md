---
name: timer
description: "Skill for the Timer area of lofi-web. 5 symbols across 1 files."
---

# Timer

5 symbols | 1 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how switchMode, tick, interval work
- Modifying timer-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx` | switchMode, tick, interval, Timer, initTimer |

## Entry Points

Start here when exploring this area:

- **`switchMode`** (Function) — `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx:32`
- **`tick`** (Function) — `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx:50`
- **`interval`** (Function) — `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx:57`
- **`Timer`** (Function) — `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx:18`
- **`initTimer`** (Function) — `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx:46`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `switchMode` | Function | `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx` | 32 |
| `tick` | Function | `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx` | 50 |
| `interval` | Function | `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx` | 57 |
| `Timer` | Function | `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx` | 18 |
| `initTimer` | Function | `src/components/LateralMenu/PomodoroTimer/Timer/index.tsx` | 46 |

## How to Explore

1. `gitnexus_context({name: "switchMode"})` — see callers and callees
2. `gitnexus_query({query: "timer"})` — find related execution flows
3. Read key files listed above for implementation details
