import { i, ph, blob, ctaBand } from "../partials.mjs";

const table = (name, rows, single = false) => `<div class="price-card${single ? " price-card--single" : ""}">
  <div class="price-card__head"><span>Duration</span><span>Price</span></div>
  <table class="price-table">
    <caption class="visually-hidden">${name} pricing</caption>
    <tbody>
      ${rows.map(([m, p]) => `<tr><td><div class="price-row"><span class="price-row__dur">${m}<span>min</span></span><span class="price-row__lead" aria-hidden="true"></span><span class="price-row__price">$${p}</span></div></td></tr>`).join("\n      ")}
    </tbody>
  </table>
  <div class="price-card__foot">
    <p>Direct billing available</p>
    <a class="btn btn--sm" href="contact.html#book" data-book data-service="${name}">Book this service ${i("arrow")}</a>
  </div>
</div>`;

export const body = `
<section class="page-hero" aria-labelledby="page-title">
  ${blob("page-hero__blob", 2)}
  <div class="container">
    <p class="eyebrow">Services &amp; pricing</p>
    <h1 class="display" id="page-title">Choose your <em>treatment</em></h1>
    <p class="lede">Every session is personalized to you — whether you want to ease tension, recover from activity, improve how you move, or simply reset.</p>
    <nav class="jump" aria-label="Jump to service">
      <a href="#swedish-deep-tissue">Swedish / Deep Tissue</a>
      <a href="#therapeutic">Therapeutic Massage</a>
      <a href="#massage-cupping">Massage + Cupping</a>
    </nav>
  </div>
</section>

<section class="section" style="padding-top:0" aria-label="Services">
  <div class="container">
    <article class="svc" id="swedish-deep-tissue" aria-labelledby="svc1">
      <div class="svc__desc reveal">
        <span class="svc__tag">20 – 75 min · from $60</span>
        <h2 class="h2" id="svc1">Swedish / Deep Tissue Massage</h2>
        <p>Swedish massage is a classic therapeutic treatment designed to relax the body, ease tension and improve circulation.</p>
        <p>Deep tissue massage is a specialized technique that uses slow strokes and firm pressure to reach the deeper layers of muscles and connective tissue.</p>
        <div class="frame svc__media">${ph("Swedish / deep tissue treatment", "light")}</div>
      </div>
      <div class="reveal reveal-d1">
        ${table("Swedish / Deep Tissue Massage", [[20, 60], [30, 80], [45, 100], [50, 110], [60, 130], [75, 140]])}
      </div>
    </article>

    <article class="svc" id="therapeutic" aria-labelledby="svc2">
      <div class="svc__desc reveal">
        <span class="svc__tag">90 min · $165</span>
        <h2 class="h2" id="svc2">Therapeutic Massage</h2>
        <p>Therapeutic treatment designed to relax the body, ease tension and improve circulation.</p>
        <div class="frame svc__media">${ph("therapeutic massage session", "brown")}</div>
      </div>
      <div class="reveal reveal-d1">
        ${table("Therapeutic Massage", [[90, 165]], true)}
      </div>
    </article>

    <article class="svc" id="massage-cupping" aria-labelledby="svc3">
      <div class="svc__desc reveal">
        <span class="svc__tag">30 – 75 min · from $85</span>
        <h2 class="h2" id="svc3">Massage + Cupping</h2>
        <p>Cupping massage is an alternative therapy where the therapist places cups on the skin to create a vacuum suction, lifting the muscles and connective tissue instead of pressing down.</p>
        <div class="frame svc__media">${ph("cupping therapy", "")}</div>
      </div>
      <div class="reveal reveal-d1">
        ${table("Massage + Cupping", [[30, 85], [45, 110], [50, 117], [60, 140], [75, 155]])}
      </div>
    </article>
  </div>
</section>

<section class="section section--sage" aria-labelledby="gtk-title">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Before you book</p>
      <h2 class="h2" id="gtk-title">Good to <em>know</em></h2>
    </div>
    <div class="good-to-know">
      <div class="gtk reveal"><span class="gtk__icon">${i("clipboard")}</span><h3>Health history form</h3><p>After booking, a health history form will be emailed or texted to you. Please complete the form before your appointment.</p></div>
      <div class="gtk reveal reveal-d1"><span class="gtk__icon">${i("card")}</span><h3>Payment &amp; billing</h3><p>E-transfer is accepted. Direct billing is available for Green Shield, Sun Life, TELUS Health and Blue Cross.</p><a class="link-arrow small" href="billing.html">Direct billing details ${i("arrow")}</a></div>
      <div class="gtk reveal reveal-d2"><span class="gtk__icon">${i("calendar")}</span><h3>Cancellation policy</h3><p>24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost.</p></div>
    </div>
    <p class="muted small reveal" style="margin-top:24px">Insurance coverage and requirements vary by provider and individual plan. Please contact your insurance provider to confirm your coverage before your appointment.</p>
  </div>
</section>

${ctaBand("Not sure which to choose? <em>We'll help.</em>")}
`;
