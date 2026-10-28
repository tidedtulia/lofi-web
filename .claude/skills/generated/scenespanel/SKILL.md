---
name: scenespanel
description: "Skill for the ScenesPanel area of lofi-web. 3 symbols across 2 files."
---

# ScenesPanel

3 symbols | 2 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how changeScene, ScenesPanel, handleChangeType work
- Modifying scenespanel-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/components/LateralMenu/ScenesPanel/index.tsx` | ScenesPanel, handleChangeType |
| `src/store/slices/case.slice.ts` | changeScene |

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `changeScene` | Function | `src/store/slices/case.slice.ts` | 14 |
| `ScenesPanel` | Function | `src/components/LateralMenu/ScenesPanel/index.tsx` | 11 |
| `handleChangeType` | Function | `src/components/LateralMenu/ScenesPanel/index.tsx` | 18 |

## Execution Flows

| Flow | Type | Steps |
|------|------|-------|
| `ScenesPanel → ChangeScene` | intra_community | 3 |

## How to Explore

1. `gitnexus_context({name: "changeScene"})` — see callers and callees
2. `gitnexus_query({query: "scenespanel"})` — find related execution flows
3. Read key files listed above for implementation details
