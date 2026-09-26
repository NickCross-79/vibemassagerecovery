// Assembles the static HTML pages from src/ into the repo root.
// Usage: node src/build.mjs
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { page } from "./partials.mjs";
import * as home from "./pages/home.mjs";
import * as services from "./pages/services.mjs";
import * as about from "./pages/about.mjs";
import * as billing from "./pages/billing.mjs";
import * as contact from "./pages/contact.mjs";
import * as styleguide from "./pages/styleguide.mjs";

const out = join(dirname(fileURLToPath(import.meta.url)), "..");

const pages = [
  {
    file: "index.html", module: home, active: "index.html",
    title: "Vibe Massage & Recovery | Registered Massage Therapy in Amherstburg, ON",
    description: "Personalized massage therapy in a calm, welcoming space in Amherstburg, Ontario. Swedish, deep tissue and cupping massage with Thomas Nahdee, RMT. Direct billing available.",
  },
  {
    file: "services.html", module: services, active: "services.html",
    title: "Services & Pricing | Vibe Massage & Recovery, Amherstburg",
    description: "Swedish / deep tissue massage from $60, 90-minute therapeutic massage, and massage + cupping. Clear pricing and direct billing in Amherstburg, Ontario.",
  },
  {
    file: "about.html", module: about, active: "about.html",
    title: "About Thomas Nahdee, RMT | Vibe Massage & Recovery",
    description: "Meet Thomas Nahdee, Registered Massage Therapist with six years of experience, specializing in deep tissue massage and cupping therapy.",
  },
  {
    file: "billing.html", module: billing, active: "billing.html",
    title: "Direct Billing & FAQ | Vibe Massage & Recovery",
    description: "Direct billing to Green Shield, Sun Life, TELUS Health and Blue Cross. Payment, referral and cancellation information for Vibe Massage & Recovery.",
  },
  {
    file: "contact.html", module: contact, active: "contact.html",
    title: "Contact & Location | Vibe Massage & Recovery, Amherstburg",
    description: "285 Sandwich St South, Amherstburg, Ontario. Call 519-713-9682. Open 8:00 AM – 9:00 PM. Parking at the back of the building.",
  },
  {
    file: "styleguide.html", module: styleguide, active: "",
    title: "Style Guide | Vibe Massage & Recovery",
    description: "Design system for the Vibe Massage & Recovery website.",
  },
];

for (const p of pages) {
  writeFileSync(join(out, p.file), page({ ...p, path: p.file, body: p.module.body }));
  console.log("built", p.file);
}
