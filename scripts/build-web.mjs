import { createHash } from "node:crypto";
import { copyFileSync, cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import Babel from "@babel/standalone";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of [
  "prayers.js",
  "service-worker.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
  "love-rosary-icon-192.png",
  "love-rosary-icon-512.png",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "_headers"
]) {
  copyFileSync(join(root, file), join(dist, file));
}

const vendorSource = join(root, "vendor");
if (existsSync(vendorSource)) {
  cpSync(vendorSource, join(dist, "vendor"), { recursive: true });
}

const assetsSource = join(root, "assets");
const assetsDist = join(dist, "assets");
mkdirSync(assetsDist, { recursive: true });
const productionAssets = readdirSync(assetsSource).filter(file => file.endsWith(".webp"));
if (!productionAssets.length) {
  throw new Error("No optimized WebP assets found. Run npm run optimize:images first.");
}
for (const file of productionAssets) {
  copyFileSync(join(assetsSource, file), join(assetsDist, file));
}

const sourceHtml = readFileSync(join(root, "index.html"), "utf8");
const appScript = sourceHtml.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);

if (!appScript) {
  throw new Error("Could not find the application JSX script in index.html");
}

const compiledApp = Babel.transform(appScript[1], {
  presets: ["react"],
  sourceType: "script",
  comments: false,
  compact: true
}).code;

const builtHtml = sourceHtml
  .replace(/\s*<script src="vendor\/babel\.min\.js"><\/script>\s*/, "\n")
  .replace(appScript[0], `<script>${compiledApp}</script>`);

writeFileSync(join(dist, "index.html"), builtHtml);
rmSync(join(dist, "vendor", "babel.min.js"), { force: true });

const origin = "https://loverosary.com";
const socialImage = `${origin}/assets/joyful_1-wide.webp`;

function renderNavigation(lang) {
  if (lang === "en") {
    return `
      <nav class="site-nav" aria-label="Love Rosary content">
        <a href="/en/">Overview</a>
        <a href="/">Open app</a>
        <a href="/kinh-man-coi/" lang="vi">Kinh Mân Côi</a>
        <a href="/long-thuong-xot/" lang="vi">Lòng Thương Xót</a>
        <a href="/kinh-nguyen/" lang="vi">Prayer library</a>
        <a href="/lich-le-cong-giao/" lang="vi">Feast calendar</a>
        <a href="/" lang="vi">Tiếng Việt</a>
      </nav>`;
  }

  return `
    <nav class="site-nav" aria-label="Nội dung Love Rosary">
      <a href="/">Mở ứng dụng</a>
      <a href="/kinh-man-coi/">Kinh Mân Côi</a>
      <a href="/long-thuong-xot/">Lòng Thương Xót</a>
      <a href="/kinh-nguyen/">Kinh nguyện</a>
      <a href="/lich-le-cong-giao/">Lịch lễ</a>
      <a href="/gioi-thieu/">Giới thiệu</a>
      <a href="/en/" lang="en">English</a>
    </nav>`;
}

const pageStyles = `
  :root{color-scheme:dark;--bg:#0c1114;--panel:#12242b;--text:#f7fafc;--muted:#b6c5cb;--line:#29434e;--accent:#7dd3fc;--gold:#f6cf72}
  *{box-sizing:border-box}html{background:var(--bg)}body{margin:0;background:radial-gradient(circle at 50% 0%,#173946 0%,var(--bg) 520px);color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.7}
  a{color:var(--accent)}.shell{width:min(920px,calc(100% - 36px));margin:0 auto}.site-header{padding:22px 0;border-bottom:1px solid var(--line)}.brand{font-size:1.15rem;font-weight:850;color:white;text-decoration:none}.site-nav{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:14px}.site-nav a{color:var(--muted);text-decoration:none;font-size:.93rem}.site-nav a:hover{color:white}
  main{padding:clamp(56px,9vw,104px) 0 80px}.eyebrow{margin:0 0 12px;color:var(--accent);font-size:.78rem;font-weight:850;letter-spacing:.14em;text-transform:uppercase}h1{max-width:820px;margin:0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(2.35rem,7vw,4.7rem);line-height:1.06;text-wrap:balance}.lead{max-width:760px;margin:24px 0 0;color:#d8e5e9;font-size:clamp(1.05rem,2.8vw,1.3rem);line-height:1.65;text-wrap:pretty}
  .actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:30px}.button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:12px 19px;border-radius:999px;background:var(--accent);color:#08202a;text-decoration:none;font-weight:850}.button.secondary{border:1px solid var(--line);background:rgba(255,255,255,.04);color:white}
  .content{margin-top:58px;display:grid;gap:22px}.card{padding:clamp(22px,4vw,34px);border:1px solid var(--line);border-radius:24px;background:rgba(18,36,43,.8)}h2{margin:0 0 14px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(1.55rem,4vw,2.2rem)}h3{margin:22px 0 7px;color:var(--gold);font-size:1.03rem}p{margin:0 0 16px}p:last-child{margin-bottom:0}ul,ol{margin:10px 0 0;padding-left:24px}li+li{margin-top:8px}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}.note{border-left:3px solid var(--gold);padding:15px 18px;background:rgba(246,207,114,.08);color:#e9e2d2}.site-footer{padding:28px 0 42px;border-top:1px solid var(--line);color:var(--muted);font-size:.88rem}.site-footer a{color:var(--muted)}
  .privacy-return-bar{position:sticky;top:0;z-index:20;padding:calc(10px + env(safe-area-inset-top,0px)) 0 10px;background:rgba(12,17,20,.94);backdrop-filter:blur(16px);border-bottom:1px solid rgba(182,197,203,.12)}
  .privacy-return-bar .shell{display:flex;justify-content:flex-end}
  .privacy-return{display:inline-flex;align-items:center;gap:10px;min-height:44px;padding:6px 14px;border-radius:999px;color:#e5edf0;text-decoration:none;font-size:.95rem;font-weight:650}
  .privacy-return span:first-child{font-size:1.65rem;font-weight:400;line-height:1}
  .privacy-return:hover{background:rgba(255,255,255,.08)}
  .privacy-return:focus-visible{outline:2px solid var(--accent);outline-offset:3px}
  .privacy-page .shell{width:min(720px,calc(100% - 40px))}
  .privacy-page .site-header{padding:24px 0 0;border:0}
  .privacy-page .site-nav{display:none}
  .privacy-page main{padding:48px 0 64px}
  .privacy-page h1{font-size:clamp(2.2rem,7vw,3.7rem);line-height:1.15}
  .privacy-page .lead{font-size:1.1rem;color:var(--muted)}
  .privacy-page .content{margin-top:42px;display:block}
  .privacy-page .card{padding:0;margin:0 0 32px;border:0;border-radius:0;background:none}
  .privacy-page h2{font-family:inherit;font-size:1.15rem;line-height:1.5;margin-bottom:10px;color:#f3e4bf}
  .privacy-page .card p{color:#c1cdd2;line-height:1.85}
  .privacy-page .site-footer{font-size:.85rem}
  @media(max-width:680px){.grid{grid-template-columns:1fr}.site-nav{gap:8px 14px}.site-nav a{font-size:.86rem}}
`;

function renderStaticPage({ path, lang = "vi", title, description, eyebrow, heading, lead, body }) {
  const canonical = `${origin}${path}`;
  const english = lang === "en";
  const isPrivacy = path === "/privacy/";
  const privacyReturn = `<div class="privacy-return-bar"><div class="shell"><a class="privacy-return" href="/" aria-label="Đóng chính sách riêng tư và về ứng dụng"><span aria-hidden="true">×</span><span id="privacy-return-label">Về ứng dụng</span></a></div></div>
  <script>
    try {
      if (JSON.parse(localStorage.getItem('rosaryData') || '{}').language === 'en') {
        document.getElementById('privacy-return-label').textContent = 'Back to app';
        document.querySelector('.privacy-return').setAttribute('aria-label', 'Close privacy policy and return to app');
      }
    } catch (_) {}
  </script>`;
  const navigation = renderNavigation(lang);
  const actions = english
    ? `<a class="button" href="/">Open the prayer app</a><a class="button secondary" href="/gioi-thieu/" lang="vi">Vietnamese introduction</a>`
    : `<a class="button" href="/">Mở ứng dụng cầu nguyện</a><a class="button secondary" href="/gioi-thieu/">Tìm hiểu Love Rosary</a>`;
  const footer = english
    ? `Love Rosary · Free Catholic prayer companion · <a href="/privacy/">Privacy</a>`
    : `Love Rosary · Ứng dụng cầu nguyện Công giáo miễn phí · <a href="/privacy/">Quyền riêng tư</a>`;
  const structuredData = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: heading,
    url: canonical,
    description,
    inLanguage: lang,
    isPartOf: { "@type": "WebSite", name: "Love Rosary", url: `${origin}/` }
  });

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="vi" href="${origin}/">
  <link rel="alternate" hreflang="en" href="${origin}/en/">
  <link rel="alternate" hreflang="x-default" href="${origin}/">
  <link rel="icon" type="image/png" href="/love-rosary-icon-192.png" sizes="192x192">
  <link rel="apple-touch-icon" href="/love-rosary-icon-192.png" sizes="192x192">
  <meta name="theme-color" content="#0c1114">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Love Rosary">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="675">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${socialImage}">
  <script type="application/ld+json">${structuredData}</script>
  <style>${pageStyles}</style>
</head>
<body${isPrivacy ? ' class="privacy-page"' : ""}>
  ${isPrivacy ? privacyReturn : ""}
  <header class="site-header"><div class="shell"><a class="brand" href="/">Love Rosary</a>${navigation}</div></header>
  <main class="shell">
    <p class="eyebrow">${eyebrow}</p>
    <h1>${heading}</h1>
    <p class="lead">${lead}</p>
    ${isPrivacy ? "" : `<div class="actions">${actions}</div>`}
    <div class="content">${body}</div>
  </main>
  <footer class="site-footer"><div class="shell">${footer}</div></footer>
</body>
</html>`;
}

const staticPages = [
  {
    path: "/kinh-man-coi/",
    title: "Lần Hạt Mân Côi Online Bằng Tiếng Việt | Love Rosary",
    description: "Hướng dẫn lần hạt Mân Côi online với Năm Sự Vui, Thương, Mừng và Sáng, lời kinh rõ ràng và tiến trình dễ theo dõi.",
    eyebrow: "Kinh Mân Côi",
    heading: "Lần Hạt Mân Côi từng bước, rõ ràng và trang nghiêm",
    lead: "Love Rosary giúp bạn theo dõi từng lời kinh và từng chục kinh mà không phải nhớ mình đang ở bước nào.",
    body: `
      <section class="card"><h2>Bốn mầu nhiệm Mân Côi</h2><div class="grid"><div><h3>Năm Sự Vui</h3><p>Thứ Hai và Thứ Bảy: từ biến cố Truyền Tin đến khi tìm thấy Chúa Giêsu trong Đền Thánh.</p></div><div><h3>Năm Sự Thương</h3><p>Thứ Ba và Thứ Sáu: suy niệm cuộc Thương Khó và cái chết của Chúa Giêsu.</p></div><div><h3>Năm Sự Mừng</h3><p>Thứ Tư và Chúa Nhật: suy niệm Phục Sinh, Thăng Thiên và vinh quang của Đức Mẹ.</p></div><div><h3>Năm Sự Sáng</h3><p>Thứ Năm: suy niệm đời sống công khai và sứ vụ của Chúa Giêsu.</p></div></div></section>
      <section class="card"><h2>Cách ứng dụng đồng hành</h2><ol><li>Ứng dụng gợi ý mầu nhiệm phù hợp theo ngày.</li><li>Mỗi bước hiển thị lời kinh và tiến độ của chục kinh hiện tại.</li><li>Bạn có thể đổi mầu nhiệm, thay cỡ chữ hoặc chuyển sáng/tối.</li><li>Sau khi hoàn thành, kết quả được lưu trên chính thiết bị để tạo nhật ký cầu nguyện.</li></ol></section>
      <p class="note">Love Rosary là phương tiện hỗ trợ cầu nguyện cá nhân. Phần “Nội dung” trong ứng dụng trình bày năm sự để bạn đọc và suy niệm trước mỗi chục kinh.</p>`
  },
  {
    path: "/long-thuong-xot/",
    title: "Chuỗi Lòng Thương Xót Online | Love Rosary",
    description: "Đọc Chuỗi Lòng Thương Xót online bằng tiếng Việt hoặc tiếng Anh, với lời kinh và tiến trình từng hạt dễ theo dõi.",
    eyebrow: "Lòng Chúa Thương Xót",
    heading: "Đọc Chuỗi Lòng Thương Xót với tiến trình từng hạt",
    lead: "Một giao diện yên tĩnh để đọc Chuỗi Lòng Thương Xót truyền thống hoặc đồng hành với lời nguyện lúc 3 giờ chiều.",
    body: `
      <section class="card"><h2>Hai cách cầu nguyện</h2><div class="grid"><div><h3>Chuỗi truyền thống</h3><p>Lần chuỗi trên tràng hạt Mân Côi với lời nguyện mở đầu, các hạt lớn, mười hạt nhỏ của mỗi chục và lời nguyện kết.</p></div><div><h3>Lời nguyện 3 giờ chiều</h3><p>Một tiến trình riêng giúp bạn đọc lời nguyện lúc 3 giờ và suy niệm về Máu và Nước tuôn ra từ Trái Tim Chúa Giêsu.</p></div></div></section>
      <section class="card"><h2>Dễ tiếp tục khi đang cầu nguyện</h2><p>Ứng dụng hiển thị rõ lời kinh hiện tại, số lần cần đọc và tiến độ các chục. Bạn có thể quay lại bước trước hoặc tiếp tục mà không mất tiến trình đang đọc.</p></section>
      <p class="note">Có thể chuyển nhanh giữa tiếng Việt và tiếng Anh ngay trong ứng dụng.</p>`
  },
  {
    path: "/kinh-nguyen/",
    title: "Thư Viện Kinh Nguyện Công Giáo | Love Rosary",
    description: "Tra cứu kinh Công giáo theo tên và nhóm: kinh Đức Mẹ, Thánh Giuse, các thánh, chân phước và tổng lãnh thiên thần.",
    eyebrow: "Thư viện kinh nguyện",
    heading: "Tìm lời kinh theo tên Đức Mẹ, vị thánh hoặc chủ đề",
    lead: "Thư viện được sắp theo nhóm và có ô tìm kiếm để bạn mở nhanh lời kinh cần đọc.",
    body: `
      <section class="card"><h2>Các nhóm kinh</h2><div class="grid"><div><h3>Kinh Đức Mẹ</h3><p>Kinh Trông Cậy, Kinh Hãy Nhớ và các lời nguyện dâng mình cho Đức Mẹ.</p></div><div><h3>Kinh Thánh Giuse</h3><p>Lời kinh cầu cùng Thánh Giuse và những kinh nguyện dành cho gia đình.</p></div><div><h3>Các thánh và chân phước</h3><p>Kinh kính Thánh Laurensô, Martinô de Porres, Têrêsa Hài Đồng Giêsu, Thánh Vincentê và Cha Phanxicô Xaviê Trương Bửu Diệp.</p></div><div><h3>Các tổng lãnh thiên thần</h3><p>Những lời kinh xin Thánh Micae và các tổng lãnh thiên thần cầu bầu, bảo vệ.</p></div></div></section>
      <section class="card"><h2>Đọc dễ hơn trên điện thoại</h2><p>Bạn có thể tìm bằng tên ngắn, mở từng lời kinh theo dạng danh sách thu gọn và điều chỉnh cỡ chữ chung của ứng dụng.</p></section>`
  },
  {
    path: "/lich-le-cong-giao/",
    title: "Lịch Lễ Công Giáo Hôm Nay | Love Rosary",
    description: "Xem lịch lễ Công giáo, chọn ngày cần tra cứu và tạo lời nhắc cho lễ trọng, lễ kính, lễ nhớ và các thánh.",
    eyebrow: "Lịch lễ Công giáo",
    heading: "Tra cứu ngày lễ và đặt lời nhắc trên điện thoại",
    lead: "Chọn bất kỳ ngày nào để xem tên lễ, bậc lễ và màu phụng vụ trong lịch chung dành cho người dùng Việt Nam.",
    body: `
      <section class="card"><h2>Chọn ngày thay vì chỉ bấm tới lui</h2><p>Lịch cho phép chuyển tháng, chọn trực tiếp một ngày hoặc quay về hôm nay. Thông tin ngày được trình bày cùng bậc lễ và màu phụng vụ để tiện tham khảo.</p></section>
      <section class="card"><h2>Nhắc ngày lễ</h2><div class="grid"><div><h3>Trong ứng dụng mobile</h3><p>Có thể dùng thông báo cục bộ để nhắc lễ trọng và các lễ đã chọn, ngay cả khi ứng dụng đã đóng.</p></div><div><h3>Trên website</h3><p>Có thể tải lịch <code>.ics</code> và thêm vào ứng dụng Lịch của điện thoại, không cần tài khoản Love Rosary.</p></div></div></section>
      <p class="note">Đây là lịch phụng vụ chung để tham khảo. Giáo phận, dòng tu hoặc giáo xứ có thể có lễ riêng và điều chỉnh mục vụ.</p>`
  },
  {
    path: "/gioi-thieu/",
    title: "Giới Thiệu Love Rosary — Ứng Dụng Cầu Nguyện Công Giáo",
    description: "Love Rosary là ứng dụng miễn phí hỗ trợ cầu nguyện Mân Côi, Chuỗi Lòng Thương Xót và đọc kinh Công giáo bằng Việt–Anh.",
    eyebrow: "Giới thiệu Love Rosary",
    heading: "Bình an trong từng lời kinh",
    lead: "Love Rosary được tạo ra để lời kinh luôn rõ ràng, tiến trình luôn dễ theo dõi và người dùng có thể cầu nguyện mà không bị quảng cáo làm gián đoạn.",
    body: `
      <section class="card"><h2>Mục đích của ứng dụng</h2><p>Ứng dụng đồng hành khi bạn lần hạt Mân Côi và đọc Chuỗi Lòng Thương Xót, đồng thời tập hợp thư viện kinh nguyện, lịch lễ và nhật ký cầu nguyện trong một trải nghiệm nhẹ nhàng.</p><p>Nội dung cốt lõi có thể hoạt động offline sau khi ứng dụng được cài đặt. Các thiết lập và lịch sử cầu nguyện được lưu trên thiết bị.</p></section>
      <section class="card"><h2>Người phát triển</h2><p>Love Rosary được phát triển bởi David Hua. Ứng dụng hướng đến người Công giáo Việt Nam và các gia đình sử dụng cả tiếng Việt lẫn tiếng Anh.</p></section>
      <p class="note">Xin Đức Mẹ Maria và Chúa Giêsu Lòng Thương Xót gìn giữ bạn và gia đình trong bình an.</p>`
  },
  {
    path: "/en/",
    lang: "en",
    title: "Love Rosary — Free Vietnamese & English Catholic Prayer App",
    description: "Pray the Holy Rosary and Divine Mercy Chaplet in Vietnamese or English, browse Catholic prayers, and view a Catholic feast calendar.",
    eyebrow: "Catholic prayer companion",
    heading: "Pray the Rosary with clear text and gentle progress",
    lead: "Love Rosary is a free bilingual prayer companion for the Holy Rosary, Divine Mercy Chaplet, Catholic prayers, and feast reminders.",
    body: `
      <section class="card"><h2>Made for prayer, not distraction</h2><div class="grid"><div><h3>Holy Rosary</h3><p>Follow the Joyful, Sorrowful, Glorious, and Luminous Mysteries one prayer and one decade at a time.</p></div><div><h3>Divine Mercy</h3><p>Pray the traditional chaplet or follow the dedicated 3 PM prayer flow.</p></div><div><h3>Prayer library</h3><p>Search prayers to Mary, Saint Joseph, saints, blesseds, and archangels.</p></div><div><h3>Feast calendar</h3><p>Choose a date, review the general Catholic calendar for Vietnam, and create local reminders.</p></div></div></section>
      <section class="card"><h2>Private by default</h2><p>No account is required. Prayer progress, settings, and recent history stay on the device. The core prayer experience can work offline after installation.</p></section>`
  },
  {
    path: "/privacy/",
    title: "Quyền Riêng Tư | Love Rosary",
    description: "Chính sách quyền riêng tư của Love Rosary: dữ liệu cầu nguyện và thiết lập được lưu trên thiết bị, không cần tài khoản.",
    eyebrow: "Quyền riêng tư",
    heading: "Dữ liệu cầu nguyện thuộc về bạn",
    lead: "Love Rosary được thiết kế để hoạt động không cần tài khoản và không gửi lịch sử cầu nguyện của bạn lên máy chủ.",
    body: `
      <section class="card"><h2>Dữ liệu lưu trên thiết bị</h2><p>Ngôn ngữ, giao diện, cỡ chữ, chế độ cầu nguyện, bước đang đọc, lịch sử hoàn thành, số lần cầu nguyện, chuỗi ngày và thời lượng được lưu trong trình duyệt hoặc vùng lưu trữ của ứng dụng.</p></section>
      <section class="card"><h2>Mạng, quảng cáo và phân tích</h2><p>Phiên bản hiện tại không có đăng nhập, quảng cáo, analytics hoặc trình theo dõi của bên thứ ba. Nội dung cốt lõi được đóng gói để có thể hoạt động offline sau khi cài đặt.</p></section>
      <section class="card"><h2>Thông báo</h2><p>Nhắc lịch lễ là tùy chọn. Trên ứng dụng mobile, lời nhắc được lên lịch cục bộ trên thiết bị sau khi bạn cho phép. Trên web, bạn có thể tải tệp lịch để thêm vào ứng dụng Lịch của điện thoại.</p></section>`
  }
];

for (const page of staticPages) {
  const outputDirectory = join(dist, page.path.replace(/^\/+|\/+$/g, ""));
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(join(outputDirectory, "index.html"), renderStaticPage(page));
}

console.log(`Built static app and ${staticPages.length} crawlable content pages in dist/`);

// Public artifact fingerprint: verify that GitHub and production use the same source.
const sourceFiles = ["index.html", "prayers.js", "service-worker.js", "manifest.json", "scripts/build-web.mjs"];
const fingerprint = createHash("sha256");
for (const file of sourceFiles) fingerprint.update(file).update(readFileSync(join(root, file)));
writeFileSync(join(dist, "release.json"), JSON.stringify({ version: "7.05", sourceSha256: fingerprint.digest("hex") }, null, 2) + "\n");
