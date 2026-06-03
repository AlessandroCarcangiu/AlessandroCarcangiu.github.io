# AlessandroCarcangiu.github.io

Personal website of **Alessandro Carcangiu** — built with [Eleventy](https://www.11ty.dev/) (11ty), a static site generator. No client framework, fast to load, easy to maintain.

## How it works

- Pages live in `src/` and share a single layout (`src/_includes/base.njk`), so the header, nav, and footer are written once.
- Publications are data, not markup: edit `src/_data/publications.yaml` and the publications page regenerates automatically.
- Extra standalone pages and root files (robots, sitemap, …) live in `extra/` and are copied as-is.

## Develop locally

```bash
npm install
npm run serve   # live preview at http://localhost:8080
npm run build   # output to _site/
```

## Deploy

Pushing to `main` triggers a GitHub Actions workflow that builds the site and publishes `_site/` to GitHub Pages. No manual build needed.

## Add a publication

Append an entry to `src/_data/publications.yaml`:

```yaml
- year: "2026"
  authors: ["Alessandro Carcangiu", "..."]
  title: "Paper title"
  tags: ["Proceedings Article"]
  venue: "In: <em>Venue</em>, 2026"
  links:
    - { href: "/data/paper.pdf", label: "PDF" }
    - { href: "https://doi.org/...", label: "DOI" }
  bibtex: |
    @inproceedings{key, ... }
```

[AlessandroCarcangiu.github.io](https://AlessandroCarcangiu.github.io)
