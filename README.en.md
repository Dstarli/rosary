# Love Rosary

[Tiếng Việt](README.md) | **English**

A free Vietnamese and English Catholic prayer app developed by **David Hua**. Live site: https://loverosary.com

## Features

- Guided Rosary with all four sets of mysteries, illustrations and progress tracking.
- Divine Mercy Chaplet and a dedicated 3 PM prayer flow.
- Searchable Catholic prayer library and feast calendar with calendar export.
- Light and dark appearance, three text sizes, prayer history and statistics.
- Saved settings and same-day unfinished prayer progress on the device. No account required.
- Offline prayer support after the service worker has successfully cached the app.

## Run and build

```bash
npm ci
npm run build:web
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. The build compiles the app, copies bundled browser libraries and optimized images, and creates the informational pages.

## Deployment

Cloudflare Worker name: `rosary`. `wrangler.jsonc` runs `npm run build:web` and serves only `dist/`. Use `npx wrangler deploy` after reviewing and testing the source. Treat pushes to the connected production branch as potential deployments, including documentation changes.

Keep GitHub source synchronized with production. Do not deploy an older checkout over a newer manually published release. `/release.json` exposes a source fingerprint for deployment verification. Update service-worker cache versions when cached resources change.

## Source

`index.html` contains the interface and app logic; `prayers.js` contains prayer text. `assets/` and `vendor/` hold bundled resources. `scripts/build-web.mjs` creates `dist/`, and `service-worker.js` implements offline caching. Prayer data remains in browser storage; clearing site data removes it.

This update covers the web app. Native mobile packaging and store publication are separate release tasks. See [PRIVACY.md](PRIVACY.md) and [LICENSE](LICENSE).
