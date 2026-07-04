---
title: Clarity Cash
date: 2025-11-15
summary: Budgeting app that connects to real bank accounts through Plaid and separates the spending you can control from the spending you can't. Built with a team of four at Technica 2025.
tags: [FastAPI, Plaid, Firebase, React, TypeScript]
github: https://github.com/aforti1/clarity-cash
featured: true
---

Most budgeting apps show you *where* your money went. Clarity Cash answers a sharper question: given how you actually spend, what is truly unavoidable versus what you can change?

## How it works

- **Real transactions.** The app connects to bank accounts through the Plaid API and ingests actual transaction history — no manual entry.
- **Structural vs. flexible.** A custom category system maps every transaction into *structural* spending (rent, utilities, minimum payments) or *flexible* spending (the part you can act on).
- **Risk flags.** The scoring logic flags harmful patterns like recurring fees and cash advances.
- **Clarity score.** The backend computes summary metrics and a single score for the health of your spending over any period, served by a FastAPI API to a React frontend, with Firestore for storage.

## Built at Technica 2025

Clarity Cash was built by a team of four at Technica, the University of Maryland's hackathon. Working as a team on a 24-hour deadline meant contract-first development: we agreed on the API shape early so the backend scoring work and the frontend could move in parallel.
