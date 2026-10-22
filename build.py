#!/usr/bin/env python3
"""Build the Bodilgodkendt study hub.

    python3 build.py

Concatenates the data modules into src/hub.html at the /*DATA*/ marker and
writes two things:

    dist/index.html      body-only, for publishing as a Claude Artifact
    dist/site/           the static website — this whole folder is what
                         GitHub Pages serves, and dist/site/index.html is
                         also the file to open locally

Order matters: the words modules must come before the rest, because hub.html's
script merges them at load time.
"""
import pathlib
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parent
SRC = ROOT / "src"
ASSETS = ROOT / "assets"
DIST = ROOT / "dist"
SITE = DIST / "site"

MODULES = [
    "words1.js",    # chapter 1 vocabulary  -> WORDS, TIERS, CATS
    "words2.js",    # chapter 2 vocabulary  -> WORDS_CH2
    "words3.js",    # chapter 3 vocabulary  -> WORDS_CH3
    "words4.js",    # chapter 4 vocabulary  -> WORDS_CH4
    "words5.js",    # chapter 5 vocabulary  -> WORDS_CH5
    "words6.js",    # chapter 6 vocabulary  -> WORDS_CH6
    "rules.js",     # grammar               -> RULE_GROUPS, RULES
    "verbs.js",     # conjugations          -> VERBS
    "listen.js",    # oral prompts          -> ORAL
    "practice.js",  # drills + writing      -> SETS, WRITING
    "modultest.js", # the test's own formats -> READ_T, WRITE_T, ORAL_T
]

# Copied verbatim into dist/site/. Every icon href in HEAD_EXTRA is relative,
# so the site works at any path — thenomadcode.github.io/bodilgodkendt/ or a
# custom domain root — with no rewriting.
SITE_ASSETS = ["icon.svg", "icon-32.png", "icon-180.png", "icon-192.png", "icon-512.png"]

DESCRIPTION = (
    "Danish to Go 3, chapters 1–6, cross-referenced with Studieskolen modul 3.3: "
    "the grammar rules, the verb conjugations, the vocabulary, the oral questions "
    "and drills, plus practice in the formats of Modultest 3 and a timed mock test — "
    "with progress tracking that stays in your own browser."
)

# Only the site build gets these. The Artifact build must not, because its
# runtime supplies its own favicon and a <link rel=manifest> would 404 there.
HEAD_EXTRA = f"""<meta name="description" content="{DESCRIPTION}">
<link rel="icon" type="image/svg+xml" href="icon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="icon-32.png">
<link rel="apple-touch-icon" href="icon-180.png">
<link rel="manifest" href="manifest.webmanifest">
<meta name="theme-color" content="#F1EFEA">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Bodilgodkendt">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
"""

# start_url and the icon srcs are relative for the same reason.
MANIFEST = """{
  "name": "Bodilgodkendt — dansk modul 3.3",
  "short_name": "Bodilgodkendt",
  "description": "Danish to Go 3 chapters 1–6 and Studieskolen modul 3.3 in one study hub.",
  "start_url": ".",
  "scope": ".",
  "display": "standalone",
  "orientation": "portrait-primary",
  "background_color": "#F1EFEA",
  "theme_color": "#C8102E",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
"""


def document(body: str, head_extra: str = "") -> str:
    """Wrap the body-only build into a complete HTML document."""
    head, rest = body.split("<style>", 1)
    style, tail = rest.split("</style>", 1)
    return (
        '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n'
        + head
        + head_extra
        + "<style>"
        + style
        + "</style>\n</head>\n<body>\n"
        + tail
        + "\n</body>\n</html>\n"
    )


def main() -> int:
    shell = (SRC / "hub.html").read_text(encoding="utf-8")
    if "/*DATA*/" not in shell:
        print("error: src/hub.html has lost its /*DATA*/ marker", file=sys.stderr)
        return 1

    missing = [a for a in SITE_ASSETS if not (ASSETS / a).is_file()]
    if missing:
        print(f"error: assets/ is missing {', '.join(missing)}", file=sys.stderr)
        return 1

    data = "\n".join((SRC / m).read_text(encoding="utf-8") for m in MODULES)
    body = shell.replace("/*DATA*/", data)

    DIST.mkdir(exist_ok=True)
    (DIST / "index.html").write_text(body, encoding="utf-8")

    # Rebuild dist/site from scratch so a renamed asset never lingers.
    if SITE.exists():
        shutil.rmtree(SITE)
    SITE.mkdir(parents=True)

    page = document(body, HEAD_EXTRA)
    (SITE / "index.html").write_text(page, encoding="utf-8")
    (SITE / "manifest.webmanifest").write_text(MANIFEST, encoding="utf-8")
    for asset in SITE_ASSETS:
        shutil.copy2(ASSETS / asset, SITE / asset)
    # Stop GitHub Pages running the page through Jekyll.
    (SITE / ".nojekyll").write_text("", encoding="utf-8")

    print(f"dist/index.html       {len(body):>7,} bytes   (Claude Artifact)")
    print(f"dist/site/index.html  {len(page):>7,} bytes   (website)")
    print(f"dist/site/            {len(SITE_ASSETS) + 2} supporting files")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
