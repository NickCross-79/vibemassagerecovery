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

## Placeholders to replace before launch

Items marked with a yellow **Placeholder** tag or a `TODO` / `PLACEHOLDER` comment:

1. **Booking link.** Set `BOOKING_URL` at the top of `assets/js/main.js`. Every "Book an Appointment" / "Book this service" button then goes straight to the online booking site. Until then they open a panel with call, text and email options.
2. **Photography.** Each image slot is a labelled `<div class="ph">`. Replace it with `<img src="assets/img/photo.jpg" alt="…">` inside the same `.frame` element and the crop is kept. Needed: portraits of Thomas and Chantelle, treatment photos (massage, cupping), the treatment room, and movement/recovery imagery.
3. **Map.** Replace the illustrated map block (in `src/pages/home.mjs`, `locationSection`) with a Google Maps embed `<iframe>`.
4. **Social links.** Add the Facebook and Instagram URLs (search for `TODO` in `src/`).
5. **Days open.** Hours are shown as 8:00 AM – 9:00 PM; confirm which days, then remove the "Confirm days open" tag.

## Content rules followed

No reviews, statistics, awards, extra services, extra therapists, accessibility claims or medical claims have been added. Insurance wording includes the provider disclaimer, and the only accessibility statement is that the clinic is on the main floor.
