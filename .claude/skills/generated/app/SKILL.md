---
name: app
description: "Skill for the App area of lofi-web. 5 symbols across 2 files."
---

# App

5 symbols | 2 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how Home, getListMusic, handleResize work
- Modifying app-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/app/page.tsx` | Home, getListMusic, handleResize |
| `src/store/slices/music.slice.ts` | setListMusic, setSrc |

## Entry Points

Start here when exploring this area:

- **`Home`** (Function) — `src/app/page.tsx:11`
- **`getListMusic`** (Function) — `src/app/page.tsx:44`
- **`handleResize`** (Function) — `src/app/page.tsx:70`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `Home` | Function | `src/app/page.tsx` | 11 |
| `getListMusic` | Function | `src/app/page.tsx` | 44 |
| `handleResize` | Function | `src/app/page.tsx` | 70 |
| `setListMusic` | Function | `src/store/slices/music.slice.ts` | 24 |
| `setSrc` | Function | `src/store/slices/music.slice.ts` | 27 |

## Execution Flows

| Flow | Type | Steps |
|------|------|-------|
| `Home → SetListMusic` | intra_community | 3 |
| `Home → SetSrc` | intra_community | 3 |

## How to Explore

1. `gitnexus_context({name: "Home"})` — see callers and callees
2. `gitnexus_query({query: "app"})` — find related execution flows
3. Read key files listed above for implementation details
