import { i, ph, blob, ctaBand } from "../partials.mjs";

export const body = `
<section class="page-hero" aria-labelledby="page-title">
  ${blob("page-hero__blob", 1)}
  <div class="container">
    <p class="eyebrow">About Vibe</p>
    <h1 class="display" id="page-title">You're in <em>good hands</em></h1>
    <p class="lede">A relaxing, chill environment where you can unwind, vibe, and get treatment that's built around you.</p>
  </div>
</section>

<section class="section" style="padding-top:0" aria-labelledby="therapist-title">
  <div class="container grid-2 grid-2--wide-right grid-2--top">
    <div class="sticky-col reveal">
      <div class="therapist__media">
        <div class="frame frame--arch ratio-3x4">
          <!-- Replace with a professional portrait of Thomas when available -->
          ${ph("portrait of Thomas Nahdee, RMT", "brown")}
        </div>
        <div class="therapist__badge"><div><strong>6</strong><span>Years<br>experience</span></div></div>
      </div>
      <dl class="creds">
        <div><dt>Experience</dt><dd>6 years</dd></div>
        <div><dt>Education</dt><dd>CCHST — Windsor, Ontario</dd></div>
        <div><dt>Certifications</dt><dd>RMT license<br>Cupping certification</dd></div>
        <div><dt>Specializes in</dt><dd>Deep tissue massage<br>Cupping therapy</dd></div>
      </dl>
    </div>
    <div class="reveal reveal-d1">
      <p class="eyebrow">Meet your therapist</p>
      <h2 class="therapist__name" id="therapist-title">Thomas Nahdee, RMT</h2>
      <p class="therapist__title">Registered Massage Therapist</p>
      <div class="bio">
        <p>With six years of experience as a Massage Therapist and training from CCHST in Windsor, Ontario, my goal is simple: to help you feel and move better.</p>
        <p>Every treatment is tailored to you and your individual needs, whether you're looking to reduce pain and tension, improve range of motion, manage stress, support recovery, or simply take some time to reset.</p>
        <p>My treatments may incorporate Deep Tissue and Swedish Massage, Cupping Therapy, IASTM, and Trigger Point techniques.</p>
        <p>I enjoy working with everyone from students and everyday working people to athletes and highly active individuals. No matter what brings you in, I want you to feel comfortable from the moment you walk through the door.</p>
      </div>
      <blockquote class="quote" style="margin-top:28px">Expect a relaxing, chill environment where you can unwind, vibe, and know you're in good hands.</blockquote>

      <h3 class="h3" style="margin:40px 0 14px">Techniques I may use</h3>
      <div class="chips">
        <span class="chip chip--sage">Deep Tissue Massage</span>
        <span class="chip chip--sage">Swedish Massage</span>
        <span class="chip chip--sage">Cupping Therapy</span>
        <span class="chip chip--sage">IASTM</span>
        <span class="chip chip--sage">Trigger Point</span>
      </div>

      <h3 class="h3" style="margin:36px 0 14px">Who I work with</h3>
      <div class="chips">
        <span class="chip">Students</span>
        <span class="chip">Everyday working people</span>
        <span class="chip">Athletes</span>
        <span class="chip">Highly active individuals</span>
        <span class="chip">Anyone who needs to reset</span>
      </div>

      <div class="btn-row" style="margin-top:40px">
        <a class="btn" href="contact.html#book" data-book>Book with Thomas ${i("arrow")}</a>
        <a class="btn btn--secondary" href="services.html">View services &amp; pricing</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--dark" id="why-vibe" aria-labelledby="why-title" style="overflow:hidden">
  <div class="container">
    <div class="grid-2 grid-2--top">
      <div class="reveal">
        <p class="eyebrow">Why Vibe</p>
        <h2 class="h2" id="why-title">More than a massage. <em>A place to reset.</em></h2>
      </div>
      <div class="reveal reveal-d1">
        <p class="lede">Vibe is a relaxing, calm and welcoming space that helps clients manage pain, recover, and feel their best.</p>
        <p>Vibe was started to help as many people as possible with their health and wellness — and to build a space where other therapists and wellness practitioners can grow their careers.</p>
      </div>
    </div>
    <div class="why__grid" style="margin-top:56px">
      <div class="why__item reveal"><span class="why__icon">${i("user")}</span><h3>Personalized treatment</h3><p>Every session is shaped around you and your goals.</p></div>
      <div class="why__item reveal reveal-d1"><span class="why__icon">${i("chat")}</span><h3>Understanding your needs</h3><p>We listen first, so your treatment fits how you're feeling.</p></div>
      <div class="why__item reveal reveal-d2"><span class="why__icon">${i("home")}</span><h3>A comfortable environment</h3><p>Calm, welcoming, and never clinical.</p></div>
      <div class="why__item reveal"><span class="why__icon">${i("heart")}</span><h3>Managing pain &amp; tension</h3><p>Hands-on care for everyday aches and tightness.</p></div>
      <div class="why__item reveal reveal-d1"><span class="why__icon">${i("move")}</span><h3>Mobility &amp; range of motion</h3><p>Helping you move more freely.</p></div>
      <div class="why__item reveal reveal-d2"><span class="why__icon">${i("refresh")}</span><h3>Supporting recovery</h3><p>So you can feel better in everyday life — and keep doing what you love.</p></div>
    </div>
  </div>
</section>

<section class="section" aria-label="The space">
  <div class="container grid-2">
    <div class="frame ratio-4x3 reveal">${ph("the treatment room", "light")}</div>
    <div class="reveal reveal-d1">
      <p class="eyebrow">The space</p>
      <h2 class="h2">Come as you are. <em>Leave feeling better.</em></h2>
      <p class="lede">Located on the main floor at 285 Sandwich St South in Amherstburg, with parking at the back of the building.</p>
      <a class="link-arrow" href="contact.html" style="margin-top:12px">Location &amp; hours ${i("arrow")}</a>
    </div>
  </div>
</section>

${ctaBand()}
`;
