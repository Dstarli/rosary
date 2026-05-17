# Ứng Dụng Lần Hạt Mân Côi

Progressive Web App hỗ trợ cầu nguyện Mân Côi và Chuỗi Lòng Thương Xót theo truyền thống Công Giáo. Repo này cũng đã có project iOS/Android bằng Capacitor, dùng cùng một app web làm source chính.

## Tính Năng

- Tự động gợi ý mầu nhiệm theo ngày
- 3 chế độ giao diện: Light, Soft Dark, Deep Dark
- Song ngữ: Tiếng Việt & English
- Hoạt động offline
- Theo dõi tiến độ cầu nguyện
- Tự lưu tiến trình đang cầu nguyện để có thể đóng app rồi mở lại
- 3 cỡ chữ linh hoạt

## Cấu Trúc File

```
rosary-app/
├── index.html
├── prayers.js
├── service-worker.js
├── manifest.json
├── icon-192.png
├── icon-512.png
├── vendor/
├── assets/
├── android/
├── ios/
├── capacitor.config.json
├── package.json
└── scripts/build-web.mjs
```

## Local Setup

```bash
npm install
npm run build:web
python3 -m http.server 8000 --directory dist
```

Open:

```text
http://127.0.0.1:8000
```

## Deploy

The deployable web artifact is `dist/`, not the repo root.

**Cloudflare Pages / Workers Assets**

```bash
npm run build:web
npx wrangler deploy
```

**Netlify**

```bash
npm run build:web
netlify deploy --prod --dir=dist
```

**GitHub Pages**

```bash
git push -u origin main
```

## iOS / Android

```bash
npm run cap:sync
npm run android
npm run ios
```

Android release build requires Java JDK and Android Studio/SDK.

iOS release build requires macOS, Xcode, and CocoaPods.

## Cài Đặt PWA

- **Android**: Menu > “Thêm vào màn hình chính”
- **iOS**: Share > “Thêm vào Màn hình chính”
- **Desktop**: Click icon ⊕

## Tùy Chỉnh

**Màu sắc**: Sửa `themeConfig` trong `index.html`

**Kinh nguyện**: Sửa `prayersData` trong `prayers.js`

## Troubleshooting

**Không offline**: Kiểm tra Service Worker trong DevTools

**Không cài PWA**: Cần HTTPS và icons hợp lệ

**Xóa cache**:

```javascript
caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
```

## Tech Stack

React 18, Tailwind browser build, Service Worker, LocalStorage, Capacitor.

The browser libraries are vendored under `vendor/` so the app can boot offline and inside native shells without depending on CDN availability.

## License

MIT License

See `PRIVACY.md` and `NOTICE.md` before public app-store release.

**Developer**: Hứa Hoàng Thiện
