---
title: Clarity Cash
code: CC-1
date: 2025-11-15
order: 6
function: Budgeting on real bank data that separates fixed from flexible spending
summary: A financial-literacy web app that connects to real bank accounts through Plaid and separates the spending you can control from the spending you can't. Built by a team of four in 24 hours at Technica 2025.
status: Hackathon build
team: Team of 4
tags: [React, TypeScript, FastAPI, Plaid API, Gemini API, Firebase]
github: https://github.com/aforti1/clarity-cash
features:
  - Connects to bank accounts through the Plaid API and ingests real transaction history, no manual entry
  - Maps every transaction to structural spending (rent, utilities, minimum payments) or flexible spending
  - Flags harmful patterns such as recurring fees and cash advances
  - Computes a single clarity score for any period, served by FastAPI to a React frontend
specs:
  - { label: Bank data, value: "Plaid API" }
  - { label: Storage, value: "Firestore" }
  - { label: Build time, value: "24 hours" }
  - { label: Team, value: "4" }
pipeline:
  - { label: Bank link, detail: "Plaid" }
  - { label: Categorize, detail: "structural vs flexible" }
  - { label: Risk flags }
  - { label: Clarity score, detail: "FastAPI" }
  - { label: Dashboard, detail: "React, TypeScript" }
---

Most budgeting apps show you where your money went. Clarity Cash answers a sharper question: given how you actually spend, what is truly unavoidable, and what can you change?

## Contract-first on a 24-hour clock

With four people and one day, we agreed on the API shape first, so the backend scoring and the frontend could move in parallel without waiting on each other.
