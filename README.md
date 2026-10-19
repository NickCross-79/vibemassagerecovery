# Vibe Massage & Recovery — website

A static, mobile-first website for Vibe Massage & Recovery (Amherstburg, Ontario). No framework or build step is needed to host it — upload the files to any static host (Netlify, GitHub Pages, Cloudflare Pages, etc.).

## Pages

| File | Contents |
| --- | --- |
| `index.html` | Home: hero, intro, services overview, why Vibe, therapists, direct billing, first appointment, location, final CTA |
| `services.html` | Full services and pricing, a book button for each service, payment and cancellation info |
| `about.html` | Thomas Nahdee, RMT and Chantelle Marcoux, RMT: bios, credentials, techniques, why Vibe |
| `billing.html` | Direct billing providers, referral info, insurance disclaimer, FAQ |
| `contact.html` | Address, tap-to-call and tap-to-email, hours, parking, map, booking options |
| `404.html` | Not-found page (noindex) |
| `styleguide.html` | Design system: colours, type, booking button states, navigation, placeholders, mobile previews (not linked from the site) |

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Editing

The HTML pages are generated from `src/` so the header, footer and booking panel stay the same on every page:

- Shared pieces (header, footer, booking panel, contact details, icons): `src/partials.mjs`
- Page content: `src/pages/*.mjs`
- Rebuild after editing: `node src/build.mjs`

Styles are in `assets/css/styles.css`; behaviour is in `assets/js/main.js`.

## Logo

The official logo was traced to SVG from `assets/img/logo-original.png`:

- `assets/img/logo.svg`: full stacked logo
- `assets/img/logo-mark.svg` / `logo-wordmark.svg`: the figure-and-V mark and the VIBE wordmark used in the header
- `-light` versions of each for dark backgrounds (footer, map pin)
- `assets/img/favicon.svg`: the mark on a light tile

Site colours in `styles.css` are matched to the logo's charcoal (`--brown-*` tokens) and sage (`--sage-*` tokens).

## SEO

- **Before launch:** set `SITE_URL` in `src/seo.mjs` to the live address (e.g. `https://www.example.ca`) and run `node src/build.mjs`. That turns on canonical URLs, `sitemap.xml`, the Sitemap line in `robots.txt`, social-share URLs and absolute URLs in the structured data.
- Page titles and descriptions live in `src/build.mjs`. Structured data (business details, hours, therapists, prices) lives in `src/seo.mjs`. Prices come from `SERVICES` in `src/pages/services.mjs`, so the price tables and the structured data stay in sync.
- Full audit, measurements and recommendations: `docs/SEO-REPORT.md`.
- Fonts are self-hosted in `assets/fonts/` (SIL Open Font License).

## Booking, hours and map

- **Booking:** every "Book" button opens the booking panel (`dialog` in `src/partials.mjs`) with Book online (ClinicSense), Call, Text and Email. Without JavaScript the buttons link straight to the ClinicSense booking site.
- **Hours:** Monday – Saturday, 8:00 AM – 9:00 PM; closed Sunday.
- **Map:** a Google Maps embed of the address, in `locationSection` in `src/pages/home.mjs`.

## Placeholders to replace before launch

Items marked with a yellow **Placeholder** tag or a `TODO` / `PLACEHOLDER` comment:

1. **Photography.** The photo placeholders were removed for launch. To add photos: put the image in `assets/img/` and use `<img src="assets/img/photo.jpg" alt="…">` inside a `.frame` element. Spots planned for photos: the home hero (currently the logo panel in `src/pages/home.mjs`), a portrait on each therapist card and About section, one photo per service in `src/pages/services.mjs`, and the treatment room in `src/pages/about.mjs`. Reverting the "Remove photo placeholders for launch" commit restores the original photo layout.
2. **Facebook.** Instagram is linked. Add the Facebook page URL when there is one (search for `TODO` in `src/partials.mjs`), plus it in `sameAs` in `src/seo.mjs`.

## Content rules followed

No reviews, statistics, awards, extra services, extra therapists, accessibility claims or medical claims have been added. Insurance wording includes the provider disclaimer, and the only accessibility statement is that the clinic is on the main floor.
