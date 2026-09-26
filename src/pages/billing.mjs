import { i, blob, ctaBand, TEL, PHONE, MAILTO } from "../partials.mjs";

const faq = [
  ["Do you offer direct billing?", "Yes. Direct billing is available for Green Shield, Sun Life, TELUS Health and Blue Cross."],
  ["Do I need a doctor's referral?", "No referral is required in general, but requirements can vary depending on your insurance policy. Check with your provider if you're unsure."],
  ["Will my insurance cover my massage?", "Insurance coverage and requirements vary by provider and individual plan. Please contact your insurance provider to confirm your coverage before your appointment."],
  ["How can I pay?", "E-transfer is accepted. Direct billing is also available for the providers listed above."],
  ["What happens after I book?", "A health history form will be emailed or texted to you. Please complete the form before your appointment."],
  ["What is your cancellation policy?", "24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost. Full terms and policies are available on our booking site."],
  ["Where do I park?", "Parking is available at the back of the building."],
  ["Is the clinic on the main floor?", "Yes — the clinic is located on the main floor."],
];

export const body = `
<section class="page-hero" aria-labelledby="page-title">
  ${blob("page-hero__blob", 2)}
  <div class="container">
    <p class="eyebrow">Insurance &amp; direct billing</p>
    <h1 class="display" id="page-title">Less paperwork. <em>More relief.</em></h1>
    <p class="lede">We direct bill participating insurance providers, so you can focus on feeling better.</p>
  </div>
</section>

<section class="section" style="padding-top:0" aria-labelledby="providers-title">
  <div class="container billing">
    <div class="reveal">
      <h2 class="h3" id="providers-title" style="margin-bottom:18px">We direct bill</h2>
      <div class="providers">
        <div class="provider">${i("check")}Green Shield</div>
        <div class="provider">${i("check")}Sun Life</div>
        <div class="provider">${i("check")}TELUS Health</div>
        <div class="provider">${i("check")}Blue Cross</div>
      </div>
      <div class="note" style="margin-top:20px">${i("info")}<span><strong>Please note:</strong> Insurance coverage and requirements vary by provider and individual plan. Please contact your insurance provider to confirm your coverage before your appointment.</span></div>
    </div>
    <div class="billing__panel reveal reveal-d1">
      <h3 class="h3">The essentials</h3>
      <ul class="check-list">
        <li>${i("check")}<span><strong>Direct billing available</strong>For the four providers listed.</span></li>
        <li>${i("check")}<span><strong>Doctor's referral</strong>No referral is required in general, but requirements can vary depending on your insurance policy.</span></li>
        <li>${i("check")}<span><strong>Payment</strong>E-transfer is accepted.</span></li>
        <li>${i("check")}<span><strong>Cancellations</strong>24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost.</span></li>
      </ul>
      <div class="btn-row" style="margin-top:24px">
        <a class="btn" href="contact.html#book" data-book>Book an Appointment ${i("arrow")}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--paper2" id="faq" aria-labelledby="faq-title">
  <div class="container grid-2 grid-2--wide-right grid-2--top">
    <div class="reveal">
      <p class="eyebrow">FAQ</p>
      <h2 class="h2" id="faq-title">Questions before your <em>first visit?</em></h2>
      <p class="lede">Can't find what you're looking for? Reach out — we're happy to help.</p>
      <div class="btn-row" style="margin-top:20px">
        <a class="btn btn--secondary btn--sm" href="${TEL}">${i("phone")} ${PHONE}</a>
        <a class="btn btn--secondary btn--sm" href="${MAILTO}">${i("mail")} Email us</a>
      </div>
    </div>
    <div class="faq reveal reveal-d1">
      ${faq.map(([q, a], n) => `<details${n === 0 ? " open" : ""}><summary>${q}<span class="plus" aria-hidden="true"></span></summary><div class="faq__a"><p>${a}</p></div></details>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand()}
`;
