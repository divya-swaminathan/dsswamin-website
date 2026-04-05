---
title: "Tradeoffs: DynamoDB vs S3 vs data lake for config"
description: "Latency, operational cost, and blast radius when configuration sits on the request path for critical systems."
date: 2026-04-07
---

When configuration is **read on every request** or during **tight billing windows**, storage choice stops being “where we put JSON” and becomes a **latency, cost, and correctness** problem.

This post will walk through how I think about **S3 + Athena**, **DynamoDB**, **managed config services**, and **baked-in constants** — and why the right answer depends on **read pattern**, **change frequency**, and **blast radius**. Draft in progress.
