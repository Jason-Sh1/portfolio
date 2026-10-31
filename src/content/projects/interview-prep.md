---
title: Interview Prep
code: IP-1
date: 2026-10-04
order: 1
function: Adaptive LeetCode plan, live voice mock interviews, feedback reports
summary: An AI-personalized platform for software engineering interview prep. A pattern-based practice track re-plans after every attempt, an AI interviewer talks with you while watching your code, and every mock ends in a feedback report that feeds back into the plan.
status: In progress
tags: [Next.js, React, TypeScript, PostgreSQL, Drizzle, LiveKit, Claude API]
github: https://github.com/Jason-Sh1/interview-prep
features:
  - Daily plan that re-plans after every attempt, using mastery gating, FSRS spaced repetition, interleaving, and target-company frequency
  - Live voice mock interviews with an AI interviewer that sees your code and test runs as you type
  - Feedback reports built from the code-edit timeline and both sides of the transcript, with a replay page
  - AI-assisted coding and debugging rounds, plus a weekly research job that keeps company interview data current
specs:
  - { label: Problem bank, value: "55 problems over 18 patterns" }
  - { label: Code execution, value: "Python (Pyodide) and JavaScript, in the browser" }
  - { label: Scheduling, value: "FSRS (ts-fsrs)" }
  - { label: Database, value: "PostgreSQL, embedded PGlite for local use" }
  - { label: Voice, value: "LiveKit agent, browser voice fallback" }
  - { label: Tests, value: "Vitest" }
pipeline:
  - { label: Goals + diagnostic, detail: "companies, date, level" }
  - { label: Adaptive planner, detail: "mastery, FSRS, interleaving" }
  - { label: Editor + runner, detail: "Monaco, Pyodide" }
  - { label: Voice mock, detail: "LiveKit, Claude" }
  - { label: Feedback report, detail: "timeline + transcript" }
---

Most interview prep is a fixed list of problems. This is a plan that changes every time you practice.

## How the plan adapts

Onboarding asks for target companies, interview date, level, language, and hours per week, then runs a short diagnostic (three problems and a 15-minute mock) so the plan starts at your real level instead of a guess. From there, the daily plan mixes new problems, FSRS reviews that are due, and drills pulled from past feedback. It re-plans after every attempt, so a missed day costs nothing.

## Mock interviews that see your code

The mock interviewer runs in the same editor you practice in. It watches code edits, snapshots, and test runs while you talk through your thinking, and the whole session is recorded as a timeline. The feedback report is built from that timeline, and its weak spots come back as items in your plan.

## Status

Phases 1 and 2 (the practice core and live voice mocks) are built. Phase 3, the feedback loop, has started.
