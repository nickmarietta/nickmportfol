# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

SvelteKit portfolio site for Nicklaus Marietta. The app lives in `nickmportfolio/`.

## Commands

All commands run from inside `nickmportfolio/`:

```bash
npm run dev       # dev server (localhost:5173)
npm run build     # production build
npm run preview   # preview production build
```

No test suite is configured. Linting uses ESLint (`eslint.config.js`).

## Architecture

Single-page portfolio built with SvelteKit + Tailwind CSS v4 + `@iconify/svelte`.

**Routing** — `src/routes/+page.js` loads `/data/projects.json` and `/data/experiences.json` from `static/` at runtime. Both arrays fall back to local defaults in `Main.svelte` if the fetches fail.

**Component tree:**
- `+layout.svelte` — global chrome (Header, Footer, scroll-to-top button, SEO meta)
- `Main.svelte` — all page sections (Hero, Projects, Experiences, About, Skills); receives `projects` and `experiences` as props
- `ProjectStep.svelte` — project card with image carousel and hover auto-play
- `Skills.svelte` — single orbiting icon; `Main.svelte` composes all three rings (inner 80px, middle 160px, outer 240px) by repeating `<Skills>` with different `radius`/`duration`/`delay`/`reverse` props
- `src/lib/utils.js` — `cn()` helper (clsx + tailwind-merge)

**Styling** — `app.css` imports Tailwind and defines CSS custom properties (`--color-main`, `--color-darkest`, etc.) for a green palette. The actual site uses a dark blue/slate palette via Tailwind utilities; the CSS vars are mostly unused at present.

**Static data** — project and experience JSON goes in `nickmportfolio/static/data/`. The page load function (`+page.js`) fetches these; if they don't exist the site silently falls back to the hardcoded data in `Main.svelte`.

**Deployment** — `@sveltejs/adapter-vercel` is installed alongside `adapter-auto`.
