import { i, ph, blob, ctaBand, PHONE, TEL, MAILTO, EMAIL, MAPS } from "../partials.mjs";

export const locationSection = (withHeading = true) => `<div class="location">
  <div class="reveal">
    ${withHeading ? `<p class="eyebrow">Visit us</p>
    <h2 class="h2" id="visit-title">Find us in <em>Amherstburg</em></h2>
    <p class="lede" style="margin-bottom:28px">Easy to reach, easy to park, and on the main floor.</p>` : ""}
    <div class="contact-list">
      <a class="contact-list__link" href="${MAPS}" target="_blank" rel="noopener"><span class="ci">${i("pin")}</span><span><small>Address</small><span>Vibe Massage &amp; Recovery<br>285 Sandwich St South, Amherstburg, Ontario</span></span></a>
      <a class="contact-list__link" href="${TEL}"><span class="ci">${i("phone")}</span><span><small>Phone — tap to call</small><span>${PHONE}</span></span></a>
      <a class="contact-list__link" href="${MAILTO}"><span class="ci">${i("mail")}</span><span><small>Email</small><span>${EMAIL}</span></span></a>
      <div><span class="ci">${i("clock")}</span><span><small>Hours</small><span>Monday – Saturday, 8:00 AM – 9:00 PM<br>Closed Sunday</span></span></div>
    </div>
    <div class="facts-row">
      <div class="fact">${i("car")}<span><strong>Parking</strong>Parking is available at the back of the building.</span></div>
      <div class="fact">${i("door")}<span><strong>Main floor</strong>The clinic is located on the main floor.</span></div>
    </div>
  </div>
  <div class="map reveal reveal-d1">
    <iframe class="map__frame" title="Map showing Vibe Massage &amp; Recovery at 285 Sandwich St South, Amherstburg" src="https://www.google.com/maps?q=Vibe+massage+%26+recovery,+285+Sandwich+St+S,+Amherstburg,+ON+N9V+2A7&amp;ll=42.1010026,-83.108363&amp;z=17&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    <div class="map__card">
      <div><strong>285 Sandwich St South</strong><span>Amherstburg, Ontario</span></div>
      <a class="btn btn--sm" href="${MAPS}" target="_blank" rel="noopener">Get directions ${i("arrow-up-right")}</a>
    </div>
  </div>
</div>`;

export const services = [
  {
    id: "swedish-deep-tissue",
    name: "Swedish / Deep Tissue Massage",
    short: "Classic therapeutic massage to relax the body and ease tension — or firmer, slower work that reaches the deeper layers of muscle.",
    from: "$60", dur: "20 – 75 min",
  },
  {
    id: "therapeutic",
    name: "Therapeutic Massage",
    short: "Therapeutic treatment designed to relax the body, ease tension and improve circulation.",
    from: "$165", dur: "90 min", single: true,
  },
  {
    id: "massage-cupping",
    name: "Massage + Cupping",
    short: "Massage combined with cupping, which uses gentle suction to lift muscle and connective tissue instead of pressing down.",
    from: "$85", dur: "30 – 75 min",
  },
  {
    id: "prenatal",
    name: "Prenatal Massage",
    short: "A therapeutic massage tailored to the changing body of a pregnant person, using gentle, safe techniques.",
    from: "$80", dur: "30 – 60 min",
  },
  {
    id: "postnatal",
    name: "Postnatal Massage",
    short: "A therapeutic body massage designed to help women heal and recover after childbirth.",
    from: "$80", dur: "30 – 60 min",
  },
];

export const body = `
<section class="hero" data-hero aria-labelledby="hero-title">
  <div class="container hero__grid">
    <div class="reveal">
      <a class="hero__location" href="${MAPS}" target="_blank" rel="noopener">${i("pin")}<span><span class="hide-sm">Registered </span>Massage Therapy · Amherstburg, ON</span></a>
      <h1 class="display" id="hero-title">Feel better.<br>Move better.<br><em>Find your Vibe.</em></h1>
      <p class="lede">Personalized massage therapy in a calm, welcoming space — for sore muscles, stress, recovery, or simply an hour to reset.</p>
      <div class="btn-row btn-row--stack">
        <a class="btn" href="https://vibemassagerecovery.clinicsense.com/book/" target="_blank" rel="noopener" data-book>Book an Appointment ${i("arrow")}</a>
        <a class="btn btn--secondary" href="services.html">Explore Services</a>
      </div>
      <ul class="hero__facts">
        <li>${i("shield")}Registered Massage Therapist</li>
        <li>${i("card")}Direct billing available</li>
        <li>${i("clock")}Open Mon – Sat, 8 AM – 9 PM</li>
      </ul>
    </div>
    <div class="hero__media reveal reveal-d2">
      ${blob("hero__blob", 1)}
      <div class="frame frame--arch">
        ${ph("massage treatment, warm natural light", "")}
      </div>
      <div class="hero__card">
        <span class="hero__card-icon">${i("leaf")}</span>
        <span><strong>6 years of experience</strong><span>Deep tissue &amp; cupping therapy</span></span>
      </div>
    </div>
  </div>
</section>

<div class="info-strip">
  <div class="container info-strip__grid">
    <a class="info-strip__item" href="${MAPS}" target="_blank" rel="noopener">${i("pin")}<span><small>Location</small><span>285 Sandwich St S, Amherstburg</span></span></a>
    <a class="info-strip__item" href="${TEL}">${i("phone")}<span><small>Call or text</small><span>${PHONE}</span></span></a>
    <div class="info-strip__item">${i("clock")}<span><small>Hours</small><span>Mon – Sat, 8 AM – 9 PM</span></span></div>
    <a class="info-strip__item" href="services.html">${i("sparkle")}<span><small>Massage from</small><span>$60 · 20 to 90 min</span></span></a>
  </div>
</div>

<section class="section" aria-labelledby="intro-title">
  <div class="container intro__grid">
    <div class="reveal">
      <p class="eyebrow">Welcome to Vibe</p>
      <h2 class="statement" id="intro-title">Whether you're sore from training, stiff from the workday, or just need to <em>switch off</em> — you're in the right place.</h2>
    </div>
    <div class="intro__side reveal reveal-d1">
      <p>Vibe is a relaxing, calm and welcoming space that helps you manage pain, recover, and feel your best. Every treatment is tailored to you — your body, your goals, and how you're feeling that day.</p>
      <p>No sterile clinic feel. Just skilled, personal care in a space where you can actually unwind.</p>
      <a class="link-arrow" href="about.html">Meet our therapists ${i("arrow")}</a>
    </div>
  </div>
</section>

<section class="section section--paper2" id="services" aria-labelledby="services-title">
  <div class="container">
    <div class="section-head section-head--row reveal">
      <div>
        <p class="eyebrow">Services &amp; pricing</p>
        <h2 class="h2" id="services-title">Treatments tailored <em>to you</em></h2>
        <p class="lede">Simple options, clear pricing, and the flexibility to choose the time that suits you.</p>
      </div>
      <a class="link-arrow" href="services.html">See full pricing ${i("arrow")}</a>
    </div>
    <div class="service-list">
      ${services.map((s, n) => `<article class="service-row reveal">
        <span class="service-row__num">0${n + 1}</span>
        <div class="service-row__title"><h3 class="h3">${s.name}</h3></div>
        <p>${s.short}</p>
        <div class="service-row__meta">
          <span class="service-row__price"><small>${s.single ? "" : "From"}</small>${s.from}</span>
          <span class="service-row__dur">${s.dur}</span>
        </div>
        <div class="service-row__actions">
          <a class="btn btn--sm" href="https://vibemassagerecovery.clinicsense.com/book/" target="_blank" rel="noopener" data-book data-service="${s.name}">Book this service</a>
        </div>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section section--dark" aria-labelledby="why-title" style="overflow:hidden">
  ${blob("organic", 2).replace('class="organic organic"', 'class="organic" style="width:60%;right:-20%;top:-10%"')}
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Why Vibe</p>
      <h2 class="h2" id="why-title">Care that starts with <em>listening</em></h2>
      <p class="lede">A relaxing, calm and welcoming space focused on helping you feel better in everyday life.</p>
    </div>
    <div class="why__grid">
      <div class="why__item reveal"><span class="why__icon">${i("user")}</span><h3>Personalized treatment</h3><p>No two sessions are the same. Your treatment is built around you.</p></div>
      <div class="why__item reveal reveal-d1"><span class="why__icon">${i("chat")}</span><h3>Your needs, understood</h3><p>We take time to understand what's going on and what you want to get out of each visit.</p></div>
      <div class="why__item reveal reveal-d2"><span class="why__icon">${i("home")}</span><h3>A comfortable space</h3><p>Relaxed and welcoming from the moment you walk through the door.</p></div>
      <div class="why__item reveal"><span class="why__icon">${i("heart")}</span><h3>Pain &amp; tension</h3><p>Hands-on treatment to help you manage everyday aches, tightness and tension.</p></div>
      <div class="why__item reveal reveal-d1"><span class="why__icon">${i("move")}</span><h3>Mobility &amp; range of motion</h3><p>Work that helps you move more freely, at work, at home or in training.</p></div>
      <div class="why__item reveal reveal-d2"><span class="why__icon">${i("refresh")}</span><h3>Recovery support</h3><p>For athletes, active people, and anyone recovering from physical activity.</p></div>
    </div>
    <div class="why__story reveal">
      <p class="statement" style="color:var(--paper)">Built to help as many people as possible <em>feel their best.</em></p>
      <div>
        <p>Vibe was started with a simple goal: to help as many people as possible with their health and wellness — and to create a space where other therapists and wellness practitioners can grow their careers too.</p>
        <a class="link-arrow" href="about.html">Our story ${i("arrow")}</a>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="therapist-title">
  <div class="container grid-2 grid-2--wide-right">
    <div class="therapist__media reveal">
      <div class="frame ratio-4x5">
        <!-- Replace with a professional portrait of Thomas when available -->
        ${ph("portrait of Thomas Nahdee, RMT", "brown")}
      </div>
      <div class="therapist__badge"><div><strong>6</strong><span>Years<br>experience</span></div></div>
    </div>
    <div class="reveal reveal-d1">
      <p class="eyebrow">Meet your therapists</p>
      <h2 class="therapist__name" id="therapist-title">Thomas Nahdee, RMT</h2>
      <p class="therapist__title">Registered Massage Therapist</p>
      <blockquote class="quote">“My goal is simple: to help you feel and move better. No matter what brings you in, I want you to feel comfortable from the moment you walk through the door.”</blockquote>
      <dl class="creds">
        <div><dt>Experience</dt><dd>6 years</dd></div>
        <div><dt>Education</dt><dd>CCHST — Windsor, Ontario</dd></div>
        <div><dt>Certifications</dt><dd>RMT license<br>Cupping certification</dd></div>
        <div><dt>Specializes in</dt><dd>Deep tissue massage<br>Cupping therapy</dd></div>
      </dl>
      <div class="btn-row">
        <a class="btn" href="https://vibemassagerecovery.clinicsense.com/book/" target="_blank" rel="noopener" data-book>Book with Thomas ${i("arrow")}</a>
        <a class="btn btn--secondary" href="about.html#thomas">Read full bio</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2" aria-labelledby="chantelle-title">
  <div class="container grid-2 grid-2--wide-left">
    <div class="reveal">
      <h2 class="therapist__name" id="chantelle-title">Chantelle Marcoux, RMT</h2>
      <p class="therapist__title">Registered Massage Therapist</p>
      <blockquote class="quote">“Our bodies are always communicating with us, and sometimes we just need the space to listen. Come as you are. We’ll start there.”</blockquote>
      <dl class="creds">
        <div><dt>Experience</dt><dd>RMT since 2009</dd></div>
        <div><dt>Background</dt><dd>Birth doula</dd></div>
        <div><dt>Specializes in</dt><dd>Swedish massage<br>Deep tissue<br>Active release</dd></div>
        <div><dt>Passion</dt><dd>Prenatal &amp; postpartum care</dd></div>
      </dl>
      <div class="btn-row">
        <a class="btn" href="https://vibemassagerecovery.clinicsense.com/book/" target="_blank" rel="noopener" data-book>Book with Chantelle ${i("arrow")}</a>
        <a class="btn btn--secondary" href="about.html#chantelle">Read full bio</a>
      </div>
    </div>
    <div class="therapist__media media-first reveal reveal-d1">
      <div class="frame ratio-4x5">
        <!-- Replace with a professional portrait of Chantelle when available -->
        ${ph("portrait of Chantelle Marcoux, RMT", "brown")}
      </div>
      <div class="therapist__badge"><div><strong>17+</strong><span>Years<br>experience</span></div></div>
    </div>
  </div>
</section>

<section class="section section--sage" id="direct-billing" aria-labelledby="billing-title">
  <div class="container billing">
    <div class="reveal">
      <p class="eyebrow">Insurance &amp; direct billing</p>
      <h2 class="h2" id="billing-title">Direct billing, <em>made simple</em></h2>
      <p class="lede">We can bill participating insurance providers directly, so there's less paperwork for you.</p>
      <div class="providers" style="margin-top:28px">
        <div class="provider">${i("check")}Green Shield</div>
        <div class="provider">${i("check")}Sun Life</div>
        <div class="provider">${i("check")}TELUS Health</div>
        <div class="provider">${i("check")}Blue Cross</div>
      </div>
    </div>
    <div class="billing__panel reveal reveal-d1">
      <h3 class="h3">Before you book</h3>
      <ul class="check-list">
        <li>${i("check")}<span><strong>Direct billing available</strong>For Green Shield, Sun Life, TELUS Health and Blue Cross.</span></li>
        <li>${i("check")}<span><strong>Doctor's referral</strong>No referral is required in general, but requirements can vary depending on your insurance policy.</span></li>
        <li>${i("check")}<span><strong>Payment</strong>E-transfer is accepted.</span></li>
      </ul>
      <div class="note">${i("info")}<span>Insurance coverage and requirements vary by provider and individual plan. Please contact your insurance provider to confirm your coverage before your appointment.</span></div>
      <a class="link-arrow" href="billing.html" style="margin-top:22px">Billing details &amp; FAQ ${i("arrow")}</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="first-title">
  <div class="container">
    <div class="section-head reveal">
      <p class="eyebrow">Your first appointment</p>
      <h2 class="h2" id="first-title">What to <em>expect</em></h2>
      <p class="lede">First visit? Here's how it works — simple, relaxed, and all about you.</p>
    </div>
    <ol class="steps" style="list-style:none;padding:0;margin:0">
      <li class="step reveal"><h3>Book your time</h3><p>Choose your service and a length that suits you — online, by phone, or by text.</p></li>
      <li class="step step--highlight reveal reveal-d1"><h3>Complete your health history</h3><p>After booking, a health history form will be emailed or texted to you. Please complete the form before your appointment.</p></li>
      <li class="step reveal reveal-d2"><h3>Talk through your needs</h3><p>We'll discuss what's bringing you in and what you'd like to get out of your session.</p></li>
      <li class="step reveal reveal-d3"><h3>Relax — it's tailored to you</h3><p>Your treatment is personalized to you, in a comfortable environment where you can unwind.</p></li>
    </ol>
    <div class="note note--brown reveal" style="margin-top:28px">${i("calendar")}<span><strong>Cancellation policy:</strong> 24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost.</span></div>
  </div>
</section>

<section class="section section--paper2" id="visit" aria-labelledby="visit-title">
  <div class="container">
    ${locationSection(true)}
  </div>
</section>

${ctaBand()}
`;
