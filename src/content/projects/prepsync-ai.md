---
title: PrepSync AI
code: PS-1
date: 2026-04-05
order: 5
function: Chained LLM workflow from résumé gap analysis to interview coaching
summary: A chained LLM workflow on Amazon Bedrock that scores a résumé against a job description, recommends a project to close the gap, rewrites the résumé, builds a prep schedule, and coaches the student through interview questions.
status: Hackathon build
award: 1st Place, AWS GenAI Innovation Hackathon
tags: [Amazon Bedrock, PartyRock, Prompt chaining]
features:
  - Scores a résumé against a job description and names the gaps
  - Recommends one gap-closing project, then rewrites the résumé and builds a prep schedule
  - A two-mode interview coach that checks in on the student's anxiety, then asks progressively harder questions about what they built
  - Scoped with Amazon's Working Backwards PR/FAQ before building started
specs:
  - { label: Platform, value: "Amazon Bedrock (PartyRock)" }
  - { label: Workflow, value: "Multi-stage, chained" }
  - { label: Planning method, value: "Working Backwards PR/FAQ" }
pipeline:
  - { label: Résumé + job description }
  - { label: Gap score }
  - { label: Project pick }
  - { label: Résumé rewrite }
  - { label: Prep plan + coach }
---

Students get told to "close the gap" between their résumé and a job, with no help deciding what that means this week. PrepSync turns that advice into a plan.

## Working backwards

The press release and FAQ came first, following Amazon's Working Backwards method, and every feature that didn't serve the student in that document was cut. What survived was a single chain: diagnose, prescribe one project, rewrite, schedule, rehearse.

## The coach

The interview coach runs in two modes. It starts by checking in on how the student feels about the interview, then moves to questions about what they actually built, getting harder as the answers get stronger.
