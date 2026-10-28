---
name: video
description: "Skill for the Video area of lofi-web. 17 symbols across 9 files."
---

# Video

17 symbols | 9 files | Cohesion: 100%

## When to Use

- Working with code in `src/`
- Understanding how concateString, Seoul, renderVideos work
- Modifying video-related functionality

## Key Files

| File | Symbols |
|------|---------|
| `src/components/Video/Seoul.tsx` | Seoul, renderVideos |
| `src/components/Video/LofiCafe.tsx` | LofiCafe, renderVideos |
| `src/components/Video/LakeHouse.tsx` | LakeHouse, renderVideos |
| `src/components/Video/InTheWoods.tsx` | InTheWoods, renderVideos |
| `src/components/Video/CozyStudio.tsx` | CozyStudio, renderVideos |
| `src/components/Video/BookCafe.tsx` | App, renderVideos |
| `src/components/Video/BedRoom.tsx` | BedRoom, renderVideos |
| `src/components/Video/index.tsx` | Video, renderVideo |
| `src/utils/utils.ts` | concateString |

## Entry Points

Start here when exploring this area:

- **`concateString`** (Function) — `src/utils/utils.ts:0`
- **`Seoul`** (Function) — `src/components/Video/Seoul.tsx:10`
- **`renderVideos`** (Function) — `src/components/Video/Seoul.tsx:16`
- **`LofiCafe`** (Function) — `src/components/Video/LofiCafe.tsx:10`
- **`renderVideos`** (Function) — `src/components/Video/LofiCafe.tsx:17`

## Key Symbols

| Symbol | Type | File | Line |
|--------|------|------|------|
| `concateString` | Function | `src/utils/utils.ts` | 0 |
| `Seoul` | Function | `src/components/Video/Seoul.tsx` | 10 |
| `renderVideos` | Function | `src/components/Video/Seoul.tsx` | 16 |
| `LofiCafe` | Function | `src/components/Video/LofiCafe.tsx` | 10 |
| `renderVideos` | Function | `src/components/Video/LofiCafe.tsx` | 17 |
| `LakeHouse` | Function | `src/components/Video/LakeHouse.tsx` | 10 |
| `renderVideos` | Function | `src/components/Video/LakeHouse.tsx` | 16 |
| `InTheWoods` | Function | `src/components/Video/InTheWoods.tsx` | 11 |
| `renderVideos` | Function | `src/components/Video/InTheWoods.tsx` | 14 |
| `CozyStudio` | Function | `src/components/Video/CozyStudio.tsx` | 10 |
| `renderVideos` | Function | `src/components/Video/CozyStudio.tsx` | 15 |
| `App` | Function | `src/components/Video/BookCafe.tsx` | 10 |
| `renderVideos` | Function | `src/components/Video/BookCafe.tsx` | 17 |
| `BedRoom` | Function | `src/components/Video/BedRoom.tsx` | 10 |
| `renderVideos` | Function | `src/components/Video/BedRoom.tsx` | 15 |
| `Video` | Function | `src/components/Video/index.tsx` | 15 |
| `renderVideo` | Function | `src/components/Video/index.tsx` | 22 |

## Execution Flows

| Flow | Type | Steps |
|------|------|-------|
| `Seoul → ConcateString` | intra_community | 3 |
| `LofiCafe → ConcateString` | intra_community | 3 |
| `LakeHouse → ConcateString` | intra_community | 3 |
| `InTheWoods → ConcateString` | intra_community | 3 |
| `CozyStudio → ConcateString` | intra_community | 3 |
| `App → ConcateString` | intra_community | 3 |
| `BedRoom → ConcateString` | intra_community | 3 |

## How to Explore

1. `gitnexus_context({name: "concateString"})` — see callers and callees
2. `gitnexus_query({query: "video"})` — find related execution flows
3. Read key files listed above for implementation details
