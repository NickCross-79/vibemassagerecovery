// Assembles the static HTML pages from src/ into the repo root, plus
// robots.txt and (once SITE_URL is set in src/seo.mjs) sitemap.xml.
// Usage: node src/build.mjs
import { writeFileSync, rmSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { page, i } from "./partials.mjs";
import { SITE_URL, business, website, breadcrumbs, people, faqPage, jsonLd, robotsTxt, sitemapXml } from "./seo.mjs";
import * as home from "./pages/home.mjs";
import * as services from "./pages/services.mjs";
import * as about from "./pages/about.mjs";
import * as billing from "./pages/billing.mjs";
import * as contact from "./pages/contact.mjs";
import * as styleguide from "./pages/styleguide.mjs";

const out = join(dirname(fileURLToPath(import.meta.url)), "..");
const stripTags = (html) => html.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");

const notFound = {
  body: `
<section class="page-hero" aria-labelledby="page-title">
  <div class="container">
    <h1 class="display" id="page-title"><span class="eyebrow">Page not found</span>This page has <em>moved on</em></h1>
    <p class="lede">The page you're looking for doesn't exist. Try one of these instead:</p>
    <div class="btn-row" style="margin-top:26px">
      <a class="btn" href="index.html">Home ${i("arrow")}</a>
      <a class="btn btn--secondary" href="services.html">Services &amp; pricing</a>
      <a class="btn btn--secondary" href="contact.html">Contact &amp; location</a>
    </div>
  </div>
</section>`,
};

// Titles stay under ~65 characters and descriptions under ~160 so search
// results show them in full. Each page targets one search intent.
const pages = [
  {
    file: "index.html", module: home, active: "index.html", label: "Home",
    title: "Massage Therapy in Amherstburg, ON | Vibe Massage & Recovery",
    description: "Registered massage therapy in Amherstburg, Ontario: Swedish, deep tissue, cupping, prenatal and postnatal massage. Direct billing. Open Mon–Sat. Book online.",
    schema: () => [business(), website()],
  },
  {
    file: "services.html", module: services, active: "services.html", label: "Services & Pricing",
    title: "Massage Services & Prices in Amherstburg | Vibe Massage & Recovery",
    description: "Massage prices in Amherstburg: Swedish / deep tissue from $60, 90-min therapeutic $165, massage + cupping from $85, prenatal and postnatal from $80.",
    schema: () => [business(services.SERVICES), breadcrumbs("services.html", "Services & Pricing")],
  },
  {
    file: "about.html", module: about, active: "about.html", label: "About",
    title: "Our RMTs: Thomas Nahdee & Chantelle Marcoux | Vibe Massage & Recovery",
    description: "Meet our Registered Massage Therapists in Amherstburg: Thomas Nahdee (deep tissue, cupping) and Chantelle Marcoux, RMT since 2009 (prenatal & postpartum care).",
    schema: () => [business(), ...people(), breadcrumbs("about.html", "About")],
  },
  {
    file: "billing.html", module: billing, active: "billing.html", label: "Direct Billing",
    title: "Massage Direct Billing & FAQ, Amherstburg | Vibe Massage & Recovery",
    description: "We direct bill Green Shield, Sun Life, TELUS Health and Blue Cross for massage therapy in Amherstburg. Answers on payment, referrals, booking and cancellations.",
    schema: () => [business(), faqPage(billing.faq, stripTags), breadcrumbs("billing.html", "Direct Billing")],
  },
  {
    file: "contact.html", module: contact, active: "contact.html", label: "Contact",
    title: "Contact & Directions | Vibe Massage & Recovery, Amherstburg",
    description: "Vibe Massage & Recovery, 285 Sandwich St South, Amherstburg, ON. Call or text 519-713-9682. Open Monday–Saturday, 8 AM – 9 PM. Parking at the back.",
    schema: () => [business(), breadcrumbs("contact.html", "Contact")],
  },
  {
    file: "styleguide.html", module: styleguide, active: "", noindex: true,
    title: "Style Guide | Vibe Massage & Recovery",
    description: "Design system for the Vibe Massage & Recovery website.",
  },
  {
    file: "404.html", module: notFound, active: "", noindex: true,
    title: "Page Not Found | Vibe Massage & Recovery",
    description: "The page you're looking for doesn't exist.",
  },
];

for (const p of pages) {
  const html = page({
    ...p,
    path: p.file,
    body: p.module.body,
    robots: p.noindex ? "noindex, follow" : "",
    schema: p.schema ? jsonLd(p.schema()) : "",
  });
  writeFileSync(join(out, p.file), html);
  console.log("built", p.file);
}

writeFileSync(join(out, "robots.txt"), robotsTxt());
console.log("built robots.txt");

const sitemapPath = join(out, "sitemap.xml");
if (SITE_URL) {
  const lastmod = new Date().toISOString().slice(0, 10);
  writeFileSync(sitemapPath, sitemapXml(pages.filter((p) => !p.noindex).map((p) => ({ file: p.file, lastmod }))));
  console.log("built sitemap.xml");
} else {
  if (existsSync(sitemapPath)) rmSync(sitemapPath);
  console.log("skipped sitemap.xml (set SITE_URL in src/seo.mjs)");
}
