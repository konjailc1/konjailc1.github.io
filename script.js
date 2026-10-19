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
    vi: "Quang Do Hong — Tự động hóa và dữ liệu bằng Python",
    en: "Quang Do Hong — Python automation and data"
  },
  "meta.description": {
    vi: "Freelancer Python cho doanh nghiệp nhỏ. Tôi thu thập dữ liệu web, làm sạch bảng tính, làm báo cáo Excel, đọc hóa đơn PDF và điền thông tin còn thiếu.",
    en: "Python freelancer for small businesses. I collect web data, clean spreadsheets, build Excel reports, read PDF invoices, and fill in missing details."
  },
  "skip": {
    vi: "Chuyển tới nội dung",
    en: "Skip to content"
  },
  "nav.label": {
    vi: "Các mục trên trang",
    en: "Page sections"
  },
  "nav.services": { vi: "Dịch vụ", en: "Services" },
  "nav.projects": { vi: "Dự án", en: "Projects" },
  "nav.process": { vi: "Cách làm việc", en: "How I work" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "lang.group": { vi: "Ngôn ngữ", en: "Language" },
  "lang.now": { vi: "Tiếng Việt", en: "English" },
  "hero.pitch": {
    vi: "Freelancer tự động hóa và dữ liệu bằng Python: thu thập dữ liệu web, làm sạch dữ liệu, báo cáo Excel, trích xuất PDF, bổ sung dữ liệu bằng AI.",
    en: "Python automation & data freelancer: web scraping, data cleaning, Excel reports, PDF extraction, AI data enrichment"
  },
  "hero.photoAlt": {
    vi: "Ảnh của Quang Do Hong",
    en: "Photo of Quang Do Hong"
  },
  "services.title": { vi: "Dịch vụ", en: "Services" },
  "services.lead": {
    vi: "Những việc dữ liệu lặp lại mà tôi có thể làm thay bạn.",
    en: "Repetitive data work I can take off your week."
  },
  "service.scrape.title": { vi: "Thu thập dữ liệu web", en: "Web data scraping" },
  "service.scrape.text": {
    vi: "Tôi lấy giá, danh sách sản phẩm hoặc tiêu đề tin từ trang web công khai và lưu vào Excel, để bạn không phải chép tay.",
    en: "I collect public prices, product lists, or headlines from a website and save them in Excel, so you do not have to copy them by hand."
  },
  "service.clean.title": { vi: "Làm sạch dữ liệu", en: "Data cleaning" },
  "service.clean.text": {
    vi: "Tôi biến bảng tính lộn xộn thành một bảng sạch. Tên, ngày, số điện thoại và số tiền đang ghi mỗi nơi một kiểu sẽ về cùng một dạng.",
    en: "I turn a messy spreadsheet into one clean table. Names, dates, phone numbers, and amounts that were typed in different ways all follow the same format."
  },
  "service.excel.title": { vi: "Tự động báo cáo Excel", en: "Excel report automation" },
  "service.excel.text": {
    vi: "Tôi biến file bán hàng thô thành báo cáo Excel gửi được ngay, có số tổng, biểu đồ và một đoạn tóm tắt ngắn.",
    en: "I turn a raw sales file into an Excel report ready to share, with totals, charts, and a short written summary."
  },
  "service.pdf.title": { vi: "Trích xuất hóa đơn PDF", en: "PDF invoice extraction" },
  "service.pdf.text": {
    vi: "Tôi đọc hóa đơn PDF, đưa các số liệu chính vào Excel, và đánh dấu tổng tiền hoặc mã số thuế nào không khớp.",
    en: "I read invoice PDFs, put the key figures into Excel, and mark any total or tax code that does not add up."
  },
  "service.ai.title": { vi: "Bổ sung dữ liệu bằng AI", en: "AI data enrichment" },
  "service.ai.text": {
    vi: "Tôi điền tên sản phẩm, địa chỉ và sắc thái nhận xét của khách, rồi giao một file Excel. Chỗ nào chưa chắc được đánh dấu để người kiểm tra.",
    en: "I fill in product names, addresses, and the tone of customer comments, then give you an Excel file where anything unsure is marked for a person to check."
  },
  "projects.title": { vi: "Dự án", en: "Projects" },
  "projects.lead": {
    vi: "Sáu công cụ đã làm xong. Bạn xem mã nguồn của từng công cụ, và dùng thử nếu có bản demo.",
    en: "Six finished tools. Open the code for any of them, and try the live demo where there is one."
  },
  "project.ai-data-enrichment.title": {
    vi: "Bổ sung dữ liệu bằng AI",
    en: "AI data enrichment"
  },
  "project.ai-data-enrichment.summary": {
    vi: "Bảng tính cửa hàng lộn xộn thành một file Excel sạch: giá và số điện thoại được chỉnh lại, tên sản phẩm, địa chỉ và sắc thái nhận xét của khách được điền thêm.",
    en: "A messy shop spreadsheet becomes a clean Excel file, with prices and phone numbers tidied and product names, addresses, and the tone of customer comments filled in."
  },
  "project.ai-data-enrichment.alt": {
    vi: "Dữ liệu cửa hàng mẫu trong bản demo, các dòng đã làm sạch và số dòng vẫn cần người kiểm tra.",
    en: "Sample shop data in the enrichment demo, with cleaned rows and a count of rows that still need a person to check."
  },
  "project.invoice-pdf-extractor.title": {
    vi: "Trích xuất hóa đơn PDF",
    en: "PDF invoice extraction"
  },
  "project.invoice-pdf-extractor.summary": {
    vi: "Một thư mục hóa đơn PDF thành một file Excel, hóa đơn nào có tổng tiền, thuế hoặc số tiền bằng chữ không khớp thì được đánh dấu để kiểm tra.",
    en: "A folder of PDF invoices becomes one Excel file, and any invoice whose total, tax, or amount in words does not match is marked for review."
  },
  "project.invoice-pdf-extractor.alt": {
    vi: "File Excel các hóa đơn lấy từ PDF, dòng lỗi được đánh dấu và lý do được ghi rõ.",
    en: "Excel workbook of invoices pulled from PDFs, with problem rows marked and the reasons listed."
  },
  "project.excel-report-automation.title": {
    vi: "Tự động báo cáo Excel",
    en: "Excel report automation"
  },
  "project.excel-report-automation.summary": {
    vi: "Danh sách bán hàng thô thành báo cáo Excel theo tuần, có số tổng, so với tuần trước, bảng tách nhóm, biểu đồ và một đoạn nhận xét bằng tiếng Việt và tiếng Anh.",
    en: "A flat sales list becomes a weekly Excel report with totals, a comparison to the week before, breakdowns, charts, and a short comment in Vietnamese and English."
  },
  "project.excel-report-automation.alt": {
    vi: "Báo cáo bán hàng theo tuần trong Excel, có số tổng, các vùng và nhận xét bằng tiếng Việt và tiếng Anh.",
    en: "Weekly sales report in Excel with headline totals, regions, and comments in Vietnamese and English."
  },
  "project.data-cleaning-toolkit.title": {
    vi: "Làm sạch dữ liệu",
    en: "Data cleaning"
  },
  "project.data-cleaning-toolkit.summary": {
    vi: "Đơn hàng ghi mỗi nơi một kiểu, từ tên, ngày, số tiền, thành phố, số điện thoại đến dòng bị trùng, thành một bảng sạch kèm ghi chú ngắn về từng thay đổi.",
    en: "Orders typed in different ways, including names, dates, amounts, cities, phone numbers, and duplicate rows, become one clean table plus a short note of every change."
  },
  "project.news-scraper.title": {
    vi: "Tiêu đề tin chứng khoán",
    en: "Stock news headlines"
  },
  "project.news-scraper.summary": {
    vi: "Tiêu đề trên trang chứng khoán CafeF được lưu vào Excel, gồm tiêu đề, đường dẫn, thời gian và đoạn tóm tắt ngắn, không chép nguyên bài viết.",
    en: "Headlines from the CafeF stock-market page are saved to Excel with the title, link, time, and a short summary, without copying the full articles."
  },
  "project.mykingdom-price-scraper.title": {
    vi: "Bảng giá MyKingdom",
    en: "MyKingdom price list"
  },
  "project.mykingdom-price-scraper.summary": {
    vi: "Giá đồ chơi, mức giảm và tình trạng còn hàng công khai trên MyKingdom được lưu vào Excel, để bạn đối chiếu với file lần sau.",
    en: "Public toy prices, discounts, and stock from the MyKingdom shop are saved to Excel, ready to compare with the next file you collect."
  },
  "process.title": { vi: "Cách làm việc", en: "How I work" },
  "process.lead": {
    vi: "Ba bước, từ một mẫu dữ liệu của bạn đến công cụ bạn tự chạy được.",
    en: "Three steps, from a sample of your data to a tool you can run."
  },
  "step.1.title": {
    vi: "Bạn gửi một mẫu dữ liệu",
    en: "You send a sample of your data"
  },
  "step.1.text": {
    vi: "Một bảng tính, vài file PDF, hoặc đường dẫn một trang công khai là đủ.",
    en: "A spreadsheet, a few PDFs, or a link to a public page is enough."
  },
  "step.2.title": {
    vi: "Tôi làm một bản chạy thử",
    en: "I build a working demo"
  },
  "step.2.text": {
    vi: "Bạn xem kết quả trên chính mẫu của mình trước khi công cụ được hoàn tất.",
    en: "You see the result on your own sample before the tool is finished."
  },
  "step.3.title": {
    vi: "Tôi giao công cụ hoàn chỉnh, kèm hướng dẫn và hỗ trợ",
    en: "I deliver the final tool with instructions and support"
  },
  "step.3.text": {
    vi: "Bạn nhận công cụ hoàn chỉnh, hướng dẫn dễ hiểu, và được hỗ trợ nếu cần chỉnh.",
    en: "You get the finished tool, plain instructions, and help if a change is needed."
  },
  "contact.title": { vi: "Liên hệ", en: "Contact" },
  "contact.lead": {
    vi: "Nếu một việc dữ liệu cứ lặp lại, hãy bắt đầu bằng một file mẫu.",
    en: "If a data task keeps coming back, start with a sample of your file."
  },
  "link.linkedin": { vi: "LinkedIn", en: "LinkedIn" },
  "link.upwork": { vi: "Upwork", en: "Upwork" },
  "link.vlance": { vi: "vLance", en: "vLance" },
  "link.github": { vi: "GitHub", en: "GitHub" },
  "link.email": { vi: "Email", en: "Email" },
  "link.code": { vi: "Mã nguồn", en: "Code" },
  "link.demo": { vi: "Dùng thử", en: "Live demo" },
  "link.newTab": { vi: "mở trong thẻ mới", en: "opens in a new tab" },
  "footer.copy": { vi: "© 2026 {name}", en: "© 2026 {name}" },
  "footer.note": {
    vi: "Làm bằng HTML và CSS, lưu trên GitHub Pages",
    en: "Built with HTML & CSS, hosted on GitHub Pages"
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
