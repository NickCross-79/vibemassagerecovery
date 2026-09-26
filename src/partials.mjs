// Shared markup used to assemble the static pages.
export const PHONE = "519-713-9682";
export const TEL = "tel:+15197139682";
export const SMS = "sms:+15197139682";
export const EMAIL = "Vibemassageandrecovery@gmail.com";
export const MAILTO = "mailto:Vibemassageandrecovery@gmail.com";
export const MAPS = "https://www.google.com/maps/search/?api=1&query=285+Sandwich+St+S%2C+Amherstburg%2C+ON";

export const i = (name, cls = "") => `<svg${cls ? ` class="${cls}"` : ""} aria-hidden="true"><use href="#i-${name}"/></svg>`;

const sym = (id, body) =>
  `<symbol id="i-${id}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${body}</symbol>`;

export const sprite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
${sym("phone", '<path d="M5 3.5h3l1.6 4.2-2 1.3a11 11 0 0 0 7.4 7.4l1.3-2 4.2 1.6v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5Z"/>')}
${sym("mail", '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>')}
${sym("pin", '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>')}
${sym("clock", '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>')}
${sym("arrow", '<path d="M5 12h14M13 6l6 6-6 6"/>')}
${sym("arrow-up-right", '<path d="M7 17 17 7M8 7h9v9"/>')}
${sym("check", '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.7 2.7L16.5 9.5"/>')}
${sym("leaf", '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19c3-4 6-6.5 10-8"/>')}
${sym("calendar", '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>')}
${sym("user", '<circle cx="12" cy="8" r="3.8"/><path d="M4.5 20.5c1.2-3.8 4-5.8 7.5-5.8s6.3 2 7.5 5.8"/>')}
${sym("shield", '<path d="M12 3 5 6v5.5c0 4.5 3 8 7 9.5 4-1.5 7-5 7-9.5V6l-7-3Z"/><path d="m9 12 2.2 2.2L15.5 10"/>')}
${sym("heart", '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7.5 2.8C19.5 15.4 12 20 12 20Z"/>')}
${sym("move", '<path d="M4 17c3 0 4-2 5-5s2-5 5-5h6"/><path d="m17 4 3 3-3 3"/><circle cx="5" cy="17" r="1.5"/>')}
${sym("refresh", '<path d="M20 11a8 8 0 0 0-14.3-4.3L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 13a8 8 0 0 0 14.3 4.3L20 15.5"/><path d="M20 20v-4.5h-4.5"/>')}
${sym("chat", '<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4A8 8 0 1 1 20 12Z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" stroke-width="2.4"/>')}
${sym("clipboard", '<rect x="5" y="4.5" width="14" height="16.5" rx="2.5"/><path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 13.5h7M8.5 17h4"/>')}
${sym("home", '<path d="M4 11 12 4l8 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5h4v5"/>')}
${sym("car", '<path d="M5 16V11l2-5h10l2 5v5"/><path d="M4 16h16v2.5H4z"/><circle cx="7.5" cy="13" r=".6"/><circle cx="16.5" cy="13" r=".6"/>')}
${sym("door", '<path d="M3 21h18"/><path d="M6 21V4h12v17"/><circle cx="14.5" cy="12.5" r=".8"/>')}
${sym("card", '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="M3 10h18M7 15h4"/>')}
${sym("camera", '<path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.2"/>')}
${sym("info", '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.8h.01" stroke-width="2"/>')}
${sym("close", '<path d="M6 6l12 12M18 6 6 18"/>')}
${sym("sparkle", '<path d="M12 3.5c.6 4.2 2.3 5.9 6.5 6.5-4.2.6-5.9 2.3-6.5 6.5-.6-4.2-2.3-5.9-6.5-6.5 4.2-.6 5.9-2.3 6.5-6.5Z"/><path d="M18.5 16.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z"/>')}
${sym("instagram", '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8h.01" stroke-width="2.4"/>')}
${sym("facebook", '<path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4a21 21 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.1H8.7v3h2.6V21"/>')}
</svg>`;

// Placeholder mark — replace with the official Vibe logo (assets/img/logo.svg) when supplied.
export const logoMark = `<svg class="brand__mark" viewBox="0 0 48 48" aria-hidden="true">
  <circle cx="24" cy="24" r="24" fill="#d7e0cc"/>
  <path d="M23.4 37C15.5 31.5 11 22 12.6 11.5c7.2 3.6 11.4 12.4 10.8 25.5Z" fill="#563b29"/>
  <path d="M24.6 37C32.5 31.5 37 22 35.4 11.5 28.2 15.1 24 23.9 24.6 37Z" fill="#6c8260"/>
</svg>`;

export const brand = (href = "index.html") => `<a class="brand" href="${href}" aria-label="Vibe Massage &amp; Recovery — home">
  ${logoMark}
  <span class="brand__text"><span class="brand__name">Vibe</span><span class="brand__sub">Massage &amp; Recovery</span></span>
</a>`;

const NAV = [
  ["index.html", "Home"],
  ["services.html", "Services"],
  ["about.html", "About"],
  ["billing.html", "Direct Billing"],
  ["contact.html", "Contact"],
];
const cur = (active, href) => (active === href ? ' aria-current="page"' : "");

export const head = ({ title, description, path }) => `<!doctype html>
<html lang="en-CA" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="theme-color" content="#f6f5f0">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:locale" content="en_CA">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,0..100;1,9..144,300..600,0..100&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/styles.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": "Vibe Massage & Recovery",
    "telephone": "+1-519-713-9682",
    "email": "Vibemassageandrecovery@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "285 Sandwich St South",
      "addressLocality": "Amherstburg",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "paymentAccepted": "E-transfer"
  }
  </script>
</head>
<body data-page="${path}">
<a class="skip-link" href="#main">Skip to content</a>
${sprite}
`;

export const header = (active) => `<header class="site-header">
  <div class="container nav">
    ${brand()}
    <nav class="nav__links" aria-label="Main">
      ${NAV.map(([h, l]) => `<a href="${h}"${cur(active, h)}>${l}</a>`).join("\n      ")}
    </nav>
    <a class="nav__phone" href="${TEL}">${i("phone")}${PHONE}</a>
    <a class="btn btn--sm nav__book" href="contact.html#book" data-book><span class="long">Book an Appointment</span><span class="short">Book</span></a>
    <button class="menu-toggle" type="button" aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu"><span></span></button>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu">
  <nav aria-label="Mobile">
    ${NAV.map(([h, l]) => `<a href="${h}"${cur(active, h)}>${l}${i("arrow")}</a>`).join("\n    ")}
  </nav>
  <a class="btn btn--block" href="contact.html#book" data-book>Book an Appointment ${i("arrow")}</a>
  <div class="mobile-menu__contact">
    <a href="${TEL}">${i("phone")}${PHONE}</a>
    <a href="${MAILTO}">${i("mail")}${EMAIL}</a>
    <a href="${MAPS}" target="_blank" rel="noopener">${i("pin")}285 Sandwich St South, Amherstburg</a>
  </div>
</div>
`;

export const blob = (cls, d = 1) => {
  const paths = [
    "M421 60c68 38 108 124 96 205-12 80-76 156-160 185-84 30-188 13-250-47C45 343 26 244 58 168 90 92 173 38 256 30c56-5 115 2 165 30Z",
    "M437 118c43 61 52 150 13 214-39 65-127 106-212 104-86-2-169-47-203-117-35-70-21-164 36-221 57-58 157-78 236-61 55 12 97 34 130 81Z",
  ];
  return `<svg class="organic ${cls}" viewBox="0 0 540 480" aria-hidden="true"><path fill="currentColor" d="${paths[d - 1]}"/></svg>`;
};

export const ph = (label, variant = "") =>
  `<div class="ph${variant ? ` ph--${variant}` : ""}" role="img" aria-label="${label}"><span class="ph__label">${i("camera")}Photo placeholder · ${label}</span></div>`;

export const ctaBand = (heading = "Ready to <em>find your Vibe?</em>") => `<section class="section section--tight" aria-labelledby="cta-title">
  <div class="container">
    <div class="cta-band reveal">
      ${blob("cta-band__blob", 1)}
      ${blob("cta-band__blob cta-band__blob--2", 2)}
      <div class="cta-band__inner">
        <div>
          <p class="eyebrow">Book your appointment</p>
          <h2 class="h2" id="cta-title">${heading}</h2>
        </div>
        <div>
          <p>Choose a time that works for you. Your health history form will be sent by email or text after you book.</p>
          <div class="btn-row btn-row--stack" style="margin-top:22px">
            <a class="btn btn--sage" href="contact.html#book" data-book>Book an Appointment ${i("arrow")}</a>
            <a class="btn btn--ghost-light" href="${TEL}">${i("phone")} Call ${PHONE}</a>
          </div>
          <div class="cta-band__meta"><span>285 Sandwich St South, Amherstburg</span><span>8:00 AM – 9:00 PM</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`;

export const footer = `<footer class="site-footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        ${brand()}
        <p>Personalized massage therapy in a calm, welcoming space in Amherstburg, Ontario. Feel better, move better, and recover — at your own pace.</p>
        <div class="social">
          <!-- TODO: add the real Facebook and Instagram profile URLs -->
          <a href="#" aria-label="Vibe Massage &amp; Recovery on Facebook (link coming soon)">${i("facebook")}</a>
          <a href="#" aria-label="Vibe Massage &amp; Recovery on Instagram (link coming soon)">${i("instagram")}</a>
        </div>
      </div>
      <div>
        <p class="footer__h">Explore</p>
        <ul class="footer__links">
          ${NAV.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("\n          ")}
          <li><a href="contact.html#book" data-book>Book an Appointment</a></li>
        </ul>
      </div>
      <div>
        <p class="footer__h">Visit</p>
        <ul class="footer__contact">
          <li>${i("pin")}<a href="${MAPS}" target="_blank" rel="noopener">285 Sandwich St South<br>Amherstburg, Ontario</a></li>
          <li>${i("phone")}<a href="${TEL}">${PHONE}</a></li>
          <li>${i("mail")}<a href="${MAILTO}" style="overflow-wrap:anywhere">${EMAIL}</a></li>
          <li>${i("clock")}<span>8:00 AM – 9:00 PM</span></li>
        </ul>
      </div>
      <div class="footer__policy">
        <p class="footer__h">Good to know</p>
        <p><strong style="color:var(--paper)">Direct billing</strong> to Green Shield, Sun Life, TELUS Health and Blue Cross.</p>
        <p><strong style="color:var(--paper)">Payment:</strong> E-transfer accepted.</p>
        <p><strong style="color:var(--paper)">Cancellations:</strong> 24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost.</p>
      </div>
    </div>
    <p class="footer__wordmark" aria-hidden="true">find your vibe</p>
    <div class="footer__bottom">
      <span>© <span data-year>2026</span> Vibe Massage &amp; Recovery · Amherstburg, Ontario</span>
      <span>Full terms and policies are available on our booking site.</span>
    </div>
  </div>
</footer>
`;

export const actionBar = `<div class="action-bar" aria-label="Quick actions">
  <a class="btn btn--secondary" href="${TEL}" aria-label="Call ${PHONE}">${i("phone")} Call</a>
  <a class="btn" href="contact.html#book" data-book>Book an Appointment</a>
</div>
`;

export const dialog = `<dialog class="book-dialog" id="book-dialog" aria-labelledby="book-dialog-title">
  <div class="book-dialog__head">
    <button class="book-dialog__close" type="button" data-close aria-label="Close">${i("close")}</button>
    <h2 class="h3" id="book-dialog-title">Book an Appointment</h2>
    <p>Pick the easiest way to reach us and we'll find a time that works.</p>
    <p class="book-dialog__service" data-book-service hidden>${i("leaf")}<span></span></p>
  </div>
  <div class="book-dialog__body">
    <div class="book-dialog__options">
      <!-- PLACEHOLDER: set BOOKING_URL in assets/js/main.js to send every Book button straight to the online booking site. -->
      <a class="book-opt book-opt--primary" href="#" aria-disabled="true" onclick="return false">
        <span class="ci">${i("calendar")}</span>
        <span><strong>Book online</strong><span>Online booking link coming soon <span class="placeholder-tag">Placeholder</span></span></span>
        ${i("arrow-up-right")}
      </a>
      <a class="book-opt" href="${TEL}">
        <span class="ci">${i("phone")}</span>
        <span><strong>Call</strong><span>${PHONE}</span></span>
        ${i("arrow")}
      </a>
      <a class="book-opt" href="${SMS}">
        <span class="ci">${i("chat")}</span>
        <span><strong>Text</strong><span>${PHONE}</span></span>
        ${i("arrow")}
      </a>
      <a class="book-opt" href="${MAILTO}?subject=Appointment%20request">
        <span class="ci">${i("mail")}</span>
        <span><strong>Email</strong><span>${EMAIL}</span></span>
        ${i("arrow")}
      </a>
    </div>
    <div class="book-dialog__fine">
      <p><strong>After booking,</strong> a health history form will be emailed or texted to you. Please complete the form before your appointment.</p>
      <p><strong>Payment:</strong> E-transfer accepted. Direct billing available.</p>
      <p><strong>Cancellations:</strong> 24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost.</p>
    </div>
  </div>
</dialog>
`;

export const close = `<script src="assets/js/main.js" defer></script>
</body>
</html>
`;

export const page = ({ title, description, path, active, body }) =>
  head({ title, description, path }) + header(active) + `<main id="main">\n${body}\n</main>\n` + footer + actionBar + dialog + close;
