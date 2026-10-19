"use strict";

/*
 * Owner settings.
 * Empty web links are hidden. A web link is used only when it starts with https://.
 * Email is stored in two parts so the full address is never written in index.html.
 * Example: email: { user: "hello", domain: "example.com" }
 */
const CONFIG = {
  name: "Quang Do Hong",
  /* File under assets/img/. Leave "" to show the initials QD. */
  avatar: "",
  links: {
    linkedin: "",
    upwork: "",
    vlance: "",
    github: "https://github.com/konjailc1",
    email: { user: "", domain: "" }
  }
};

/*
 * Projects, in display order.
 * image: file under assets/img/, or "" for a placeholder.
 * width / height: pixel size of that file, so the card does not jump when it loads.
 * icon: placeholder drawing when image is "". One of table, news, tag.
 * repo and demo must start with https://. An empty demo hides the live demo button.
 * Tags are product names, the same in both languages.
 * Sentences live in I18N under project.<id>.title, .summary, and .alt.
 */
const PROJECTS = [
  {
    id: "ai-data-enrichment",
    image: "assets/img/ai-data-enrichment.png",
    width: 1400,
    height: 2000,
    icon: "",
    repo: "https://github.com/konjailc1/ai-data-enrichment",
    demo: "https://ai-data-enrichment.streamlit.app",
    tags: ["Python", "Gemini AI", "pandas", "Streamlit", "Excel"]
  },
  {
    id: "invoice-pdf-extractor",
    image: "assets/img/invoice-pdf-extractor.png",
    width: 3299,
    height: 588,
    icon: "",
    repo: "https://github.com/konjailc1/invoice-pdf-extractor",
    demo: "",
    tags: ["Python", "pdfplumber", "Excel"]
  },
  {
    id: "excel-report-automation",
    image: "assets/img/excel-report-automation.png",
    width: 1202,
    height: 829,
    icon: "",
    repo: "https://github.com/konjailc1/excel-report-automation",
    demo: "",
    tags: ["Python", "pandas", "openpyxl", "Excel"]
  },
  {
    id: "data-cleaning-toolkit",
    image: "",
    width: 0,
    height: 0,
    icon: "table",
    repo: "https://github.com/konjailc1/data-cleaning-toolkit",
    demo: "",
    tags: ["Python", "pandas", "CSV", "Excel"]
  },
  {
    id: "news-scraper",
    image: "",
    width: 0,
    height: 0,
    icon: "news",
    repo: "https://github.com/konjailc1/news-scraper",
    demo: "",
    tags: ["Python", "Playwright", "pandas"]
  },
  {
    id: "mykingdom-price-scraper",
    image: "",
    width: 0,
    height: 0,
    icon: "tag",
    repo: "https://github.com/konjailc1/mykingdom-price-scraper",
    demo: "",
    tags: ["Python", "web scraping", "pandas", "Excel"]
  }
];

/* Every sentence on the page. Keys map to { vi, en }. */
const I18N = {
  "meta.title": {
    vi: "Data Automation & Web Scraping | Python | AI",
    en: "Data Automation & Web Scraping | Python | AI"
  },
  "meta.description": {
    vi: "Lập trình Python, hỗ trợ lấy dữ liệu từ web, làm sạch dữ liệu, làm báo cáo Excel tự động, đọc hoá đơn PDF và chuẩn hoá dữ liệu bằng AI.",
    en: "Python coding for web data scraping, data cleaning, automated Excel reports, PDF invoice extraction and AI data standardization."
  },
  "skip": {
    vi: "Chuyển tiếp",
    en: "Skip to main content"
  },
  "nav.label": {
    vi: "Mục lục trang",
    en: "Page sections"
  },
  "nav.services": { vi: "Dịch vụ", en: "Services" },
  "nav.projects": { vi: "Dự án", en: "Projects" },
  "nav.process": { vi: "Quy trình", en: "How I work" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "lang.group": { vi: "Ngôn ngữ", en: "Language" },
  "lang.now": { vi: "Tiếng Việt", en: "English" },
  "hero.pitch": {
    vi: "Hỗ trợ tự động hoá những việc dữ liệu lặp lại bằng Python: lấy dữ liệu từ web, làm sạch dữ liệu, làm báo cáo Excel, đọc hoá đơn PDF và chuẩn hoá dữ liệu bằng AI.",
    en: "I help automate repetitive data work with Python: web scraping, data cleaning, Excel reports, PDF invoice extraction and AI data standardization."
  },
  "hero.photoAlt": {
    vi: "Ảnh của Quang",
    en: "Photo of Quang"
  },
  "services.title": { vi: "Dịch vụ", en: "Services" },
  "services.lead": {
    vi: "Những việc dữ liệu tốn thời gian, công sức",
    en: "Data tasks that take time and effort"
  },
  "service.scrape.title": { vi: "Web data scraping - Cào data", en: "Web data scraping" },
  "service.scrape.text": {
    vi: "Tôi lấy giá, danh sách sản phẩm hay tin tức từ các trang web công khai về file Excel.",
    en: "I collect prices, product lists or news from public websites into Excel."
  },
  "service.clean.title": { vi: "Làm sạch dữ liệu", en: "Data cleaning" },
  "service.clean.text": {
    vi: "Tên, ngày tháng, số điện thoại, số tiền lộn xộn? Tôi gom hết về một bảng gọn gàng, thống nhất một định dạng.",
    en: "Messy names, dates, phone numbers or amounts? I bring them into one tidy table with a single, consistent format."
  },
  "service.excel.title": { vi: "Báo cáo Excel tự động", en: "Automated Excel reports" },
  "service.excel.text": {
    vi: "Từ file dữ liệu gốc, tôi biến thành báo cáo Excel có số tổng, biểu đồ và nhận xét, mở ra là hiểu ngay.",
    en: "I turn raw data files into Excel reports with totals, charts and comments that make sense at a glance."
  },
  "service.pdf.title": { vi: "Trích xuất nội dung từ hoá đơn", en: "Invoice data extraction" },
  "service.pdf.text": {
    vi: "Tôi đọc hoá đơn PDF, đưa số liệu vào Excel và đánh dấu sẵn hoá đơn nào bị lệch tổng tiền hoặc mã số thuế.",
    en: "I read PDF invoices, put the figures into Excel, and flag any invoice whose total or tax code doesn't match."
  },
  "service.ai.title": { vi: "Chuẩn hoá dữ liệu bằng AI", en: "AI data enrichment" },
  "service.ai.text": {
    vi: "AI hỗ trợ điền tên sản phẩm chuẩn, chỉnh sửa địa chỉ và đọc review của khách hàng. Dòng nào AI chưa chắc sẽ được đánh dấu để người dùng kiểm tra lại.",
    en: "AI helps fill in standard product names, fix addresses and read customer reviews. Anything the AI isn't sure about is flagged for a person to double-check."
  },
  "projects.title": { vi: "Dự án", en: "Projects" },
  "projects.lead": {
    vi: "6 công cụ tôi đã làm để phục vụ công việc, xem demo dưới đây.",
    en: "Six tools I've built for real work. See the demos below."
  },
  "project.ai-data-enrichment.title": {
    vi: "Chuẩn hoá dữ liệu bằng AI",
    en: "AI data enrichment"
  },
  "project.ai-data-enrichment.summary": {
    vi: "Đưa vào bảng tính bán hàng ghi lộn xộn, nhận về file Excel sạch: giá cả và số điện thoại được chuẩn lại, tên sản phẩm, địa chỉ và bình luận của khách hàng được AI ghi chú rõ.",
    en: "Upload a messy sales spreadsheet and get back a clean Excel file: prices and phone numbers standardized, with clear AI notes on product names, addresses and customer comments."
  },
  "project.ai-data-enrichment.alt": {
    vi: "Giao diện bản demo với dữ liệu mẫu, các dòng đã chuẩn hoá nhưng vẫn cần rà soát tính đúng/sai.",
    en: "Demo screen with sample data: cleaned rows that still need a final accuracy check."
  },
  "project.invoice-pdf-extractor.title": {
    vi: "Trích xuất hoá đơn PDF",
    en: "PDF invoice extraction"
  },
  "project.invoice-pdf-extractor.summary": {
    vi: "Tất cả hoá đơn PDF trong thư mục được gom vào một file Excel. Hoá đơn nào lệch tổng tiền, thuế hoặc số tiền bằng chữ sẽ được đánh dấu để kiểm tra.",
    en: "Every PDF invoice in a folder goes into one Excel file. Any invoice with a mismatched total, tax or amount in words is flagged for checking."
  },
  "project.invoice-pdf-extractor.alt": {
    vi: "File Excel tổng hợp hoá đơn từ PDF, các dòng lỗi được đánh dấu kèm lý do.",
    en: "Excel summary of invoices pulled from PDFs, with problem rows flagged and the reason noted."
  },
  "project.excel-report-automation.title": {
    vi: "Báo cáo Excel tự động",
    en: "Automated Excel reports"
  },
  "project.excel-report-automation.summary": {
    vi: "Từ dữ liệu thô, mỗi tuần tự ra một báo cáo Excel: số tổng, so sánh với tuần trước, bảng chia theo nhóm, biểu đồ và nhận xét song ngữ Việt – Anh.",
    en: "Turns raw data into a weekly Excel report: totals, week-over-week comparison, breakdowns by group, charts and comments in Vietnamese and English."
  },
  "project.excel-report-automation.alt": {
    vi: "Báo cáo tuần trên Excel với các số tổng, số liệu theo vùng và nhận xét.",
    en: "Weekly Excel report with totals, regional figures and comments."
  },
  "project.data-cleaning-toolkit.title": {
    vi: "Làm sạch dữ liệu",
    en: "Data cleaning"
  },
  "project.data-cleaning-toolkit.summary": {
    vi: "Dữ liệu lộn xộn (tên, ngày, số tiền, thành phố, số điện thoại, dòng trùng) được gom về một bảng sạch, kèm ghi chú rõ từng chỗ đã sửa.",
    en: "Messy data (names, dates, amounts, cities, phone numbers, duplicate rows) ends up in one clean table, with a clear note on every fix."
  },
  "project.news-scraper.title": {
    vi: "Tổng hợp tin tức chứng khoán",
    en: "Stock news collector"
  },
  "project.news-scraper.summary": {
    vi: "Tự động lấy tin chứng khoán trên các trang báo chính thống về file Excel, gồm tiêu đề, đường link, thời gian đăng và tóm tắt ngắn, không chép nguyên bài.",
    en: "Automatically collects stock-market news from mainstream news sites into Excel: title, link, publish time and a short summary, without copying full articles."
  },
  "project.mykingdom-price-scraper.title": {
    vi: "Theo dõi giá hàng hoá của cửa hàng đồ chơi MyKingdom",
    en: "MyKingdom toy store price tracker"
  },
  "project.mykingdom-price-scraper.summary": {
    vi: "Lấy giá đồ chơi, mức giảm giá và tình trạng còn/hết hàng trên trang web của MyKingdom về Excel, tiện so sánh giữa các lần cập nhật.",
    en: "Collects toy prices, discounts and in-stock/out-of-stock status from the MyKingdom website into Excel, for easy comparison between updates."
  },
  "process.title": { vi: "Quy trình làm việc", en: "How I work" },
  "process.lead": {
    vi: "Chỉ 3 bước, từ file mẫu của bạn đến công cụ bạn tự chạy được.",
    en: "Three simple steps, from your sample file to a tool you can run yourself."
  },
  "step.1.title": {
    vi: "Bạn gửi dữ liệu mẫu",
    en: "You send a sample"
  },
  "step.1.text": {
    vi: "Chỉ cần một bảng tính, vài file PDF hoặc link trang web cần lấy dữ liệu.",
    en: "A spreadsheet, a few PDFs or a link to the website is all I need."
  },
  "step.2.title": {
    vi: "Tôi làm bản chạy thử",
    en: "I build a quick demo"
  },
  "step.2.text": {
    vi: "Bạn xem kết quả ngay trên dữ liệu của bạn và góp ý trước khi tôi hoàn thiện.",
    en: "You see the results on your own data and give feedback before I finish it."
  },
  "step.3.title": {
    vi: "Tôi bàn giao và hỗ trợ",
    en: "I deliver and support"
  },
  "step.3.text": {
    vi: "Bạn nhận công cụ hoàn chỉnh kèm hướng dẫn dễ hiểu. Cần chỉnh gì, tôi hỗ trợ tiếp.",
    en: "You get the finished tool with easy instructions, and I'm here if anything needs tweaking."
  },
  "contact.title": { vi: "Liên hệ", en: "Contact" },
  "contact.lead": {
    vi: "Có việc dữ liệu nào cứ lặp lại? Gửi tôi một file mẫu, tôi xem giúp nhé.",
    en: "Got a data task that keeps eating your time? Send me a sample file and I'll take a look."
  },
  "link.linkedin": { vi: "LinkedIn", en: "LinkedIn" },
  "link.upwork": { vi: "Upwork", en: "Upwork" },
  "link.vlance": { vi: "vLance", en: "vLance" },
  "link.github": { vi: "GitHub", en: "GitHub" },
  "link.email": { vi: "Email", en: "Email" },
  "link.code": { vi: "Xem code", en: "View code" },
  "link.demo": { vi: "Chạy thử", en: "Live demo" },
  "link.newTab": { vi: "mở tab mới", en: "opens in a new tab" },
  "footer.copy": { vi: "© 2026 {name}", en: "© 2026 {name}" },
  "footer.note": {
    vi: "Được làm bằng HTML, CSS và chạy trên GitHub Pages",
    en: "Built with HTML & CSS · Hosted on GitHub Pages"
  }
};

const SVG_NS = "http://www.w3.org/2000/svg";

const ICONS = {
  table: [
    ["rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "2" }],
    ["path", { d: "M3.5 9h17M3.5 15h17M9 3.5v17M15 3.5v17" }]
  ],
  news: [
    ["path", { d: "M5 4.5h11.5A1.5 1.5 0 0 1 18 6v13.5H7.5A2.5 2.5 0 0 1 5 17V4.5z" }],
    ["path", { d: "M5 17a2.5 2.5 0 0 1 2.5-2.5H18" }],
    ["path", { d: "M8 8h7M8 11.5h7" }]
  ],
  tag: [
    ["path", { d: "M12.5 3.5H5.5A2 2 0 0 0 3.5 5.5v7l8.1 8.1a2 2 0 0 0 2.8 0l6.2-6.2a2 2 0 0 0 0-2.8l-8.1-8.1z" }],
    ["circle", { cx: "8", cy: "8", r: "1.15", class: "icon-fill" }]
  ]
};

function t(key, lang) {
  const row = Object.prototype.hasOwnProperty.call(I18N, key) ? I18N[key] : null;
  if (!row) return "";
  const preferred = lang === "vi" ? row.vi : row.en;
  if (typeof preferred === "string" && preferred !== "") return preferred;
  return typeof row.en === "string" ? row.en : "";
}

function isHttps(url) {
  return typeof url === "string" &&
    url.startsWith("https://") &&
    url.length > "https://".length &&
    !/[\s"'<>]/.test(url);
}

function isLocalImage(path) {
  return typeof path === "string" &&
    /^assets\/img\/[A-Za-z0-9._-]+\.(png|jpe?g|webp|gif|svg)$/.test(path);
}

function mailtoFrom(email) {
  if (!email || typeof email !== "object") return "";
  const user = email.user;
  const domain = email.domain;
  if (typeof user !== "string" || typeof domain !== "string") return "";
  if (!/^[A-Za-z0-9._%+-]+$/.test(user)) return "";
  if (!/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(domain)) return "";
  return "mailto:" + user + "@" + domain;
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function preferredLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "vi" || saved === "en") return saved;
  } catch (err) {
    /* Storage can be blocked. Use the browser language instead. */
  }
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("vi")) return "vi";
  return "en";
}

function rememberLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch (err) {
    /* The switch still works for this visit. */
  }
}

function svgIcon(kind) {
  const spec = Object.prototype.hasOwnProperty.call(ICONS, kind) ? ICONS[kind] : ICONS.table;
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  spec.forEach(function (item) {
    const node = document.createElementNS(SVG_NS, item[0]);
    const attrs = item[1];
    Object.keys(attrs).forEach(function (key) {
      node.setAttribute(key, attrs[key]);
    });
    svg.appendChild(node);
  });
  return svg;
}

function textLink(href, label, className, lang, newTab) {
  const a = document.createElement("a");
  a.className = className;
  a.href = href;
  a.appendChild(document.createTextNode(label));
  if (newTab && isHttps(href)) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const hint = document.createElement("span");
    hint.className = "visually-hidden";
    hint.textContent = " (" + t("link.newTab", lang) + ")";
    a.appendChild(hint);
  }
  return a;
}

function contactItems(lang) {
  const links = CONFIG.links || {};
  const specs = [
    ["link.linkedin", links.linkedin, true],
    ["link.upwork", links.upwork, true],
    ["link.vlance", links.vlance, true],
    ["link.github", links.github, true],
    ["link.email", mailtoFrom(links.email), false]
  ];
  const items = [];
  specs.forEach(function (spec) {
    const href = spec[1];
    const external = spec[2];
    if (external) {
      if (!isHttps(href)) return;
    } else if (typeof href !== "string" || href.indexOf("mailto:") !== 0) {
      return;
    }
    items.push({
      href: href,
      label: t(spec[0], lang),
      newTab: external
    });
  });
  return items;
}

function renderContacts(lang) {
  const items = contactItems(lang);
  document.querySelectorAll("[data-contact-list]").forEach(function (list) {
    const fragment = document.createDocumentFragment();
    items.forEach(function (item, index) {
      const className = index === 0 ? "btn btn-primary" : "btn";
      fragment.appendChild(textLink(item.href, item.label, className, lang, item.newTab));
    });
    clearNode(list);
    list.appendChild(fragment);
  });
}

function renderAvatar(lang) {
  const slot = document.getElementById("avatar");
  if (!slot) return;
  clearNode(slot);
  if (isLocalImage(CONFIG.avatar)) {
    const img = document.createElement("img");
    img.src = CONFIG.avatar;
    img.setAttribute("width", "176");
    img.setAttribute("height", "176");
    img.alt = t("hero.photoAlt", lang);
    slot.appendChild(img);
    slot.classList.add("has-photo");
    slot.removeAttribute("aria-hidden");
  } else {
    slot.classList.remove("has-photo");
    slot.setAttribute("aria-hidden", "true");
    slot.appendChild(document.createTextNode("QD"));
  }
}

function buildProject(project, lang) {
  if (!project || typeof project.id !== "string" || !/^[a-z0-9-]+$/.test(project.id)) {
    return null;
  }
  const article = document.createElement("article");
  article.className = "project";

  if (isLocalImage(project.image)) {
    const width = Number(project.width);
    const height = Number(project.height);
    const alt = t("project." + project.id + ".alt", lang) || t("project." + project.id + ".title", lang);
    const link = document.createElement("a");
    link.className = "shot";
    link.href = project.image;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", alt + " (" + t("link.newTab", lang) + ")");
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = alt;
    if (width > 0) img.setAttribute("width", String(width));
    if (height > 0) img.setAttribute("height", String(height));
    img.setAttribute("loading", "lazy");
    img.setAttribute("decoding", "async");
    if (width > 0 && height > 0 && width / height > 2.2) {
      img.className = "is-wide";
    }
    link.appendChild(img);
    const hint = document.createElement("span");
    hint.className = "visually-hidden";
    hint.textContent = " (" + t("link.newTab", lang) + ")";
    link.appendChild(hint);
    article.appendChild(link);
  } else {
    const placeholder = document.createElement("div");
    placeholder.className = "shot-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    const badge = document.createElement("span");
    badge.className = "placeholder-badge";
    badge.appendChild(svgIcon(project.icon));
    placeholder.appendChild(badge);
    article.appendChild(placeholder);
  }

  const body = document.createElement("div");
  body.className = "project-body";

  const title = document.createElement("h3");
  const titleText = t("project." + project.id + ".title", lang);
  title.textContent = titleText || project.id;
  body.appendChild(title);

  const summary = document.createElement("p");
  summary.textContent = t("project." + project.id + ".summary", lang);
  body.appendChild(summary);

  const tags = document.createElement("ul");
  tags.className = "tags";
  const tagList = Array.isArray(project.tags) ? project.tags : [];
  tagList.forEach(function (tag) {
    if (typeof tag !== "string" || tag === "") return;
    const li = document.createElement("li");
    li.textContent = tag;
    tags.appendChild(li);
  });
  body.appendChild(tags);

  const actions = document.createElement("div");
  actions.className = "actions";
  if (isHttps(project.repo)) {
    actions.appendChild(textLink(project.repo, t("link.code", lang), "btn", lang, true));
  }
  if (isHttps(project.demo)) {
    actions.appendChild(textLink(project.demo, t("link.demo", lang), "btn btn-primary", lang, true));
  }
  body.appendChild(actions);

  article.appendChild(body);
  return article;
}

function renderProjects(lang) {
  const grid = document.getElementById("project-grid");
  if (!grid || !Array.isArray(PROJECTS)) return;
  const fragment = document.createDocumentFragment();
  PROJECTS.forEach(function (project) {
    const card = buildProject(project, lang);
    if (card) fragment.appendChild(card);
  });
  clearNode(grid);
  grid.appendChild(fragment);
}

function applyLanguage(lang, persist) {
  if (lang !== "vi" && lang !== "en") return;

  document.documentElement.lang = lang;
  document.title = t("meta.title", lang);

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t("meta.description", lang));

  document.querySelectorAll("[data-i18n]").forEach(function (node) {
    node.textContent = t(node.getAttribute("data-i18n"), lang);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
    node.setAttribute("aria-label", t(node.getAttribute("data-i18n-aria"), lang));
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
    node.alt = t(node.getAttribute("data-i18n-alt"), lang);
  });

  const owner = typeof CONFIG.name === "string" ? CONFIG.name : "";
  document.querySelectorAll("[data-config='name']").forEach(function (node) {
    node.textContent = owner;
  });
  const footerCopy = document.getElementById("footer-copy");
  if (footerCopy) {
    footerCopy.textContent = t("footer.copy", lang).split("{name}").join(owner);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === lang ? "true" : "false");
  });

  renderAvatar(lang);
  renderProjects(lang);
  renderContacts(lang);

  if (persist) {
    rememberLang(lang);
    const status = document.getElementById("lang-status");
    if (status) status.textContent = t("lang.now", lang);
  }
}

function init() {
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const chosen = btn.getAttribute("data-lang");
      if (chosen === "vi" || chosen === "en") applyLanguage(chosen, true);
    });
  });
  applyLanguage(preferredLang(), false);
}

init();
