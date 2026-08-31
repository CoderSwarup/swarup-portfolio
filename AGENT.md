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

## Deferred / Not Yet Done

## Key Files

| File                                   | Purpose                                                                                                                     |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `src/app/layout.tsx`                   | Root layout, font loading, CSS variable classes on `<html>`                                                                 |
| `src/app/globals.css`                  | Tailwind v4 `@theme` (colors, fonts, radius, animations), `@layer base` (shadcn semantic tokens, glow vars, `.font-accent`) |
| `src/app/page.tsx`                     | Main page — all sections, font class assignments                                                                            |
| `postcss.config.mjs`                   | `@tailwindcss/postcss`                                                                                                      |
| `eslint.config.mjs`                    | ESLint flat config (replaced `.eslintrc.json`)                                                                              |
| `vercel.json`                          | Deploy gating — only deploys from `main` branch                                                                             |
| `public/fonts/geist-pixel-latin.woff2` | Self-hosted Geist Pixel font file                                                                                           |
