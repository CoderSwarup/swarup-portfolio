# AGENT.md — Persistent Context for AI Coding Agents

## Project Overview

- Personal developer portfolio (Full Stack MERN / DevOps focus)
- Live site: https://swarupbhise.vercel.app/
- Stack: Next.js 16, Tailwind CSS v4 (CSS-first, `@theme` inline), shadcn/ui
  (initialized — do not re-init)
- Package manager: pnpm
- Branch: `development` (main is deploy-only)
- Page structure: Hero → About → Work Experience → Education → Skills → GitHub
  Contributions → Projects → Hackathons → Contact

## Design System — LOCKED

These are **locked decisions**, not suggestions. Do not deviate without explicit
user confirmation.

### Typography

All fonts loaded via `next/font` in `src/app/layout.tsx` and exposed as CSS
variables on `<html>`.

| Token            | Font                            | Source             | Usage                                                                                                                      |
| ---------------- | ------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `--font-heading` | Pixelify Sans (400, 500, 700)   | `next/font/google` | Hero headline **only** ("Hi, I'm Swarup"). Do not apply elsewhere.                                                         |
| `--font-accent`  | Caveat (400, 600)               | `next/font/google` | Section labels **only** — About, Work Experience, Education, Skills, GitHub Contributions. Not body, not hero.             |
| `--font-sans`    | Geist Pixel (self-hosted woff2) | `next/font/local`  | **Default for everything** — body, paragraphs, nav, buttons, all other headings. No class needed; applies via `font-sans`. |

- Geist Pixel must use the **Square** instance:
  `font-variation-settings: "ELSH" 1` (applied in `@theme` via `--font-sans`).
- Font variable classes (`*.variable`) are applied to `<html>`, not `<body>`, so
  `@theme` references resolve at `:root`.
- Never hardcode `font-family` per component — always reference the Tailwind
  utility (`font-heading`, `font-accent`, `font-sans`) or the CSS variable.

### Color System

- **Strict monochrome** (black / white / gray) in both light and dark mode.
- **No accent color** on buttons, links, icons, focus states, or borders. This
  is a locked rule.
- Semantic tokens are shadcn CSS variables defined in `src/app/globals.css`
  inside the `@layer base` block (`:root` and `.dark`). These are the source of
  truth — pull from here, don't invent new grays inline.
- Key token values:
  - Light background: `#FAF3FC` | foreground: `#171318` | card: `#EEE9F0` |
    border/muted: `#E3DDE5`
  - Dark background: `#0A0A0A` | foreground: `#FAFAFA` | card: `#171717` |
    border: `#323232`
- **Glow variables** (placeholders, NOT applied anywhere yet):
  - `--glow-blue: #3178C6`
  - `--glow-pink: #F34B7D`
  - `--glow-green: #22C55E` ← **placeholder** — replace with confirmed value
    before real use
- Glow variables are reserved for future card glow/shadow effects only. Do not
  use as general accent colors.

## Working Method

This project does **not** take one giant redesign prompt. Follow this loop:

1. Identify the specific issue or new need for **one** section/feature.
2. Discuss with the user first — trade-offs, options, references — before
   deciding.
3. Finalize direction explicitly with the user.
4. Implement.
5. Review results, iterate if needed.

**Do not skip to implementation on ambiguous requests.** Ask clarifying
questions first. Offer better alternatives if they exist.

## Umami Analytics

Privacy-focused, cookie-less analytics via Umami Cloud. Script loaded in
`UmamiAnalytics.tsx` using `next/script` with `strategy="afterInteractive"`.

### Tracking an event

```tsx
import { useUmami } from '@/hooks/use-umami';

function MyComponent() {
  const { trackEvent } = useUmami();

  return (
    <button onClick={() => trackEvent({
      name: 'button_click',
      data: { buttonId: 'hero_cta', section: 'hero' },
    })}>
      Click me
    </button>
  );
}
```

Events are type-safe — the `data` shape is enforced by the `AnalyticsEvent`
discriminated union in `src/types/analytics.ts`. To add a new event, add an
entry there first; the rest of the app inherits the types automatically.

Currently tracked: `theme_toggle` (in `ThemeSwitch.tsx` only). Calls are no-ops
if the Umami script hasn't loaded (ad blocker, still loading).

Full reference: [docs/1_How_to_Use_Umami.md](docs/1_How_to_Use_Umami.md).

## Config Env Management

All env vars are centralized in `src/config/index.ts` — **never read
`process.env` directly in application code**.

### Importing config

```ts
import { __CONFIG__ } from '@/config';

// Access values
const url = __CONFIG__.NEXT_PUBLIC_APP_URL;
const umamiSrc = __CONFIG__.UMAMI.SRC;
const umamiId = __CONFIG__.UMAMI.ID;
const env = __CONFIG__.NODE_ENV; // "development" | "production"
```

### Adding a new env var

1. Add the key to `src/types/env.ts` in both `envKeys` and `EnvValues`.
2. Add the value to `src/config/index.ts` inside `rawEnv`.
3. Add a placeholder to `.env.example`.
4. Set the real value in `.env` (never committed).

### Constants vs Config

| Need                          | Use                                |
| ----------------------------- | ---------------------------------- |
| Runtime env value             | `import { __CONFIG__ } from '@/config'` |
| Static enum / constant        | `import { APPLICATION_ENV } from '@/constants'` |

Full reference: [docs/2_Config_And_Logging.md](docs/2_Config_And_Logging.md).

## Logging

Structured logger in `src/utils/logger.ts`. **Always use `logger` instead of
`console`** for app logging.

### Usage

```ts
import { logger } from '@/utils';

logger.info('Server started', { port: 3000 });
logger.error('Failed to load', { error: err.message });

// Scoped logger — prefixes all output with a context string
const log = logger.child('UmamiAnalytics');
log.warn('Umami not configured');
```

### Behavior

| Level   | Production | Development |
| ------- | ---------- | ----------- |
| `debug` | no-op      | logs        |
| `info`  | no-op      | logs        |
| `warn`  | no-op      | logs        |
| `error` | **always** | logs        |

Server output is color-coded with timestamps. Client output is plain text.

## Folder Structure

```
src/
├── app/              # Next.js App Router (layout, page, blog routes)
├── components/
│   ├── analytics/    # UmamiAnalytics.tsx
│   ├── common/       # Navbar, ThemeProviders, ThemeSwitch
│   ├── svgs/         # Icon components (see above)
│   └── ui/           # shadcn/ui components
├── config/           # Centralized env var access (__CONFIG__)
├── constants/        # Static app constants (APPLICATION_ENV)
├── data/             # Resume/portfolio data
├── hooks/            # useUmami, useHapticFeedback, useMobile
├── lib/              # Utility helpers (cn, etc.)
├── types/            # TypeScript types (analytics, env)
└── utils/            # Logger, re-exports
public/
├── assets/           # Personal images (me.png, mumbaiuc.png)
├── company/          # Company logos (tappn.png)
└── fonts/            # Self-hosted fonts (Geist Pixel woff2)
```

## Key Files

| File                                          | Purpose                                                                                                                     |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `src/app/layout.tsx`                          | Root layout, font loading, CSS variable classes on `<html>`                                                                 |
| `src/app/globals.css`                         | Tailwind v4 `@theme` (colors, fonts, radius, animations), `@layer base` (shadcn semantic tokens, glow vars, `.font-accent`) |
| `src/app/page.tsx`                            | Main page — all sections, font class assignments                                                                            |
| `src/config/index.ts`                         | Centralized env var access (`__CONFIG__`)                                                                                   |
| `src/constants/application.constant.ts`       | `APPLICATION_ENV` enum                                                                                                      |
| `src/types/analytics.ts`                      | Type-safe analytics event definitions                                                                                       |
| `src/hooks/use-umami.ts`                      | Umami tracking hook                                                                                                         |
| `src/components/analytics/UmamiAnalytics.tsx` | Umami script injection via `next/script`                                                                                    |
| `src/components/common/ThemeSwitch.tsx`       | Theme toggle with Umami tracking and view transition animations                                                             |
| `src/utils/logger.ts`                         | Structured logger (debug/info/warn/error, suppressed in prod)                                                               |
| `postcss.config.mjs`                          | `@tailwindcss/postcss`                                                                                                      |
| `eslint.config.mjs`                           | ESLint flat config (replaced `.eslintrc.json`)                                                                              |
| `vercel.json`                                 | Deploy gating — only deploys from `main` branch                                                                             |
| `public/fonts/geist-pixel-latin.woff2`        | Self-hosted Geist Pixel font file                                                                                           |
