# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (accessible on local network via --host)
npm run build      # Production build → dist/
npm run preview    # Serve the dist/ build locally
npm run lint       # ESLint check
```

No test suite is configured.

## Architecture

Single-page React 19 portfolio built with Vite. Routing is handled by React Router v7 (BrowserRouter in `src/main.jsx`).

**Routing** (`src/App.jsx`):
- `/` — home page, stacks all section components vertically (Hero → About → MyWork → Experience → Contact → Footer)
- `/projects` — full projects listing
- `/projects/:id` — individual project detail
- `/engineered-projects` — engineered projects section

Page transitions use Framer Motion's `AnimatePresence`. A `LoadingScreen` component gates the initial render.

**Data layer** (`src/assets/*.js`): Content is stored as static JS data files (`mywork_data.js`, `work_data.js`, `services_data.js`, `engineered_projects_data.js`). Components import and map over these arrays — to add/edit content, update the relevant data file.

**Components** (`src/Components/`): Each section has its own directory. Animation-heavy components use Framer Motion; `src/hooks/useCountUp.js` provides the count-up number animation used in stats.

**Styling**: Global CSS lives in `src/index.css` with a fluid typography system using CSS `clamp()` and custom properties. Font families: Fraunces (display), Manrope (body), JetBrains Mono (mono). No CSS modules or Tailwind — component-level styles are typically co-located `.css` files.

**Icons/assets**: Skill icons are SVGs under `src/assets/icons/`. Stack/project images under `src/assets/Images/` and `src/assets/project_pics/`. The `lucide-react` package provides UI icons.

**Environment variables** (`.env`): `VITE_RESUME_URL` and `VITE_RESUME_DOWNLOAD_URL` point to Cloudinary-hosted resume PDFs. All client-exposed vars must use the `VITE_` prefix.

## Key dependencies

| Package | Purpose |
|---|---|
| `framer-motion` | Animations and page transitions |
| `react-router-dom` v7 | Client-side routing |
| `lucide-react` | UI icons |
| `react-anchor-link-smooth-scroll` | Smooth in-page navigation |

## Live deployment

Deployed on Vercel: https://portfolio-zeta-amber-33.vercel.app/
