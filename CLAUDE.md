# CLAUDE.md — design-taste-course

Guidance for Claude Code (and other agents) working in this repo.

## What this is

An interactive, **show-don't-tell** course that teaches design taste and vocabulary: how to spot
AI-generated "slop", name styles and patterns, and fix them. Each lesson is one self-contained HTML
page opened in a browser. The design rules come from the MIT-licensed
[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill); this repo turns them into things a
learner can see and practice.

This repo is the **single source of truth**. It is also the private authoring workspace, so it holds
both public course files and gitignored author notes.

## Public vs private (the one rule that matters)

**Never commit private files.** They are listed in `.gitignore`:
`MISSION.md`, `NOTES.md`, `COURSE.md`, `RESOURCES.md`, `PUBLIC-REDBOOK.md`, `learning-records/`,
`.agents/` (the taste-skill corpus), `skills-lock.json`.

Public (tracked): `lessons/`, `assets/`, `reference/`, `GLOSSARY.md`, `README.md`, `SYLLABUS.md`,
`LICENSE`. After staging, always check `git ls-files` shows no private paths.

## Structure

```
lessons/      one HTML file per lesson: NNNN-slug.html (0001, 0002, …)
assets/       shared design system + widgets (edit once, every lesson updates)
reference/    printable cheat sheets, grow across lessons
GLOSSARY.md   bilingual (English · 中文) term glossary
SYLLABUS.md   the 16-lesson plan
COURSE.md     full lesson specs (private)         MISSION.md    why she's learning (private)
NOTES.md      teaching prefs + workflow (private) learning-records/  progress (private)
```

## Authoring a lesson (follow the teach-skill model)

- **One tangible win per lesson**, tied to the mission. Short enough to finish quickly.
- **Show, don't tell** is mandatory: render the idea live (interactive/compare/simulate), don't
  describe it in prose. This is the explicit requirement, not a nicety.
- **Reuse assets first.** Read `assets/` before writing anything. New reusable code becomes a
  component in `assets/`, never inlined for one lesson.
- Every lesson: recommends a **primary source**, links its **reference doc**, and reminds the learner
  to ask the agent follow-ups.
- Lessons ≥ 02 open with a 3-question **recall quiz** from earlier lessons (`quiz.js`).
- Add **glossary** terms bilingually; add a **learning record** only after the user demonstrates
  understanding (not just coverage).

## Shared asset APIs (reuse, don't reinvent)

- **`assets/course.css`** — the design system + all widget styles. Tokens are CSS vars
  (`--accent` = vermilion `#CC3A22`, warm neutrals, `--font-display` Cabinet Grotesk,
  `--font-body` Satoshi). Chrome classes: `.page .column .wide .masthead .win .prose .note
  .card .endmatter .btn`.
- **`assets/compare.js`** — `TellHunt.mount(rootSel, REGISTRY, {scoreSelector, revealSelector})`.
  Mark offending elements `data-tell="key"`; registry entry
  `{ n, mode:"shown"|"hunt", title, rule, fix, source }`.
- **`assets/quiz.js`** — `Quiz.mount(sel, [{ q, options, answer, why }])`. Options shuffle; keep
  them close in length so formatting never leaks the answer.
- **`assets/dials.js`** — `DialSim.mount({stage, controls, presets, readout, replay})`,
  `DialSim.renderMini(el, {v,m,d})`, `DialSim.guessGame({container, rounds})`. The `.dstage`
  responds to `data-v/-m/-d` bands and `--v/--m/--d`.

## Eat the dog food (design self-consistency)

The lessons must obey the rules they teach. Before shipping any page:

- **No em-dash (`—`/`–`) in English visible copy.** Use period/comma/colon/parentheses. (Chinese
  破折号 in Chinese copy is fine — that's context, per Lesson 13.) The only allowed `—` are
  intentional tell demos.
- **One accent** (vermilion), warm neutrals, **off-black not `#000`**.
- Cabinet Grotesk (display) + Satoshi (body) + mono, all via `course.css`.
- 68ch measure, generous rhythm, print-friendly, honors `prefers-reduced-motion`.

## Verify before "done"

- Preview with the `.claude/launch.json` server `course-static` (port 4599), or
  `python3 -m http.server`. Open the lesson and **actually drive the interactions** (pins, quiz,
  dials) — confirm they work; don't claim done from static reading.
- Source links in lessons point to upstream:
  `https://github.com/Leonxlnx/taste-skill/blob/main/skills/taste-skill/SKILL.md`
  (upstream folder `taste-skill` == local install name `design-taste-frontend`).

## Commit / push

- Stage **public files only**; verify no private path in `git ls-files`.
- End commit messages with:
  `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
- Push to `origin main`. One lesson (or one coherent fix) per commit.
