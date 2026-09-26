import { i, blob, TEL, SMS, MAILTO, PHONE, EMAIL } from "../partials.mjs";
import { locationSection } from "./home.mjs";

export const body = `
<section class="page-hero" aria-labelledby="page-title">
  ${blob("page-hero__blob", 1)}
  <div class="container">
    <p class="eyebrow">Contact &amp; location</p>
    <h1 class="display" id="page-title">Come find <em>your Vibe</em></h1>
    <p class="lede">Book, ask a question, or get directions — whatever's easiest for you.</p>
  </div>
</section>

<section class="section" style="padding-top:0" aria-label="Location and contact details">
  <div class="container">
    ${locationSection(false)}
  </div>
</section>

<section class="section section--sage" id="book" aria-labelledby="book-title">
  <div class="container grid-2 grid-2--top">
    <div class="reveal">
      <p class="eyebrow">Booking</p>
      <h2 class="h2" id="book-title">Book an <em>appointment</em></h2>
      <p class="lede">Choose your service and a time that works. Online booking, a call, a text, or an email all work.</p>
      <div class="btn-row btn-row--stack" style="margin-top:26px">
        <a class="btn" href="#book" data-book>Book an Appointment ${i("arrow")}</a>
        <a class="btn btn--secondary" href="services.html">View services &amp; pricing</a>
      </div>
    </div>
    <div class="billing__panel reveal reveal-d1">
      <div class="book-dialog__options">
        <a class="book-opt" href="${TEL}"><span class="ci">${i("phone")}</span><span><strong>Call</strong><span>${PHONE}</span></span>${i("arrow")}</a>
        <a class="book-opt" href="${SMS}"><span class="ci">${i("chat")}</span><span><strong>Text</strong><span>${PHONE}</span></span>${i("arrow")}</a>
        <a class="book-opt" href="${MAILTO}?subject=Appointment%20request"><span class="ci">${i("mail")}</span><span><strong>Email</strong><span>${EMAIL}</span></span>${i("arrow")}</a>
      </div>
      <div class="book-dialog__fine" style="margin-top:20px">
        <p><strong>After booking,</strong> a health history form will be emailed or texted to you. Please complete the form before your appointment.</p>
        <p><strong>Payment:</strong> E-transfer accepted. Direct billing to Green Shield, Sun Life, TELUS Health and Blue Cross.</p>
        <p><strong>Cancellations:</strong> 24 hours' notice is required. Cancellations or no-shows with less than 24 hours' notice are subject to a charge of 50% of the appointment cost.</p>
        <p>Full terms and policies are available on our booking site.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--tight" aria-labelledby="social-title">
  <div class="container" style="text-align:center">
    <p class="eyebrow" style="justify-content:center">Follow along</p>
    <h2 class="h2" id="social-title">Say hi on <em>social</em></h2>
    <div class="btn-row" style="justify-content:center;margin-top:20px">
      <!-- TODO: add the real Facebook and Instagram profile URLs -->
      <a class="btn btn--secondary" href="#">${i("facebook")} Facebook</a>
      <a class="btn btn--secondary" href="#">${i("instagram")} Instagram</a>
    </div>
  </div>
</section>
`;
