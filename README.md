# jasonshi.vercel.app

Personal portfolio. Built with [Astro](https://astro.build), designed as an engineering component datasheet, deployed on Vercel. Design system: [DESIGN.md](DESIGN.md).

## Add a project in 3 steps

1. Copy any file in `src/content/projects/` and rename it (the filename becomes the URL slug).
2. Fill in the frontmatter and write the body in plain markdown:

   ```markdown
   ---
   title: Project Name
   code: PN-1                  # part number: two capitals, dash, digit
   date: 2026-08-01
   order: 7                    # position in the Selected work table
   function: One line for the selection table   # max 90 chars
   summary: Two or three sentences for the project sheet. # max 320 chars
   status: Shipped             # Shipped | In progress | Hackathon build
   award: 1st Place, Some Hackathon   # optional
   tags: [Python, FastAPI]
   github: https://github.com/Jason-Sh1/repo   # optional
   features:
     - What it does, specifically
     - Another concrete feature
   specs:
     - { label: Database, value: "PostgreSQL" }
   pipeline:                   # functional block diagram, left to right
     - { label: Ingest, detail: "RSS" }
     - { label: Serve, detail: "FastAPI" }
   ---

   The write-up (shown as "Detailed description").
   ```

3. Commit and push to `main`. Vercel rebuilds and deploys automatically.

The frontmatter is validated at build time (`src/content.config.ts`) — a typo fails the build instead of shipping.

## Everything else you might edit

| What | Where |
| --- | --- |
| Name, features, pins, measured results, experience, honors, about | `src/data/profile.ts` |
| Colors, fonts, tables | `src/styles/global.css` (rules in `DESIGN.md`) |
| Header, footer, meta tags | `src/layouts/Base.astro` |

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build locally |
