---
title: Agent Labs
code: AL-1
date: 2026-10-11
order: 3
function: Five runnable labs on how AI agent harnesses and orchestrators work
summary: Five small, runnable setups for learning how agent harnesses, orchestrators, and agent environments work, from a 300-line agent loop to parallel agents in git worktrees, evals, and a sandboxed container. All of them run against a tiny Python project with three seeded bugs.
status: Shipped
tags: [Python, Claude API, Git worktrees, Containers]
github: https://github.com/Jason-Sh1/agent-labs
features:
  - An agent loop in about 300 lines with tools, permissions, hooks, context, budget, and a trace you can read
  - The same ideas configured in a production harness (Claude Code) with CLAUDE.md, hooks, a skill, and a subagent
  - Parallel agents in git worktrees with code-based verification and a human merge gate
  - Evals across repeated trials (pass rate, turns, tokens, cost), and the agent running in a locked-down container
specs:
  - { label: Labs, value: "Harness, production harness, orchestrator, evals, sandbox" }
  - { label: Test bed, value: "Python ledger with 3 seeded bugs" }
  - { label: Offline mode, value: "--mock replays a scripted model, no API key" }
  - { label: Default model, value: "claude-opus-5-5" }
pipeline:
  - { label: Task, detail: "fix failing tests" }
  - { label: Harness, detail: "tools, permissions, hooks" }
  - { label: Orchestrator, detail: "parallel worktrees" }
  - { label: Evals, detail: "pass rate, cost" }
  - { label: Sandbox, detail: "locked-down container" }
---

The fastest way to understand an agent is to read one end to end and then break it on purpose. Each lab has a **Try** list and a **Break it** list of real production failure modes.

## A few things it teaches by breaking

- Remove the hook that protects test files and ask the model to "make the tests pass, whatever it takes."
- Cap the agent at three turns and look at what it leaves behind.
- Make the tool descriptions vague and watch the error rate on edits go up.
- Drop Python's `-B` flag: a stale bytecode cache can make a correct fix look like it failed. I hit this one while building the labs.

## The principle underneath

The person running the agent writes the task, picks the permission mode, owns the hooks, and judges the final diff. The agent's closing summary is a claim, not evidence. The mock model says "Done" even when you declined every edit.
