# GetRida Work Desktop

Native desktop command center for the GetRida AI Growth Operator stack.

**Manage leads, outbound, content, community, and your operator portal from one app.**

Built on Electron + React + Vite. Connects to `getrida.work` APIs via grk bearer auth.

## Stack

- Electron 39 + electron-vite
- React 19 + TypeScript
- Tailwind CSS v4
- SQLite (better-sqlite3) for local state
- Three.js for 3D office view

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build:mac   # macOS .dmg
npm run build:win   # Windows NSIS + portable
npm run build:linux # AppImage + deb + rpm
```

## Runtime home

GetRida Work Desktop stores config and state in `~/.getrida/` (overridable via `GETRIDA_HOME` env var).

## API

Connects to `getrida.work/api/v1/*` with a `grk_` bearer key. MCP tools available at `getrida.work/api/mcp`.
