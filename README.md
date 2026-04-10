# VivaHut

Pre-launch landing page for VivaHut — a personal assistant for building better habits at any age.

## Stack

- React 18
- Vite
- Tailwind CSS
- Bun (CI)

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

Pushes to `main` automatically deploy to GitHub Pages via the included workflow.

Go to **Settings → Pages** in your repository and set the source to **GitHub Actions**.

## Project structure

```
src/
  components/    # All page sections + shared icons
  hooks/         # useReveal (scroll-triggered visibility)
  App.jsx
  main.jsx
  index.css
```
