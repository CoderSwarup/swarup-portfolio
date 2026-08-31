# Config & Logging

## Environment Config

All env vars are centralized in `src/config/index.ts`. It exports a frozen
`__CONFIG__` object — **import config from there, never read `process.env`
directly** in application code.

```ts
import { __CONFIG__ } from '@/config';

const url = __CONFIG__.NEXT_PUBLIC_APP_URL;
const umamiSrc = __CONFIG__.UMAMI.SRC;
```

### What's in `__CONFIG__`

| Key                  | Default                                      | Source                       |
| -------------------- | -------------------------------------------- | ---------------------------- |
| `NODE_ENV`           | `"development"`                              | `process.env.NODE_ENV`       |
| `NEXT_PUBLIC_APP_URL`| `"https://swarupbhise.vercel.app"`           | `process.env.NEXT_PUBLIC_APP_URL` |
| `UMAMI.SRC`          | —                                            | `process.env.NEXT_PUBLIC_UMAMI_SRC` |
| `UMAMI.ID`           | —                                            | `process.env.NEXT_PUBLIC_UMAMI_ID`  |

### Where env vars are defined

- **`.env`** — actual values (never committed).
- **`.env.example`** — template with placeholder values (committed).
- **`env.d.ts`** — augments `NodeJS.ProcessEnv` with `EnvValues` from
  `src/types/env.ts` so TypeScript knows the shape of `process.env`.
- **`src/types/env.ts`** — defines the `EnvValues` type and `envKeys` constant.

### Config vs Constants

| Directory        | Purpose                                       |
| ---------------- | --------------------------------------------- |
| `src/config/`    | Reads env vars, provides the runtime config object. |
| `src/constants/` | Static application values (e.g. `APPLICATION_ENV` enum). Not env-dependent. |

## Logger

`src/utils/logger.ts` provides a structured `logger` object with four levels:
`debug`, `info`, `warn`, `error`.

### Key behavior

- **Suppressed in production**: `debug`, `info`, and `warn` are no-ops when
  `NODE_ENV === "production"`. Only `error` always logs.
- **Server-side output** is color-coded with ANSI escapes and includes timestamps.
- **Client-side output** is plain text (no ANSI codes).
- **`logger.child('context')`** creates a scoped logger that prefixes all calls
  with a context string — useful for long-lived modules.

### Usage

```ts
import { logger } from '@/utils';

// Basic usage
logger.info('Server started', { port: 3000 });
logger.error('Failed to load config', { error: err.message });

// Scoped logger
const log = logger.child('UmamiAnalytics');
log.warn('Umami not configured');
```

### When to use logger vs console

| Use `logger` when              | Use `console` when              |
| ------------------------------ | ------------------------------- |
| Structured app logging         | Quick debugging (temporary)     |
| Errors that should always show | Client-side UI debugging        |
| Server-side info/debug/warn    | Never in production components  |

`src/utils/index.ts` re-exports `logger` (plus planned exports for `httpResponse`,
`httpError`, `errorObject`, `requireRole` — not yet implemented).
