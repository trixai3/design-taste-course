# AI Design Taste — a hands-on course

Everyone can *make* things with AI now: websites, posters, slides, apps. Most of it comes out looking
"a bit AI." This course teaches you to **see why, name it, and fix it** — to build design taste and
the vocabulary that comes with it.

It is not a theory dump. Each lesson is a single self-contained HTML page you open in your browser,
built to *show* the idea, not just tell it: side-by-side "generated vs designed" pages you can click
to reveal each tell, a live simulator you drag to feel how a page changes, quick recall quizzes, and
printable cheat sheets.

> Built for people who use AI tools and want their output to stop looking generic. No design
> background needed.

## Start here

1. Clone the repo:
   ```bash
   git clone https://github.com/trixai3/design-taste-course.git
   cd design-taste-course
   ```
2. Open the first lesson in a browser (needs internet for web fonts and placeholder images):
   ```bash
   open lessons/0001-the-tell.html      # macOS
   # or just double-click the file
   ```
3. Work through the lessons in order. Keep the [`reference/`](reference/) cheat sheets and
   [`GLOSSARY.md`](GLOSSARY.md) around — they are the parts you will come back to.

That's it — no build step and no server. The lessons are plain static HTML/CSS/JS (no `fetch`, no
modules), so opening the file directly works. Fonts and placeholder images load over the internet.

## What's inside

| | |
|---|---|
| [`lessons/`](lessons/) | The lessons. Self-contained interactive HTML. |
| [`reference/`](reference/) | Printable cheat sheets (the AI-tells taxonomy, the three dials). |
| [`assets/`](assets/) | Shared design system + the interactive widgets (compare, quiz, dials). |
| [`GLOSSARY.md`](GLOSSARY.md) | Bilingual (English · 中文) glossary of every term the course uses. |
| [`SYLLABUS.md`](SYLLABUS.md) | All 16 lessons and what each one teaches. |

**Status:** lessons 01–02 are live; 03–16 are being written (see [`SYLLABUS.md`](SYLLABUS.md)).
Learning in public, one lesson at a time.

## Built on `taste-skill` (credit)

The design rules this course teaches come from **[Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)**
(MIT), an excellent anti-slop skill for AI agents. This course is a *learning layer* on top of it:
the lessons cite its sections (e.g. `design-taste-frontend §9`) and turn its rules into things you
can see and practice. To read the source rules the lessons reference, install the skill:

```bash
npx skills add Leonxlnx/taste-skill
```

## License

MIT — see [LICENSE](LICENSE). The lessons, code, and glossary here are original teaching material;
they build on the MIT-licensed `taste-skill` and credit it above.
