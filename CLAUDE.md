# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint check
```

No test suite is configured.

## Environment Variables

Requires a `.env.local` file with:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
NEXT_PUBLIC_TYPE_1=   # count of music tracks in playlist type 1
NEXT_PUBLIC_TYPE_2=   # count of music tracks in playlist type 2
NEXT_PUBLIC_TYPE_3=   # count of music tracks in playlist type 3
```

## Related project

`../LofiApp` is the React Native mobile companion. Its `CLAUDE.md` references this project as the architectural source of truth.

## Architecture

This is a **Next.js 14 App Router** lofi music web app. The app renders an ambient video background with layered ambient sound effects and music, controlled through a bottom toolbar.

### Core rendering pattern

`page.tsx` fetches the music list from `/api/musics` (which queries Cloudinary) and renders two top-level components:

- **`<Video>`** — renders the full-screen background video. It switches on `state.case` (scene + place + time + weather) to select from pre-defined Cloudinary video URLs in `src/utils/files.ts` (`VIDEO_FILE`). Each scene component pre-renders all its video variants and shows/hides them via CSS classes, avoiding remounts on state change.
- **`<Controller>`** — overlays the UI. It switches on `state.case.scene` to render the correct scene-specific controller (ambient toggles that affect `state.sound` and `state.case`), then always renders `<LateralMenu>` and `<Sound>` below.

### Redux store slices (`src/store/slices/`)

| Slice | Purpose |
|-------|---------|
| `case` | Active scene/place/time/weather — drives which video plays |
| `music` | Music type, track list, current src — drives the audio player |
| `sound` | Volume levels for each ambient sound effect |
| `hide` | UI auto-hide toggle + inactivity timeout |
| `pomodoro` | Work/break minutes for the Pomodoro timer |

### Adding a new scene

1. Add the scene key to `SCENE` enum in `src/utils/enums.ts`
2. Add preview image to `SCENE_FILE` and video variants to `VIDEO_FILE` in `src/utils/files.ts`
3. Create `src/components/Video/<SceneName>.tsx` — render all video variants and show the active one via CSS
4. Create `src/components/Controller/<SceneName>/` — scene-specific ambient controls
5. Wire both into the `switch` blocks in `src/components/Video/index.tsx` and `src/components/Controller/index.tsx`

### Key conventions

- All static asset URLs (images, videos, sounds) are Cloudinary-hosted and centralized in `src/utils/files.ts`
- Video keys are constructed with `concateString([place, time, weather])` from `src/utils/utils.ts` — array order must match how keys are defined in `VIDEO_FILE`
- `reactStrictMode` is disabled in `next.config.mjs` (avoids double-play on audio/video elements)
- Components use `React.memo` at the export level throughout
- Styling uses Tailwind for layout and CSS Modules for component-specific styles

<!-- gitnexus:start -->
# GitNexus — Code Intelligence

This project is indexed by GitNexus as **lofi-web** (800 symbols, 1384 relationships, 11 execution flows). Use the GitNexus MCP tools to understand code, assess impact, and navigate safely.

> If any GitNexus tool warns the index is stale, run `npx gitnexus analyze` in terminal first.

## Always Do

- **MUST run impact analysis before editing any symbol.** Before modifying a function, class, or method, run `gitnexus_impact({target: "symbolName", direction: "upstream"})` and report the blast radius (direct callers, affected processes, risk level) to the user.
- **MUST run `gitnexus_detect_changes()` before committing** to verify your changes only affect expected symbols and execution flows.
- **MUST warn the user** if impact analysis returns HIGH or CRITICAL risk before proceeding with edits.
- When exploring unfamiliar code, use `gitnexus_query({query: "concept"})` to find execution flows instead of grepping. It returns process-grouped results ranked by relevance.
- When you need full context on a specific symbol — callers, callees, which execution flows it participates in — use `gitnexus_context({name: "symbolName"})`.

## Never Do

- NEVER edit a function, class, or method without first running `gitnexus_impact` on it.
- NEVER ignore HIGH or CRITICAL risk warnings from impact analysis.
- NEVER rename symbols with find-and-replace — use `gitnexus_rename` which understands the call graph.
- NEVER commit changes without running `gitnexus_detect_changes()` to check affected scope.

## Resources

| Resource | Use for |
|----------|---------|
| `gitnexus://repo/lofi-web/context` | Codebase overview, check index freshness |
| `gitnexus://repo/lofi-web/clusters` | All functional areas |
| `gitnexus://repo/lofi-web/processes` | All execution flows |
| `gitnexus://repo/lofi-web/process/{name}` | Step-by-step execution trace |

## CLI

| Task | Read this skill file |
|------|---------------------|
| Understand architecture / "How does X work?" | `.claude/skills/gitnexus/gitnexus-exploring/SKILL.md` |
| Blast radius / "What breaks if I change X?" | `.claude/skills/gitnexus/gitnexus-impact-analysis/SKILL.md` |
| Trace bugs / "Why is X failing?" | `.claude/skills/gitnexus/gitnexus-debugging/SKILL.md` |
| Rename / extract / split / refactor | `.claude/skills/gitnexus/gitnexus-refactoring/SKILL.md` |
| Tools, resources, schema reference | `.claude/skills/gitnexus/gitnexus-guide/SKILL.md` |
| Index, status, clean, wiki CLI commands | `.claude/skills/gitnexus/gitnexus-cli/SKILL.md` |
| Work in the OutSide area (58 symbols) | `.claude/skills/generated/outside/SKILL.md` |
| Work in the Slices area (39 symbols) | `.claude/skills/generated/slices/SKILL.md` |
| Work in the InSide area (30 symbols) | `.claude/skills/generated/inside/SKILL.md` |
| Work in the Video area (17 symbols) | `.claude/skills/generated/video/SKILL.md` |
| Work in the MixerPanel area (7 symbols) | `.claude/skills/generated/mixerpanel/SKILL.md` |
| Work in the App area (5 symbols) | `.claude/skills/generated/app/SKILL.md` |
| Work in the Timer area (5 symbols) | `.claude/skills/generated/timer/SKILL.md` |
| Work in the Button area (3 symbols) | `.claude/skills/generated/button/SKILL.md` |
| Work in the ScenesPanel area (3 symbols) | `.claude/skills/generated/scenespanel/SKILL.md` |

<!-- gitnexus:end -->
