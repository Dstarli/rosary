# Ứng Dụng Lần Hạt Mân Côi

Progressive Web App hỗ trợ cầu nguyện Mân Côi theo truyền thống Công Giáo.

## Tính Năng

- Tự động gợi ý mầu nhiệm theo ngày
- 3 chế độ giao diện: Light, Soft Dark, Deep Dark
- Song ngữ: Tiếng Việt & English
- Hoạt động offline
- Theo dõi tiến độ cầu nguyện
- 3 cỡ chữ linh hoạt

## Cấu Trúc File

```
rosary-app/
├── index.html
├── prayers.js
├── service-worker.js
├── manifest.json
├── icon-192.png
└── icon-512.png
```

## Deploy

**Netlify**

```bash
netlify deploy --prod --dir=.
```

**GitHub Pages**

```bash
git push -u origin main
```

**Local**

```bash
python -m http.server 8000
```

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

React 18, Tailwind CSS, Service Worker, LocalStorage

## License

MIT License

**Developer**: Hứa Hoàng Thiện