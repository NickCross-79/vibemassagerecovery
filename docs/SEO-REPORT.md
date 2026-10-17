# SEO audit & implementation report — Vibe Massage & Recovery

Date: 2026-10-17 · Scope: the static site in this repository (5 public pages + style guide).

## 1. Executive summary

The site was technically clean (valid HTML, one H1 per page, no broken links, mobile-friendly) but had four gaps that limit search visibility: **no canonical/sitemap/robots setup**, **minimal structured data**, **page titles and H1s that did not name the service or town**, and **slow first paint on mobile** (about 3.3 s render-blocking from Google Fonts).

All of these have been fixed where possible without a live domain. Lighthouse (mobile, simulated Slow 4G) went from **65–76 to 95** for performance and from **91–93 to 100** for accessibility on every page.

**The most important remaining step is the domain.** The site is not live yet: GitHub Pages returns 404 and no domain was found. Canonical URLs, the XML sitemap, `og:url`/`og:image` and absolute URLs in structured data are built and tested, but switched off until `SITE_URL` is set in `src/seo.mjs` (see §6, item 1).

## 2. Changes implemented

| Area | Change | Files |
| --- | --- | --- |
| Titles & descriptions | Rewritten per page around one search intent each (see keyword map, §7). All titles ≤ 69 characters, descriptions ≤ 160. | `src/build.mjs` |
| H1s | Each H1 now begins with a visible keyword label (e.g. "Massage services & pricing · Amherstburg") styled like the existing eyebrow, so the brand headline stays the same. The home hero's location pill moved inside the H1. | `src/pages/*.mjs`, `styles.css` |
| Home intro | Lede now says "registered massage therapy … in Amherstburg" and mentions pregnancy. | `src/pages/home.mjs` |
| Internal links | Home service names link to their section on the Services page. Chantelle's bio links to prenatal/postnatal pricing. The FAQ links to services and booking. | `home.mjs`, `about.mjs`, `billing.mjs` |
| FAQ | Added two genuine questions: prenatal/postnatal availability and how to book. | `src/pages/billing.mjs` |
| Canonical / robots | Canonical on indexable pages, `noindex, follow` on the style guide and 404 page, `robots.txt` generated. All of this is driven by `SITE_URL`. | `src/seo.mjs`, `src/partials.mjs`, `robots.txt` |
| Sitemap | `sitemap.xml` generated with the 5 indexable pages once `SITE_URL` is set. | `src/build.mjs` |
| 404 page | New `404.html` with links back to Home, Services and Contact (uses `<base>` once `SITE_URL` is set so assets load from any path). | `src/build.mjs` |
| Social sharing | `og:site_name`, Twitter card, a 1200×630 share image (`assets/img/og-image.png`) and `og:url`/`og:image` (domain-dependent). Added an apple-touch-icon. | `src/partials.mjs`, `assets/img/` |
| Structured data | Replaced the minimal block with an `@graph`: a `HealthAndBeautyBusiness` (address with postal code, geo from the Google listing, map link, hours, price range, payment, booking action, both RMTs) on every page. Also a full price list as `OfferCatalog` (Services page), `Person` entries (About), `FAQPage` (Billing), and `WebSite` + `BreadcrumbList` (once `SITE_URL` is set). Prices come from the same data as the visible price tables. | `src/seo.mjs`, `src/pages/services.mjs` |
| Fonts | Google Fonts replaced with self-hosted WOFF2 files (Latin subset, preloaded). Fraunces weight axis trimmed to the 300–600 range the CSS uses; rendering was verified identical. This removes the third-party render-blocking request. | `assets/fonts/`, `styles.css` |
| Logo SVGs | Optimised with SVGO: 178 KB → 45 KB total, visually checked. Footer logo lazy-loads. | `assets/img/*.svg` |
| Accessibility | The decorative footer "find your vibe" text moved to CSS so it isn't read as low-contrast text, and the footer booking-site link is underlined. | `partials.mjs`, `styles.css` |

## 3. Before and after (measured)

Lighthouse 12, mobile emulation, simulated throttling. "Before" was measured on a plain local server; "after" adds Brotli compression and caching headers to match typical static hosting.

| Page | Perf before → after | A11y | SEO | LCP before → after | FCP before → after | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| Home | 74 → 95 | 93 → 100 | 100 → 100 | 4.3 s → 2.7 s | 4.1 s → 1.7 s | 0 |
| Services | 76 → 95 | 92 → 100 | 100 → 100 | 4.2 s → 2.7 s | 4.1 s → 1.7 s | 0 |
| About | 74 → 95 | 93 → 100 | 100 → 100 | 4.4 s → 2.7 s | 4.2 s → 1.7 s | 0.001 → 0 |
| Billing | 76 → 95 | 91 → 100 | 100 → 100 | 4.2 s → 2.8 s | 4.1 s → 1.8 s | 0.003 |
| Contact | 65 → 95 | 92 → 100 | 100 → 100 | 7.0 s → 2.8 s | 4.1 s → 1.7 s | 0 |

On the same uncompressed server as the baseline, performance was 91–92 (LCP 3.2 s). The Lighthouse SEO score was already 100; it only checks basics, and the improvements above go beyond what it measures. INP can't be measured in a lab, but total blocking time is 0 ms and the site ships one small script.

**Other checks run:** every structured-data type and property was checked against the current schema.org vocabulary (0 errors), with and without a test `SITE_URL`. Every internal link and `#anchor` resolves, there are no duplicate IDs or console errors, there is no horizontal overflow at 390 px, each page has one H1, and every image has `alt`. The booking pop-up still opens and links to ClinicSense.

## 4. Remaining issues

- **No domain / not deployed (critical).** Without it there are no canonical URLs, no sitemap and no share image in link previews, and nothing can be indexed.
- **Photos are placeholders (high).** Real photos (treatment, room, portraits) improve engagement and image search. Use descriptive file names and `alt` text, WebP/AVIF at about 1600 px wide, and `fetchpriority="high"` on the home hero photo, which will become the LCP element.
- **Hero card "6 years of experience · Deep tissue & cupping" (medium).** It describes Thomas only but reads as clinic-wide. Wording to be decided by the owner.
- **Facebook link missing (low).** Instagram is now linked (footer, Contact page, `sameAs` in structured data). Facebook links were removed rather than left as dead `#` links; add the page URL when available.
- **Prenatal description is truncated (low).** Waiting on the full ClinicSense text.
- **LCP of about 2.7 s on simulated Slow 4G (low).** This is just above the 2.5 s "good" mark, and the remaining cost is the display font (105 KB). Real-user data from Search Console after launch will show whether it matters.

## 5. Unverified items

- **Keyword data:** no keyword tool was available (Search Console, Ahrefs, Semrush), so there are no verified search volumes. The keyword map is based on search intent and the local results seen, not volume data.
- **Competitors:** identified from web search results only; their sites weren't audited in depth. Seen: Pure Massage Therapy (258 Dalhousie St), Revitalize Massage Therapy, Heavenly Holistics (174 Sandwich St S), The Good Stuff, Team Rehab and Dr. Patrick Lovell, plus Medimap's Amherstburg directory. Several appear to rely on booking-platform pages (Jane, ClinicSense) rather than full websites. That suggests a real content site has room to compete locally, but it's an observation, not a measurement.
- **Backlinks:** no backlink tool or data was available, so no backlink analysis was done.
- **Google rich-result eligibility:** the markup is valid schema.org, but it couldn't be run through Google's Rich Results Test because the site isn't public. Google decides whether to show rich results; FAQ rich results are currently limited to authoritative government and health sites.
- **Live production performance:** the measurements are lab data, not real users.

## 6. Outstanding recommendations (ranked)

| # | Recommendation | Impact | Effort | Urgency |
| --- | --- | --- | --- | --- |
| 1 | Deploy the site on HTTPS with a domain. Set `SITE_URL` in `src/seo.mjs`, run `node src/build.mjs`, and redirect `http→https` and `www`/non-www to one version. | Critical | Low | Now |
| 2 | **Google Business Profile:** confirm category "Massage therapist", add the website URL once live, the services with prices, hours, booking link (ClinicSense) and real photos. Post updates occasionally. | High | Low | At launch |
| 3 | Add Google Search Console and Bing Webmaster Tools, verify the domain, and submit `sitemap.xml`. | High | Low | At launch |
| 4 | **Reviews:** send the Google review link in ClinicSense's post-appointment follow-up. Never offer incentives or write reviews for clients, and reply to every review. | High | Low | Ongoing |
| 5 | **Consistent name, address and phone (citations):** Apple Business Connect, Bing Places, Medimap, insurer "find a provider" directories (Sun Life Lumino, Green Shield, TELUS, Blue Cross), Amherstburg Chamber of Commerce, Yelp. Use the exact same name, address, phone and hours everywhere. | Medium–High | Medium | First month |
| 6 | **Dedicated prenatal & postnatal page**, built from Chantelle's real expertise (what to expect, positioning, trimester considerations), once she supplies the content. This is the clearest local content gap seen in search. | Medium–High | Medium | 1–2 months |
| 7 | Real photography (see §4). | Medium | Medium | Before launch if possible |
| 8 | **Local links:** local partners (midwives, doulas, prenatal classes, gyms, sports clubs), local sponsorships, and the College of Massage Therapists of Ontario register profile for each RMT. | Medium | Medium | Ongoing |
| 9 | Optional: show the Google Map only when clicked (a static preview first) to save about 460 KB of Maps JavaScript on the Contact page. | Low | Low | Optional |

## 7. Keyword map (intent-based, volumes unverified)

| Page | Primary intent / focus | Supporting terms |
| --- | --- | --- |
| Home | massage therapy Amherstburg (local, commercial) | RMT Amherstburg, registered massage therapist Amherstburg ON |
| Services | massage prices Amherstburg (commercial) | deep tissue / Swedish massage, cupping massage, 90-minute massage, prenatal massage Amherstburg, postnatal massage |
| About | our RMTs (navigational, trust) | Thomas Nahdee RMT, Chantelle Marcoux RMT, prenatal massage therapist |
| Billing | massage direct billing Amherstburg (transactional) | Green Shield / Sun Life / TELUS Health / Blue Cross massage direct billing |
| Contact | massage clinic location and hours (navigational) | 285 Sandwich St S Amherstburg, parking |

Each page targets a different intent, so the pages don't compete with each other for the same searches.

## 8. Search Console & analytics

No access was available, and there is no analytics or Search Console on the site yet. After launch, these show what's actually working:

- **Search Console:** indexed vs. excluded pages, queries and their positions, click-through rate per page, Core Web Vitals from real users.
- **Analytics (GA4 or a privacy-friendly alternative):** clicks on "Book online" (outbound to ClinicSense), `tel:`/`sms:` taps and Get Directions clicks, tracked as conversions.

## 9. Monitoring plan

- **Days 0–30:** confirm all 5 pages are indexed and the sitemap was read without errors. Check that the name, address and phone match on Google Business Profile, and that branded searches show the site and the profile. Fix any crawl errors.
- **Days 30–60:** review the queries driving impressions. Find pages with many impressions but a low click-through rate and test new titles and descriptions. Check real-user Core Web Vitals. Track review count and response rate.
- **Days 60–90:** compare non-branded local queries ("massage Amherstburg", "prenatal massage Amherstburg") over time. Decide on the prenatal/postnatal page and any new content based on the actual queries. Review citations and local links gained.
