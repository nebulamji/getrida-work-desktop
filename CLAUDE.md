# GetRida Work Desktop — Dev Context

Electron + React + TypeScript desktop app. Command center for the GetRida AI Growth Operator stack.

## Key paths

- `src/main/` — Electron main process (Node.js)
- `src/renderer/src/` — React UI
- `src/shared/` — types, i18n, utils shared across processes
- `src/preload/` — Electron preload bridge (`window.hermesAPI`)

## Runtime

- Default home: `~/.getrida/` (env: `GETRIDA_HOME`)
- API target: `getrida.work/api/v1/*` with grk bearer
- MCP: `getrida.work/api/mcp`

## Commands

```bash
npm run dev          # dev mode
npm run build:mac    # production build
npm run typecheck    # TS check
npm test             # vitest
```

## Branding

- Product name: `GetRida Work Desktop`
- App ID: `work.getrida.desktop`
- Executable: `getrida-work`
- Publisher: `nebulamji`
