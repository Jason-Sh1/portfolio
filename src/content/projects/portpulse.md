---
title: PortPulse
code: PP-1
date: 2026-04-12
order: 4
function: Supply-chain risk dashboard on live ship-traffic data
summary: A full-stack supply-chain early-warning dashboard that streams live ship-position data, scores port congestion, forecasts shipping prices, and turns anomalies into plain-English alerts. Built in 36 hours at Bitcamp 2026.
status: Hackathon build
award: 4th Place, Bitcamp (Advanced Data Science track)
tags: [Python, FastAPI, XGBoost, pandas, WebSockets, React, Plotly, Ollama]
github: https://github.com/Jason-Sh1/Bitcamp-2026
features:
  - Streams live AIS vessel messages over WebSocket and filters them to major port regions
  - Computes per-port congestion metrics in a pandas pipeline
  - XGBoost price forecasting and Isolation Forest anomaly detection behind FastAPI routes
  - A local LLM (llama3 via Ollama) writes anomalies up as alerts a logistics manager can act on
specs:
  - { label: Data source, value: "AIS stream (aisstream.io)" }
  - { label: Models, value: "XGBoost, Isolation Forest" }
  - { label: LLM, value: "llama3 via Ollama, local" }
  - { label: Build time, value: "36 hours" }
pipeline:
  - { label: AIS stream, detail: "WebSocket" }
  - { label: Congestion, detail: "pandas" }
  - { label: Forecast + anomalies, detail: "XGBoost, Isolation Forest" }
  - { label: Alerts, detail: "Ollama llama3" }
  - { label: Dashboard, detail: "FastAPI, React, Plotly" }
---

Shipping cost spikes follow port congestion, but the signal is buried in raw ship-position data that updates every few seconds. PortPulse turns that stream into an early warning.

## Making live data trustworthy on a deadline

The AIS stream drops out, ships report bad coordinates, and a model trained on clean history meets messy reality fast. Most of the pipeline code exists to handle exactly that.
