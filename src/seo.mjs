// SEO settings and structured data (schema.org JSON-LD).
//
// SITE_URL — set this to the live address once the domain is connected,
// e.g. "https://www.vibemassageandrecovery.ca" (no trailing slash), then run
// `node src/build.mjs`. It switches on canonical URLs, og:url / og:image,
// the XML sitemap, the Sitemap line in robots.txt, and absolute URLs in the
// structured data. Leave it empty until the domain is known: wrong canonical
// URLs are worse than none.
export const SITE_URL = "";

export const BUSINESS = {
  name: "Vibe Massage & Recovery",
  phone: "+1-519-713-9682",
  email: "Vibemassageandrecovery@gmail.com",
  street: "285 Sandwich St South",
  city: "Amherstburg",
  region: "ON",
  postal: "N9V 2A7",
  country: "CA",
  // From the business's Google Maps listing
  lat: 42.1010026,
  lng: -83.108363,
  mapsCid: "https://maps.google.com/?cid=8364977269804153832",
  booking: "https://vibemassagerecovery.clinicsense.com/book/",
};

export const abs = (path = "") =>
  SITE_URL ? `${SITE_URL}/${path === "index.html" ? "" : path}` : null;

const id = (frag) => (SITE_URL ? { "@id": `${SITE_URL}/#${frag}` } : {});

const therapists = [
  {
    name: "Thomas Nahdee",
    anchor: "thomas",
    knowsAbout: ["Deep tissue massage", "Swedish massage", "Cupping therapy", "IASTM", "Trigger point therapy"],
  },
  {
    name: "Chantelle Marcoux",
    anchor: "chantelle",
    knowsAbout: ["Swedish massage", "Deep tissue massage", "Active release", "Prenatal massage", "Postnatal massage"],
  },
];

const person = (t, full = false) => ({
  "@type": "Person",
  ...(SITE_URL ? { "@id": `${SITE_URL}/about.html#${t.anchor}` } : {}),
  name: t.name,
  honorificSuffix: "RMT",
  jobTitle: "Registered Massage Therapist",
  ...(full
    ? {
        knowsAbout: t.knowsAbout,
        ...(SITE_URL ? { url: `${SITE_URL}/about.html#${t.anchor}` } : {}),
        worksFor: { "@type": "HealthAndBeautyBusiness", name: BUSINESS.name, ...id("business") },
      }
    : {}),
});

/** The business. `offers` adds the full price list (services page only). */
export const business = (offers) => ({
  "@type": "HealthAndBeautyBusiness",
  ...id("business"),
  name: BUSINESS.name,
  description:
    "Registered massage therapy clinic in Amherstburg, Ontario offering Swedish, deep tissue, therapeutic, cupping, prenatal and postnatal massage, with direct billing to Green Shield, Sun Life, TELUS Health and Blue Cross.",
  ...(SITE_URL
    ? { url: `${SITE_URL}/`, logo: `${SITE_URL}/assets/img/logo-original.png`, image: `${SITE_URL}/assets/img/og-image.png` }
    : {}),
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postal,
    addressCountry: BUSINESS.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.lat, longitude: BUSINESS.lng },
  hasMap: BUSINESS.mapsCid,
  sameAs: ["https://www.instagram.com/vibemassagenrecovery/", BUSINESS.mapsCid],
  areaServed: { "@type": "City", name: "Amherstburg, Ontario" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  priceRange: "$60–$165",
  currenciesAccepted: "CAD",
  paymentAccepted: "E-transfer, direct billing (Green Shield, Sun Life, TELUS Health, Blue Cross)",
  potentialAction: { "@type": "ReserveAction", target: BUSINESS.booking, name: "Book an appointment" },
  employee: therapists.map((t) => person(t)),
  ...(offers
    ? {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Massage therapy services",
          itemListElement: offers.flatMap((s) =>
            s.prices.map(([min, price]) => ({
              "@type": "Offer",
              name: `${s.name}, ${min} minutes`,
              price: String(price),
              priceCurrency: "CAD",
              itemOffered: { "@type": "Service", name: s.name, serviceType: "Massage therapy", description: s.description },
            }))
          ),
        },
      }
    : {}),
});

export const website = () =>
  SITE_URL ? { "@type": "WebSite", ...id("website"), url: `${SITE_URL}/`, name: BUSINESS.name, inLanguage: "en-CA", publisher: id("business") } : null;

export const breadcrumbs = (path, label) =>
  SITE_URL && path !== "index.html"
    ? {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: label, item: `${SITE_URL}/${path}` },
        ],
      }
    : null;

export const people = () => therapists.map((t) => person(t, true));

export const faqPage = (faq, strip) => ({
  "@type": "FAQPage",
  mainEntity: faq.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: strip(a) },
  })),
});

export const jsonLd = (nodes) => {
  const graph = nodes.filter(Boolean);
  if (!graph.length) return "";
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2).replace(/</g, "\\u003c");
  return `<script type="application/ld+json">\n${json}\n</script>`;
};

export const robotsTxt = () =>
  `User-agent: *\nAllow: /\n` + (SITE_URL ? `\nSitemap: ${SITE_URL}/sitemap.xml\n` : "");

export const sitemapXml = (pages) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${abs(p.file)}</loc><lastmod>${p.lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
