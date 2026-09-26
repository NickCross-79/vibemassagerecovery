import { i, ph, brand } from "../partials.mjs";

const swatches = [
  ["Espresso", "--brown-900", "#2f2219", "Primary buttons, dark sections"],
  ["Walnut", "--brown-700", "#563b29", "Hover, logo leaf"],
  ["Clay", "--brown-500", "#8a6446", "Italic accents"],
  ["Sage", "--sage-600", "#6c8260", "Icons, eyebrows"],
  ["Soft sage", "--sage-400", "#a2b591", "Accent buttons, focus ring"],
  ["Sage mist", "--sage-100", "#e9eee2", "Section backgrounds"],
  ["Ink", "--ink", "#1c1b19", "Headings & body text"],
  ["Paper", "--paper", "#f6f5f0", "Page background"],
];

const states = (cls, label) => `<div class="sg-states">
  <span class="sg-label">${label}</span>
  <div class="sg-row">
    <figure><a class="btn ${cls}" href="#" onclick="return false">Book an Appointment</a><figcaption>Default</figcaption></figure>
    <figure><a class="btn ${cls} is-hover" href="#" onclick="return false">Book an Appointment ${i("arrow")}</a><figcaption>Hover</figcaption></figure>
    <figure><a class="btn ${cls} is-focus" href="#" onclick="return false">Book an Appointment</a><figcaption>Keyboard focus</figcaption></figure>
    <figure><a class="btn ${cls} is-active" href="#" onclick="return false">Book an Appointment</a><figcaption>Pressed</figcaption></figure>
    <figure><a class="btn ${cls} is-disabled" href="#" onclick="return false">Book an Appointment</a><figcaption>Disabled</figcaption></figure>
  </div>
</div>`;

export const body = `
<style>
  .sg-section { padding-block: 56px; border-top: 1px solid var(--line); }
  .sg-section:first-of-type { border-top: 0; }
  .sg-section > h2 { margin-bottom: 8px; }
  .sg-section > p.muted { margin-bottom: 28px; }
  .sg-swatches { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 14px; }
  .sg-swatch { border-radius: var(--radius); overflow: hidden; border: 1px solid var(--line); background: var(--white); }
  .sg-swatch div { height: 96px; }
  .sg-swatch p { padding: 10px 12px; font-size: 13px; line-height: 1.4; margin: 0; }
  .sg-swatch strong { display: block; font-size: 14px; }
  .sg-type > * + * { margin-top: 18px; }
  .sg-type small { display: block; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-3); font-weight: 600; margin-bottom: 4px; }
  .sg-states + .sg-states { margin-top: 28px; }
  .sg-label { display: block; font-size: 13px; font-weight: 600; color: var(--ink-3); margin-bottom: 12px; }
  .sg-row { display: flex; flex-wrap: wrap; gap: 18px 16px; }
  .sg-row figure { margin: 0; display: grid; gap: 8px; justify-items: start; }
  .sg-row figcaption { font-size: 12.5px; color: var(--ink-3); }
  .sg-dark { background: var(--brown-900); border-radius: var(--radius-lg); padding: 28px; margin-top: 28px; }
  .sg-dark .sg-label, .sg-dark figcaption { color: rgba(246,245,240,.6); }
  .sg-nav { overflow-x: auto; border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: var(--paper); }
  .sg-nav .site-header { position: relative; }
  .sg-phones { display: flex; gap: 32px; flex-wrap: wrap; justify-content: center; }
  .sg-phone { width: 300px; flex: none; }
  .sg-phone__frame { width: 300px; height: 620px; border-radius: 44px; background: var(--ink); padding: 10px; box-shadow: var(--shadow-soft); }
  .sg-phone__screen { width: 100%; height: 100%; border-radius: 34px; overflow: hidden; background: var(--paper); position: relative; }
  .sg-phone iframe { width: 390px; height: 780px; border: 0; transform: scale(.7282); transform-origin: 0 0; }
  .sg-phone p { text-align: center; font-weight: 600; margin-top: 14px; font-size: 15px; }
  .sg-note { font-size: 14px; }
</style>

<section class="page-hero" style="padding-bottom:24px">
  <div class="container">
    <p class="eyebrow">Design system</p>
    <h1 class="display">Vibe <em>style guide</em></h1>
    <p class="lede">The building blocks behind the site: colour, type, buttons and their states, navigation, and mobile layouts. Not linked from the public navigation.</p>
    <p class="note sg-note" style="max-width:720px">${i("info")}<span>Colours are provisional and live as tokens in <code>assets/css/styles.css</code>. Once the official logo is supplied, adjust the brown and sage tokens to match it and the whole site updates.</span></p>
  </div>
</section>

<div class="container">
  <section class="sg-section">
    <h2 class="h3">Colour</h2>
    <p class="muted">Brown anchors, sage accents, near-black for text, on a light neutral with a hint of green (deliberately not beige).</p>
    <div class="sg-swatches">
      ${swatches.map(([n, t, h, u]) => `<div class="sg-swatch"><div style="background:var(${t})"></div><p><strong>${n}</strong>${h} · <code>${t}</code><br><span class="muted">${u}</span></p></div>`).join("")}
    </div>
  </section>

  <section class="sg-section sg-type">
    <h2 class="h3">Typography</h2>
    <p class="muted">Fraunces (soft, editorial serif) for headings; DM Sans for body text and UI. Body text never drops below 15px.</p>
    <div><small>Display · Fraunces 380</small><p class="display" style="font-size:clamp(40px,7vw,72px)">Feel better. <em>Find your Vibe.</em></p></div>
    <div><small>Heading 2 · Fraunces 400</small><p class="h2" style="margin:0">Treatments tailored <em>to you</em></p></div>
    <div><small>Heading 3</small><p class="h3">Swedish / Deep Tissue Massage</p></div>
    <div><small>Eyebrow</small><p class="eyebrow" style="margin:0">Services &amp; pricing</p></div>
    <div><small>Lede · DM Sans 18–21px</small><p class="lede">Personalized massage therapy in a calm, welcoming space.</p></div>
    <div><small>Body · DM Sans 17–18px</small><p>Every treatment is tailored to you and your individual needs, whether you're looking to reduce pain and tension, improve range of motion, manage stress, support recovery, or simply take some time to reset.</p></div>
  </section>

  <section class="sg-section">
    <h2 class="h3">Booking CTA states</h2>
    <p class="muted">"Book an Appointment" is always the primary action. While no online booking link is set, it opens the booking panel (try the live button below).</p>
    ${states("", "Primary — on light backgrounds")}
    ${states("btn--secondary", "Secondary — Explore Services, View pricing")}
    <div class="sg-dark">
      ${states("btn--sage", "Sage — on dark backgrounds")}
    </div>
    <div class="sg-states" style="margin-top:28px">
      <span class="sg-label">Live</span>
      <div class="sg-row">
        <a class="btn" href="contact.html#book" data-book>Book an Appointment ${i("arrow")}</a>
        <a class="btn btn--secondary" href="contact.html#book" data-book data-service="Massage + Cupping">Book this service</a>
        <a class="btn btn--sm" href="contact.html#book" data-book>Small / navbar</a>
      </div>
    </div>
  </section>

  <section class="sg-section">
    <h2 class="h3">Navigation</h2>
    <p class="muted">Desktop: links plus phone and a persistent Book button. Tablet and mobile: logo, compact Book button and menu; a sticky Call / Book bar appears after scrolling past the hero.</p>
    <div class="sg-nav">
      <div class="site-header is-scrolled"><div class="container nav" style="max-width:none">
        ${brand("#")}
        <nav class="nav__links" aria-label="Example" style="display:flex">
          <a href="#" aria-current="page">Home</a><a href="#">Services</a><a href="#">About</a><a href="#">Direct Billing</a><a href="#">Contact</a>
        </nav>
        <a class="btn btn--sm" href="#" onclick="return false">Book an Appointment</a>
      </div></div>
    </div>
  </section>

  <section class="sg-section">
    <h2 class="h3">Photography placeholders</h2>
    <p class="muted">Every image slot is a labelled placeholder. Swap the <code>&lt;div class="ph"&gt;</code> for an <code>&lt;img&gt;</code> and the frame keeps the crop. Recommended subjects: hands-on treatment, cupping, movement and recovery, real clients (with permission), the treatment room, and a relaxed portrait of Thomas.</p>
    <div class="sg-swatches" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">
      <div class="frame frame--arch ratio-3x4">${ph("arch crop", "")}</div>
      <div class="frame ratio-3x4">${ph("brown variant", "brown")}</div>
      <div class="frame ratio-3x4">${ph("light variant", "light")}</div>
      <div class="frame ratio-3x4">${ph("dark variant", "dark")}</div>
    </div>
  </section>

  <section class="sg-section">
    <h2 class="h3">Mobile</h2>
    <p class="muted">Live pages at 390px wide. Scroll inside each phone.</p>
    <div class="sg-phones">
      <div class="sg-phone"><div class="sg-phone__frame"><div class="sg-phone__screen"><iframe src="index.html" title="Mobile homepage" loading="lazy"></iframe></div></div><p>Homepage</p></div>
      <div class="sg-phone"><div class="sg-phone__frame"><div class="sg-phone__screen"><iframe src="services.html" title="Mobile services page" loading="lazy"></iframe></div></div><p>Services &amp; pricing</p></div>
      <div class="sg-phone"><div class="sg-phone__frame"><div class="sg-phone__screen"><iframe src="contact.html" title="Mobile contact page" loading="lazy"></iframe></div></div><p>Contact &amp; location</p></div>
    </div>
  </section>
</div>
`;
