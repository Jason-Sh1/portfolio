---
title: PortPulse
date: 2026-04-12
summary: Supply-chain early-warning dashboard that processes live ship-traffic data to detect port congestion and predict shipping cost spikes. Built at Bitcamp 2026.
tags: [Python, XGBoost, FastAPI, WebSockets, React]
github: https://github.com/Jason-Sh1/Bitcamp-2026
featured: true
---

Shipping cost spikes follow port congestion, but the signal is buried in raw ship-position data that updates every few seconds. PortPulse turns that stream into an early warning.

## How it works

- **Live ingestion.** A WebSocket client streams AIS (Automatic Identification System) messages from ships worldwide via aisstream.io and filters them to major port regions.
- **Congestion scoring.** A Pandas pipeline aggregates ship positions into a congestion score per port — how many vessels are waiting, and for how long.
- **Prediction.** An XGBoost model trained on congestion history predicts shipping cost spikes before they land.
- **Plain-English alerts.** A local LLM (llama3 via Ollama) converts model output into alerts a logistics manager can act on, no charts required.
- **Dashboard.** A FastAPI backend serves the scores, predictions, and live ship positions to a React + Plotly frontend.

## Built at Bitcamp 2026

PortPulse was built in 36 hours at Bitcamp, the University of Maryland's hackathon. The hard part was making live data trustworthy on a deadline: the AIS stream drops out, ships report bad coordinates, and a model trained on clean history meets messy reality fast. Most of the pipeline code exists to handle exactly that.
