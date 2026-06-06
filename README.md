# Portfolio Website

## Overview

This is a personal portfolio built with Vite, React, and modern responsive CSS.

## Fixes applied

- Updated `src/components/About.jsx` so the animated stats use `IntersectionObserver` for reliable visibility detection on mobile and desktop.
- Ensured each stat counter animates independently, fixing the issue where later counters could stay at zero.
- Improved responsive image sizing in `src/styles/global.css` so the About image scales cleanly on smaller screens.

## Verification

- The About section layout changes from 2 columns to a single column on tablets and smaller screens.
- The image card resizes to fit narrow viewports without overflowing.
- The stats row switches to a vertical stack on very small screens.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in the terminal.

## Build and deploy

```bash
npm run build
```

- Deploy the contents of `dist/` to Netlify or another static host.
- `netlify.toml` is included for Netlify configuration.

## Content updates

- Projects: `src/data/projects.json`
- Stats: edit the `STATS` array in `src/components/About.jsx`
- Social links: `src/data/socialLinks.json`
- Images: `public/images/`
