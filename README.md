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

Pushes to `main` automatically build and push the `dist/` folder to the `gh-pages` branch via the included workflow.

Go to **Settings → Pages** in your repository, set the source to **"Deploy from a branch"**, and select the `gh-pages` branch.

## Project structure

```
src/
  components/    # All page sections + shared icons
  hooks/         # useReveal (scroll-triggered visibility)
  App.jsx
  main.jsx
  index.css
```
