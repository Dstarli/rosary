# Love Rosary — Ứng dụng cầu nguyện

**Tiếng Việt** | [English](README.en.md)

Ứng dụng cầu nguyện Công giáo miễn phí bằng tiếng Việt và tiếng Anh, do **David Hua** phát triển. Website: https://loverosary.com

## Tính năng

- Hướng dẫn lần hạt Mân Côi với bốn bộ mầu nhiệm, hình minh họa và tiến trình từng bước.
- Chuỗi Lòng Thương Xót và trình tự cầu nguyện lúc 3 giờ chiều.
- Thư viện kinh nguyện có tìm kiếm; lịch lễ Công giáo có xuất lịch nhắc.
- Giao diện sáng/tối, ba cỡ chữ, lịch sử và thống kê cầu nguyện.
- Lưu thiết lập và tiến trình đang đọc trong cùng ngày trên thiết bị, không cần tài khoản.
- Hỗ trợ đọc kinh ngoại tuyến sau khi ứng dụng đã được lưu vào bộ nhớ đệm thành công.

## Chạy và tạo bản phát hành

```bash
npm ci
npm run build:web
python3 -m http.server 8000 --directory dist
```

Mở http://localhost:8000. Bước build biên dịch ứng dụng, sao chép thư viện và hình ảnh đã tối ưu, đồng thời tạo các trang giới thiệu nội dung.

## Triển khai

Cloudflare Worker có tên `rosary`. Cấu hình `wrangler.jsonc` chạy `npm run build:web` và chỉ phục vụ thư mục `dist/`. Sau khi kiểm tra mã nguồn và bản build, dùng `npx wrangler deploy` để triển khai. Mọi lần đẩy lên nhánh production được kết nối đều có thể kích hoạt triển khai, kể cả khi chỉ sửa tài liệu.

Luôn đồng bộ mã nguồn GitHub với bản đang chạy. Không triển khai kho mã cũ đè lên bản mới đã phát hành thủ công. Tệp `/release.json` cung cấp mã kiểm tra nguồn để đối chiếu bản phát hành. Khi đổi tài nguyên được lưu đệm, cập nhật phiên bản cache trong service worker.

## Mã nguồn và dữ liệu

`index.html` chứa giao diện và logic; `prayers.js` chứa lời kinh. `assets/` và `vendor/` chứa tài nguyên đóng gói. `scripts/build-web.mjs` tạo `dist/`; `service-worker.js` hỗ trợ bộ nhớ đệm ngoại tuyến. Dữ liệu cầu nguyện được lưu trong trình duyệt và sẽ mất nếu xóa dữ liệu website.

Bản cập nhật này dành cho ứng dụng web. Việc đóng gói và phát hành ứng dụng di động được thực hiện riêng. Xem [PRIVACY.md](PRIVACY.md) và [LICENSE](LICENSE).
