# Thar Zaw — Neo-Enterprise Portfolio

Single-page portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Local dev server     |
| `npm run build`| Production build     |
| `npm run preview` | Preview production build |

## Customize content

Edit `src/data/portfolio.ts` for skills, education, projects, and other copy.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Vite** (build: `npm run build`, output: `dist`).

Or from the CLI:

```bash
npx vercel
```

## Deploy (Netlify)

Build command: `npm run build` · Publish directory: `dist`

`public/_redirects` is included for SPA routing on Netlify.

## Stack

- React + TypeScript
- Tailwind CSS (utility-only styling)
- Framer Motion (light entrance animations)
- Custom typewriter hook (&lt;300ms transitions on interactions)
