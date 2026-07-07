# Oracle Session Metrics

Rule (parent CLAUDE.md §"Self-Evaluation Loop"): same friction 3 sessions → fix root cause, not another workaround.

| when | session | done | stuck | win | friction | error |
|---|---|---|---|---|---|---|
| 2026-07-08 01:35 | f36d0af3 | Deploy fix (4 schema issues), PR #1 opened, build success (7/7 pages) | none | Production build successful after schema alignment (28s build, all pages prerendered) | Schema assumptions in template, two-deploy diagnostic cycle, worktree context shift | Fixed content import but didn't check downstream schema first; led to 2nd failed deploy |
