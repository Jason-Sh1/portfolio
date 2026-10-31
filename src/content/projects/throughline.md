---
title: Throughline
code: TL-1
date: 2026-10-25
order: 2
function: Clusters news coverage across outlets into source-cited daily editions
summary: An AI news-understanding app. Throughline groups coverage of each news event across hundreds of outlets and is being built to give every story a short, source-cited briefing, published as finite daily editions.
status: In progress
tags: [Python, Next.js, TypeScript, Supabase, pgvector, HDBSCAN]
github: https://github.com/Jason-Sh1/Throughline
features:
  - Ingests 281 curated RSS feeds plus the GDELT and Guardian APIs, with conditional GET, per-host rate limits, and robots.txt respected
  - Near-duplicate detection with URL canonicalization, title hashing, and SimHash, so republished wire stories count once
  - Online clustering on local sentence embeddings, plus a nightly HDBSCAN pass that merges and splits clusters
  - Outlets tagged with AllSides media-bias ratings so each story's coverage spread is visible
specs:
  - { label: Feeds, value: "281, spectrum-balanced" }
  - { label: Embeddings, value: "all-MiniLM-L6-v2, 384-dim, local" }
  - { label: Vector index, value: "pgvector HNSW on Supabase Postgres" }
  - { label: Cluster threshold, value: "0.66 cosine, tuned by a 12-config sweep" }
  - { label: Retention, value: "Raw text purged after 14 days" }
pipeline:
  - { label: Fetch, detail: "RSS, GDELT, Guardian" }
  - { label: Dedupe, detail: "canonical URL, SimHash" }
  - { label: Embed, detail: "MiniLM, pgvector" }
  - { label: Cluster, detail: "online + nightly HDBSCAN" }
  - { label: Briefing, detail: "cited LLM synthesis (next)" }
---

A single news event shows up as dozens of near-identical articles from outlets across the spectrum. Throughline's job is to treat that as one story, and to make the summary of it accountable to its sources.

## What's built

The ingestion and clustering pipeline is done: fetchers for RSS, GDELT, and the Guardian; deduplication that tracks how many outlets republished a story; local embeddings stored in pgvector; and clustering tuned against a live 72-hour window (threshold raised from 0.62 to 0.66 after a 12-configuration sweep). CI runs lint, tests, migrations, and row-level security tests on every push.

## What's next

LLM extraction and synthesis, with a hard rule: any briefing sentence without a valid source citation is dropped. After that, a verification pass and an evaluation suite (faithfulness, citation precision and recall, clustering F1) that gates CI.
