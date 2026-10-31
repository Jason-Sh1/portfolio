# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, and engineers screening Jason Shi for software engineering and applied-AI internships and new-grad roles. They usually arrive from a résumé link, LinkedIn, or GitHub, give the site under a minute on a first pass, and want to answer: what has he actually built, does it work, and is he worth an interview. A second audience is peers (hackathon teammates, the Claude Builder Club community) who look him up.

## Product Purpose

A personal portfolio that proves Jason builds real, working software end to end, especially full-stack systems that use AI. Success: a screener sees shipped, measured work within the first viewport and clicks through to a project, a repo, or email.

## Positioning

A CS student at the University of Maryland whose work is already in production: a full-stack tracker at Leidos used by 30+ people (replacing a 446-formula Excel workbook) that runs in a NIST 800-171 Azure environment, backed by 1,600+ tests and a return offer. Alongside that, AI products he designed and built himself (an adaptive interview-prep platform and an AI news-clustering app), plus wins at hackathons. The angle is SWE + AI: full-stack engineering that uses AI deliberately, with tests, access control, and security review.

## Operating Context

- Static Astro site deployed on Vercel at https://jasonshi.vercel.app; pushing to `main` deploys.
- Projects are markdown files in `src/content/projects/` with a zod-validated schema; personal info lives in `src/data/profile.ts`.
- The source of truth for facts is Jason's master résumé (private `recruiting` repo, `resumes/masters/`) and his public GitHub (github.com/Jason-Sh1).

## Capabilities and Constraints

- No graduation year and no GPA anywhere on the site, by design.
- No downloadable résumé on the site (removed deliberately).
- Featured projects: Interview Prep, Throughline, PortPulse, Agent Labs, PrepSync AI, Clarity Cash. Jarvis is private and stays off the site.
- Throughline is an in-progress MVP; describe it as in progress.
- Keep almost no client-side JavaScript; content must read fine without JS.

## Brand Commitments

- Name: Jason Shi. Contact: jshi1213@umd.edu, linkedin.com/in/shi-j, github.com/Jason-Sh1.
- Voice: plain, specific, measured. Use real numbers from the résumé, no hype adjectives, first person in the About section.

## Evidence on Hand

- Leidos (May 2026 to present): full-stack portfolio tracker (FastAPI, async SQLAlchemy, React, PostgreSQL), 30+ users including PMO leadership, replaced a 446-formula Excel workbook; 8 email workflows, 51% fewer reminder emails; NIST 800-171 Azure with Entra SSO; fixed an email HTML-injection flaw; 67% fewer DB queries per request, 80% faster desktop startup; 1,600+ tests in GitLab CI; return offer, extended part-time.
- Claude Builder Club at UMD: co-founder and Director of External Affairs; 1,500+ members, meetings up to 250+; hackathons up to 380+ participants; judged 50+ AI/ML projects; brought in an Anthropic engineer for an MCP webinar.
- Campus Coders Crew: SWE then technical lead of 6 developers; Thai Student Association site for 700+ members.
- Honors: 1st Place AWS GenAI Innovation Hackathon (PrepSync AI), 2nd Place Google Build With AI, 4th Place Bitcamp Advanced Data Science track (PortPulse), Presidential Scholar, Humana Early ID Program, Databricks Brickfest.
- Smithsonian National Air and Space Museum: Museum Aid, 2023 to 2026.
- Repos: interview-prep, Throughline, agent-labs, Bitcamp-2026 (PortPulse), aforti1/clarity-cash.
- Absent: no testimonials, no project screenshots in the repo, no live demo URLs. Do not invent any of these.

## Product Principles

1. Show the work before describing the person: shipped projects and measured results come first.
2. Every claim is specific and checkable: a number, a repo, or a named result.
3. Updating is cheap: adding a project means adding one markdown file.
4. Fast and quiet to load: static pages, self-hosted fonts, near-zero JS.

## Accessibility & Inclusion

WCAG 2.2 AA: sufficient contrast in both themes, visible focus, reduced-motion respected, semantic headings.
