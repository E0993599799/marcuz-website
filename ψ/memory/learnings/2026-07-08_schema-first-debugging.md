---
pattern: "Schema-first debugging: always read data shape before consumer code in data-driven failures"
date: 2026-07-08
source: rrr: marcuz-website deployment fix
concepts: ["debugging", "data-integration", "schema", "methodology"]
---

# Schema-First Debugging

## The Problem

When debugging data-driven failures (templates, transformers, renderers), the natural instinct is to look at the consumer code first: "The page is broken, so let me check page.tsx." This leads to pattern-matching heuristics ("empty objects bad") that fix one symptom but leave cascading issues downstream.

In this session: the landing page had empty content objects. Fixing the import looked like victory. But the real problems were deeper — field name mismatches (primaryCTA vs primaryCta), property name mismatches (challenges vs problems), and data structure mismatches (string vs object).

## The Root Cause

The developer wrote the template against *assumed* data shapes, not the actual copy.json structure. After fixing the first issue, three more surfaced because the fix only addressed the import, not the schema compatibility.

## The Lesson

**Always read the data schema first — before looking at consumer code.**

1. **Open the source of truth** (copy.json, database schema, API contract)
2. **Map the expected shape** (fields, types, nesting levels)
3. **Compare against consumer** (template, transformer, renderer)
4. **Fix the gaps** (all of them, not just the first one)

This inverts the natural debugging flow but saves time because you're starting from facts, not assumptions.

## Evidence

| Approach | Deploy Attempts | Time to Fix |
|---|---|---|
| Code-first (before) | 2 failed | ~15 min (first fix incomplete) |
| Schema-first (after) | 1 success | ~3 min (systematic diff revealed all 4 issues) |

## When to Apply

- Template rendering failures ("Cannot read properties of undefined")
- Data transformation errors ("field not found", "unexpected type")
- API integration debugging
- Any error where the consumer is trying to access a field on an object

**Not applicable**: Logic bugs, algorithmic failures, or errors in the schema itself (those still go code-first).

## Anti-Pattern to Avoid

**DO NOT** fix the first error you see and declare victory. After a data-structure fix, rerun the full pipeline before celebrating.

## Related Lessons

- [[2026-07-06_ponytail-minimalist-plugin-architecture]] — architecture that reflects philosophy; data shape alignment is part of that story
- Build errors with line numbers are allies; use them to anchor your investigation

