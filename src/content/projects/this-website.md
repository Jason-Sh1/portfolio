---
title: This website
date: 2026-07-03
summary: The site you're reading — an Astro static site where adding a project means dropping one markdown file in a folder. Designed as engineering graph paper, deployed on Vercel.
tags: [Astro, TypeScript, CSS]
github: https://github.com/Jason-Sh1/portfolio
featured: false
---

This portfolio is built to be updated, not just launched. Every project on it is one markdown file with a few lines of frontmatter; pushing to `main` rebuilds and deploys the site automatically.

## Design

The visual system is engineering graph paper: a faint grid on cool off-white paper, slab-serif headings, and monospace dates and tags. Dark mode inverts the metaphor into a blueprint. Projects are listed as a dated log — newest first, because recency is real information.

## Engineering

- **Astro content collections** with a typed (zod) schema validate every project entry at build time — a typo in frontmatter fails the build instead of shipping.
- **Zero JavaScript** ships to the browser except the theme toggle.
- Fonts are self-hosted, pages are statically generated, and the whole site scores 95+ on Lighthouse.
