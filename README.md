# Ứng dụng Mân Côi và Chuỗi Lòng Thương Xót

**Tiếng Việt** | [English](README.en.md)

Ứng dụng web cầu nguyện Công Giáo do **David Hua** phát triển, hướng dẫn lần hạt Mân Côi và Chuỗi Lòng Thương Xót bằng tiếng Việt và tiếng Anh.

## Tính năng

- **Hướng dẫn lần hạt Mân Côi:** đi qua từng lời kinh, đếm số lần đọc và theo dõi tiến độ từng chục kinh cũng như cả buổi cầu nguyện.
- **Bốn bộ mầu nhiệm:** Vui, Thương, Mừng và Sáng, có hình minh họa và gợi ý theo ngày trong tuần. Người dùng cũng có thể tự chọn bộ mầu nhiệm.
- **Chuỗi Lòng Thương Xót:** có trình tự cầu nguyện thông thường và trình tự dành cho 3 giờ chiều.
- **Tiếng Việt và tiếng Anh:** chuyển đổi cả giao diện lẫn nội dung kinh nguyện.
- **Tùy chỉnh cách đọc:** giao diện sáng hoặc tối và ba cỡ chữ.
- **Thống kê cầu nguyện:** lịch sử các buổi đã hoàn thành, tổng số lần hoàn thành, chuỗi ngày cầu nguyện liên tiếp, thời gian đang cầu nguyện và thống kê thời lượng.
- **Chia sẻ:** mở hộp thoại chia sẻ của thiết bị nếu trình duyệt hỗ trợ, hoặc sao chép nội dung tóm tắt.

## Chạy trên máy tính

Phiên bản mã nguồn hiện có trong kho này là một website tĩnh, không cần cài đặt bằng npm hay thực hiện bước biên dịch.

```bash
git clone https://github.com/Dstarli/rosary.git
cd rosary
python3 -m http.server 8000
```

Mở **http://localhost:8000** bằng trình duyệt hiện đại. Lần truy cập đầu cần có kết nối internet để tải các thư viện trình duyệt và phông chữ từ bên ngoài. Hãy chạy qua máy chủ HTTP thay vì mở trực tiếp tệp `index.html`.

## Cách sử dụng

1. Chọn Mân Côi hoặc Chuỗi Lòng Thương Xót. Với Mân Côi, giữ bộ mầu nhiệm được gợi ý hoặc chọn bộ khác; với Chuỗi Lòng Thương Xót, chọn trình tự thông thường hoặc 3 giờ chiều.
2. Đọc lời kinh đang hiển thị và nhấn nút tiếp theo để đếm số lần đọc rồi chuyển bước. Nút quay lại cho phép trở về bước trước.
3. Sử dụng danh sách kinh, nút đổi ngôn ngữ, giao diện và cỡ chữ theo nhu cầu.
4. Hoàn thành trình tự để ghi nhận buổi cầu nguyện, sau đó xem thống kê hoặc chia sẻ nội dung tóm tắt.

Các buổi đã hoàn thành và tùy chọn liên quan được lưu trong `localStorage` của trình duyệt, dưới khóa `rosaryData`. Ứng dụng không có tài khoản hay đồng bộ giữa các thiết bị. Vị trí đang cầu nguyện dở không được lưu khi tải lại trang. Trong phiên bản này, thay đổi tùy chọn chỉ được lưu lâu dài sau khi đã có bản ghi dữ liệu; bản ghi được tạo khi hoàn thành một buổi cầu nguyện.

## Cấu trúc kho mã nguồn

| Tệp hoặc thư mục | Chức năng |
| --- | --- |
| [index.html](index.html) | Giao diện React, trình tự kinh, chọn mầu nhiệm, thống kê và kiểu hiển thị |
| [prayers.js](prayers.js) | Nội dung kinh bằng tiếng Việt và tiếng Anh |
| [assets/](assets/) | Hình minh họa cho hai mươi mầu nhiệm Mân Côi |
| [manifest.json](manifest.json) | Thông tin nhận diện và cài đặt ứng dụng web |
| [service-worker.js](service-worker.js) | Lưu bộ nhớ đệm cho tài nguyên tĩnh và tài nguyên bên ngoài |
| [wrangler.jsonc](wrangler.jsonc) | Cấu hình phục vụ tài nguyên tĩnh trên Cloudflare |

Giao diện sử dụng React 18, ReactDOM, Babel Standalone, mã Tailwind chạy trong trình duyệt và Google Fonts được tải từ các dịch vụ bên ngoài.

## Triển khai và tình trạng PWA

Phục vụ các tệp tĩnh qua HTTPS tại đường dẫn gốc của một website riêng. Cấu hình Cloudflare hiện có trỏ tới thư mục gốc của kho mã nguồn. Các dịch vụ lưu trữ website tĩnh khác cũng có thể phục vụ những tệp này. GitHub Pages cần được cấu hình riêng trong kho; chỉ đẩy commit lên GitHub chưa đủ để bật website.

Kho mã nguồn có manifest và service worker, nhưng **khả năng sử dụng ngoại tuyến và cài đặt PWA chưa hoàn chỉnh trong phiên bản đã được đưa lên kho**:

- Cả hai tệp đều tham chiếu tới `icon-192.png` và `icon-512.png`, trong khi hai ảnh này chưa có trong kho. Việc thiếu ảnh có thể khiến service worker không cài đặt được vì bộ nhớ đệm tĩnh sử dụng `cache.addAll`.
- Service worker được đăng ký bằng đường dẫn tuyệt đối `/service-worker.js`. Khi triển khai dưới đường dẫn con như `/rosary/`, cần điều chỉnh đường dẫn này.
- Thư viện trình duyệt và phông chữ đến từ các dịch vụ bên ngoài; khả năng sử dụng ngoại tuyến phụ thuộc vào việc tải và lưu bộ nhớ đệm thành công.

Sau khi xử lý các yêu cầu triển khai trên, có thể dùng tùy chọn cài đặt hoặc Thêm vào màn hình chính nếu trình duyệt hỗ trợ. Hãy kiểm tra khả năng sử dụng ngoại tuyến trên trình duyệt đích trước khi dựa vào tính năng này.

## Tùy chỉnh

Sửa nội dung kinh trong `prayers.js`. Mô tả mầu nhiệm, cách chọn theo ngày, trình tự cầu nguyện và kiểu giao diện nằm trong `index.html`. Khi thay đổi tài nguyên được lưu đệm, hãy cập nhật phiên bản bộ nhớ đệm trong `service-worker.js`.

## Nhà phát triển và giấy phép

**Nhà phát triển: David Hua**

README trước đây ghi giấy phép MIT, nhưng hiện kho mã nguồn chưa có tệp giấy phép chứa các điều khoản tương ứng.
