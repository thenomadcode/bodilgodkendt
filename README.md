# Bodilgodkendt

A single-page study hub for Danish **modul 3.3** — the grammar rules, the verb
conjugations, the vocabulary, the oral exam questions and a set of drills, all in
one page that keeps track of what you have covered.

**→ https://thenomadcode.github.io/bodilgodkendt/**

Six tabs — Status, Grammatik, Verber, Ord, Lyt & tal, Øv dig — with a progress
bar on each, a global readiness bar in the nav, and a light/dark switch.
Everything you tick is stored in your own browser's `localStorage`; nothing is
sent anywhere and there is no backend.

There is also a **trainer**: twelve questions a round, built out of the same
data the notebook shows. Danish to English on four buttons, English to Danish
typed, listen and pick the meaning, the fill-in-the-blank drills, and verb
forms. Whatever you get wrong goes on a list and comes back. Get a word or a
verb right twice and it ticks itself off in the notebook.

Danish is spoken by your own browser's speech engine — no service, no key,
nothing sent anywhere. Where a device has no Danish voice installed, the
speaker buttons do not appear and the listening questions are not asked.

Add it to your phone's home screen and it opens fullscreen like an app.

## Build

```bash
python3 build.py
```

No dependencies — standard library only. It writes:

| Output | What it is |
|---|---|
| `dist/site/` | the website. This whole folder is what GitHub Pages serves, and `dist/site/index.html` is the file to open locally. |
| `dist/index.html` | body-only, for publishing the same page as a Claude Artifact. Not a valid standalone document — it has no `<head>`. |

To preview, serve it rather than opening the file directly:

```bash
python3 -m http.server -d dist/site
```

`localStorage` is blocked on `file://` in Chrome, so over `file://` the progress
tracking silently does nothing.

## Deploying

Pushing to `main` is the whole deploy. `.github/workflows/pages.yml` runs
`build.py` and publishes `dist/site/` to GitHub Pages, so build output is never
committed. Nothing to remember beyond `git push`.

## Layout

```
src/hub.html      markup, CSS and all page logic. Contains a /*DATA*/ marker
                  that build.py replaces with the concatenated data modules.
src/words1.js     chapter 1 vocabulary   -> WORDS, TIERS, CATS
src/words2.js     chapter 2 vocabulary   -> WORDS_CH2
src/rules.js      grammar                -> RULE_GROUPS, RULES
src/verbs.js      conjugations           -> VERBS
src/listen.js     oral exam prompts      -> ORAL
src/practice.js   drills + writing tasks -> SETS, WRITING
assets/           app icons, generated once from assets/icon-square.svg
dist/             build output — not tracked, do not edit by hand
```

`CLAUDE.md` carries the detail: data shapes, how progress is keyed, and the
rules to follow when editing.

## About the content

These are personal study notes written up from a course: my own summaries,
tier judgements and drills. The textbook and the class handouts they were made
from are **not** in this repo and are not redistributed here. Page numbers
refer to the printed book so you can look things up in your own copy.

Danish forms are checked before they ship — the verb sheet was diffed against
the source programmatically, the rest reviewed against Retskrivningsordbogen.
Corrections are welcome; open an issue.
