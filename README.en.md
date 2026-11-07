# Rosary & Divine Mercy Prayer App

[Tiếng Việt](README.md) | **English**

A bilingual Catholic prayer web app developed by **David Hua**, with guided Rosary and Divine Mercy Chaplet prayers.

## Features

- **Guided Rosary:** move through the prayers, count repeated prayers, and follow decade and session progress.
- **Four sets of mysteries:** Joyful, Sorrowful, Glorious, and Luminous, with illustrations and a suggested set based on the current day. You can also choose a set manually.
- **Divine Mercy Chaplet:** regular and 3 p.m. prayer sequences.
- **Vietnamese and English:** switch the interface and prayer text.
- **Reading options:** light or dark appearance and three text sizes.
- **Prayer statistics:** completed-session history, total completions, daily streaks, elapsed time, and duration statistics.
- **Sharing:** use the device's share dialog, where supported, or copy a prayer summary.

## Run locally

This committed version is a static website. It does not require an npm install or a build step.

```bash
git clone https://github.com/Dstarli/rosary.git
cd rosary
python3 -m http.server 8000
```

Open **http://localhost:8000** in a modern browser. An internet connection is needed to load the external browser libraries and fonts on the first visit. Serve the files over HTTP rather than opening `index.html` directly.

## Using the app

1. Select Rosary or Divine Mercy. For the Rosary, keep the suggested mysteries or choose another set; for Divine Mercy, select the regular or 3 p.m. sequence.
2. Read the displayed prayer and use Next to count repetitions and advance. Previous lets you go back.
3. Use the prayer list, language, appearance, and text-size controls as needed.
4. Complete the sequence to record the session, then view the statistics or share a summary.

Completed sessions and associated preferences are stored in this browser's `localStorage` under `rosaryData`. There is no account or cross-device synchronization. The current unfinished prayer position is not saved when the page reloads. In this version, preference changes persist only after a saved record exists, which is created when a session is completed.

## Repository structure

| File or directory | Purpose |
| --- | --- |
| [index.html](index.html) | React interface, prayer sequencing, mystery selection, statistics, and styles |
| [prayers.js](prayers.js) | Vietnamese and English prayer text |
| [assets/](assets/) | Illustrations for the twenty Rosary mysteries |
| [manifest.json](manifest.json) | Web-app manifest and installation metadata |
| [service-worker.js](service-worker.js) | Static and external-resource caching |
| [wrangler.jsonc](wrangler.jsonc) | Cloudflare static-assets configuration |

The interface uses React 18, ReactDOM, Babel Standalone, Tailwind's browser script, and Google Fonts loaded from external services.

## Hosting and PWA status

Serve the static files over HTTPS at the root of a dedicated site. The included Cloudflare configuration points to the repository root. Other static hosts can serve the same files. GitHub Pages needs separate repository hosting configuration; pushing a commit alone does not enable it.

The repository contains a manifest and service worker, but **offline use and installation are not fully ready in the committed version**:

- Both reference `icon-192.png` and `icon-512.png`, which are absent from the repository. The missing files can prevent service-worker installation because the static cache uses `cache.addAll`.
- Service-worker registration uses the absolute path `/service-worker.js`. Hosting under a subpath such as `/rosary/` requires adapting that path.
- Browser libraries and fonts come from external services; offline availability depends on successful loading and caching.

After resolving those deployment requirements, use a supported browser's installation or Add to Home Screen option when available. Verify offline operation on the target browser before relying on it.

## Customization

Edit the prayer text in `prayers.js`. Mystery descriptions, weekday selection, prayer sequences, and interface styling are in `index.html`. Update the cache version in `service-worker.js` when changing cached resources.

## Developer and licensing

**Developer: David Hua**

The earlier README named the MIT License, but this repository does not currently include a license file with its terms.
