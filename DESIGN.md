---
name: Jason Shi portfolio
description: A personal portfolio set as an engineering component datasheet.
colors:
  paper: "#fbfbf9"
  ink: "#16171a"
  ink-2: "#4a4d55"
  ink-3: "#6b6f78"
  hair: "#d9dadd"
  wash: "#f0f0ec"
  signal: "#d4380f"
  signal-ink: "#ffffff"
  paper-dark: "#121316"
  ink-dark: "#ebeae6"
  signal-dark: "#ff7448"
typography:
  name:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.25rem, 9.5vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  descriptor:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  section-head:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 750
    lineHeight: 1.2
    letterSpacing: "0.05em"
  table-head:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.05em"
  body:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
  footnote:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0em"
  project-title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 5.25rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  project-summary:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1rem, 2vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0em"
  contact-email:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 4.2vw, 3rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  next-link:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 2.5rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  part-code:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 2vw, 1.35rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  chip-mark:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  entry-title:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0em"
  value:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "0em"
  lead:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "0em"
  small:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
  caption:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.88rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0em"
  micro:
    fontFamily: "Archivo Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
  code:
    fontFamily: "ui-monospace, Cascadia Code, Menlo, Consolas, monospace"
    fontSize: "0.88em"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
rounded:
  none: "0px"
  hairline: "1px"
  notch: "1.5rem"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  gap: "clamp(1.5rem, 3vw, 2.5rem)"
  block-top: "1.5rem"
  block-bottom: "3.5rem"
  page: "74rem"
components:
  part-tag:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.signal-ink}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.6rem 0.4rem"
  table-header-cell:
    backgroundColor: "{colors.wash}"
    textColor: "{colors.ink}"
    typography: "{typography.table-head}"
    padding: "0.5rem 0.75rem"
  pin-leg:
    backgroundColor: "{colors.paper}"
    height: "0.75rem"
    width: "1.5rem"
  pin-leg-hover:
    backgroundColor: "{colors.signal}"
  block-stage:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.8rem 0.85rem"
---

# Design System: Jason Shi portfolio

## Overview

The site is an engineering component datasheet. Jason is the part (JS-1), each project is a part with its own sheet (IP-1, TL-1, ...), and every claim reads as a characteristic: a parameter, a condition, a value, a unit. The look is print: white sheet, near-black ink, ruled tables, condensed bold caps for section heads, and one signal vermilion. The signature element is the **pin configuration**, an 8-pin DIP drawn in HTML whose pins are the site's links.

The page refuses the category default (a name-and-tagline hero over a grid of project cards). Work and measured results lead. Decoration that isn't part of a real datasheet doesn't belong.

## Colors

Restrained strategy: tinted neutrals plus one accent.

- **Paper** `#fbfbf9` is the ground. **Ink** `#16171a` carries type, rules, and the chip body.
- **Ink-2** `#4a4d55` is secondary text (conditions, org names). **Ink-3** `#6b6f78` is footnotes and pin numbers only.
- **Hair** `#d9dadd` is row separators. **Wash** `#f0f0ec` fills table header rows and the block-diagram canvas.
- **Signal** `#d4380f` is reserved for part-number tags, the lead project's tag, pin hover, the "in progress" dot, tick markers, focus rings, and text selection. Never use it for large fields or body text.
- Dark theme swaps to paper `#121316`, ink `#ebeae6`, signal `#ff7448`. The roles are unchanged.

## Typography

One family: **Archivo Variable**, self-hosted, using both axes (weight 100–900, width 62–125%).

- **Name / project title:** width 125%, weight 800, tracking -0.03em, tight leading.
- **Section heads** (FEATURES, SELECTED WORK...): width 78%, weight 750, uppercase, +0.05em, on a 2px ink rule. These are the headings themselves, never labels stacked above another heading.
- **Table heads:** width 78%, weight 700, uppercase, on the wash fill between two ink rules.
- **Body:** width 100%, weight 400, 1.0625rem / 1.55. Prose is capped at 62–72ch.
- **Figures:** `tabular-nums` everywhere. Characteristic values are set at width 110% and weight 750, right-aligned.

## Layout

- The page column is 74rem max, with fluid gutters (`clamp(1.25rem, 4vw, 3rem)`).
- Home order: front page (title, Features | Applications, Pin configuration) → Selected work (selection table) → Measured characteristics → Revision history (experience) → Qualifications | General description → Contact footer.
- Project sheet order: header (crumb, title + part tag, summary, stack chips, repo link) → Features | Specifications → Functional block diagram → Detailed description (markdown) → Next datasheet.
- Breakpoints: 1000px (the front page stacks and the pins drop below Features), 860px (the selection table becomes stacked entries, the block diagram goes vertical, two-column pairs stack), 560px (revisions go to one column).

## Elevation & Depth

None. Everything is flat print. Hierarchy comes from rule weight: a 3px rule under the header band, 2px above section heads, 1px ink on table boundaries, hairlines between rows. There are no shadows.

## Shapes

Square corners everywhere (radius 0). The only curves are the DIP package notch, the pin-1 dot, and the status dot.

## Components

- **Header band:** a part tag (signal fill) joined to a name cell (1px ink outline). Nav in condensed caps, the revision stamp (`Rev. YYYY-MM`, set at build time), and the theme toggle.
- **Pin configuration:** a DIP-8 grid with labels, legs, and a chip body. Pins 1–4 run down the left and 5–8 up the right. On hover or focus, the leg fills with signal and the label turns signal. On load, the legs seat into the package (520ms, staggered 45ms, expo-out). This is the site's only entrance motion, and it is disabled under reduced motion.
- **Data table (`.dt`):** ruled, with no zebra striping. Row headers are weight 600 in body case; numbers are right-aligned.
- **Selection table:** Part | Project | Function | Status | Stack | Date. The lead row's part number gets the signal tag. An award replaces the status, in ink at weight 700.
- **Revision history:** period | role + org · place, with tick-list notes. The current entry's period is in signal.
- **Block diagram:** lettered stages (A, B, C...) as 1.5px-ruled boxes on the wash canvas, joined by masked arrows. The final stage takes a heavier 2.5px rule.
- **Tick list:** a 0.45rem × 2px signal dash as the bullet.
- **Spec chips:** a 1px hair outline with condensed 600 text. Used for stack tags only.

## Do's and Don'ts

- Do put a number and a condition on every claim, from the résumé or the repo.
- Do give each new project a two-letter part code (`XX-1`), a one-line function, features, specs, and a pipeline in its frontmatter.
- Do keep signal scarce. If more than a few signal elements share a viewport, remove some.
- Don't add cards, shadows, gradients, rounded corners, or icon tiles.
- Don't add a label above a heading. The datasheet section head is the heading.
- Don't use monospace for decoration. Use Archivo's tabular figures for data, and monospace only for inline code.
- Don't add a graduation year, a GPA, or a résumé download.
