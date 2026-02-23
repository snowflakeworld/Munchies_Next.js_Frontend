# Munchies — Frontend

Small Next.js + TypeScript frontend used for the Munchies Project.

## Tech
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- MUI (Material UI)

## Quick start

Prerequisites: Node.js (recommended >= 18) and npm.

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server (after build):

```bash
npm start
```

Other useful scripts:

- `npm run lint` — run ESLint
- `npm run type-check` — run TypeScript type check

## Project structure (major folders)

- `app/` — Next.js app routes and pages
- `components/` — React components (cards, header, sidebar, etc.)
- `constants/` — shared constants
- `context/` — React contexts
- `layout/` — layout components
- `public/` — static assets
- `styles/` — global CSS / Tailwind
- `types/` — TypeScript types

## Notes
- This repo is a frontend-only Next.js project. Environment variables (if any) should be placed in a `.env` file and kept out of version control.

If you'd like, I can add more sections (example env, testing, CI) or update this README to match a particular hosting provider.
# Next + TypeScript + Tailwind CSS + Material UI (starter)

Quick start:

1. Install dependencies

```bash
cd frontend
npm install
```

2. Run dev server

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Type-check:

```bash
npm run type-check
```
