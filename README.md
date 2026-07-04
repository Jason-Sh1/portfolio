# jasonshi.vercel.app

Personal portfolio. Built with [Astro](https://astro.build), designed as engineering graph paper (blueprint in dark mode), deployed on Vercel.

## Add a project in 3 steps

1. Copy any file in `src/content/projects/` and rename it (the filename becomes the URL slug).
2. Fill in the frontmatter and write the body in plain markdown:

   ```markdown
   ---
   title: Project Name
   date: 2026-08-01            # shown as the log date, newest first
   summary: One or two sentences shown on the homepage. # max 320 chars
   tags: [Python, FastAPI]
   github: https://github.com/Jason-Sh1/repo   # optional
   demo: https://example.com                   # optional
   featured: true              # red rule + full treatment on the homepage
   draft: false                # true = hidden from the site
   ---

   The write-up. Structure that works: the problem, how it works, what was hard.
   ```

3. Commit and push to `main`. Vercel rebuilds and deploys automatically.

The frontmatter is validated at build time (`src/content.config.ts`) — a typo fails the build instead of shipping.

## Everything else you might edit

| What | Where |
| --- | --- |
| Name, tagline, links, experience, about | `src/data/profile.ts` |
| Colors, fonts, grid background | `src/styles/global.css` |
| Header, footer, meta tags | `src/layouts/Base.astro` |
| Resume | replace `public/resume.pdf` (export from Overleaf) |

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build locally |
