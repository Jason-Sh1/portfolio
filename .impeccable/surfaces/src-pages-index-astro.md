---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/projects/[slug].astro"]
---

# Surface brief: portfolio home + project pages

Scope: src/pages/index.astro, src/pages/projects/[slug].astro, src/pages/404.astro, shared layout. Visitor mode: Experience (portfolio; the work leads).
Audience: SWE / applied-AI recruiters and engineers, under a minute on first pass. Action: open a project or repo, or email.
Constraints: no grad year, no GPA, no résumé download, near-zero JS, facts from the master résumé + public repos only.

## Direction contract

THESIS: Jason as a documented component: the page is an engineering datasheet, where every claim is a characteristic with a value and a condition. Refuses the category default (name + tagline hero over a grid of project cards).

OWN-WORLD: Print-white sheet, near-black ink, one signal vermilion used only for the part-number band, pin highlights and live states. Archivo across widths: expanded heavy for part numbers and the name, condensed caps for table heads, regular for prose, tabular figures in every table. Hairline rules, a heavy rule under the header band, zebra-free ruled tables with footnote markers. Functional block diagrams drawn as boxes and arrows.

STORY: The visitor reads the descriptor, scans measured characteristics (Leidos numbers with conditions), picks a project from the selection table, and finds contact on the pinout. Believes: real, measured, shipped.

FIRST VIEWPORT: Datasheet header band (JS-1 part code, revision, nav) over a heavy rule. Left two-thirds: name at large expanded weight, one-line descriptor, then FEATURES and APPLICATIONS columns. Right third: PIN CONFIGURATION, a DIP package drawing whose labelled pins are the links (GitHub, LinkedIn, Email, Work, Experience). Primary action: the pins plus the email pin.

FORM: Engineering component datasheet, my grounded list #1 (presented as the pick after the roll's #6 failed on truth: it required invented judge scores). seed:1aa64805a076edc9

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
