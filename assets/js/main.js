/* Vibe Massage & Recovery — site behaviour */

/* ---------------------------------------------------------------
   BOOKING
   Paste the online booking link here when it's ready. Every
   "Book an Appointment" button on the site will then go straight
   to it. While it's empty, the buttons open a booking panel with
   call / text / email options instead.
   --------------------------------------------------------------- */
const BOOKING_URL = "";

(function () {
  const root = document.documentElement;
  root.classList.remove("no-js");

  /* Header border on scroll + mobile action bar */
  const header = document.querySelector(".site-header");
  const bar = document.querySelector(".action-bar");
  const hero = document.querySelector("[data-hero]");
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle("is-scrolled", y > 8);
    if (bar) {
      const threshold = hero ? hero.offsetHeight * 0.6 : 120;
      bar.classList.toggle("is-visible", y > threshold);
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const setMenu = (open) => {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.toggleAttribute("inert", !open);
  };
  if (toggle && menu) {
    setMenu(false);
    toggle.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });
    window.matchMedia("(min-width: 1040px)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });
  }

  /* Booking buttons */
  const dialog = document.getElementById("book-dialog");
  const serviceTag = dialog && dialog.querySelector("[data-book-service]");
  document.querySelectorAll("[data-book]").forEach((el) => {
    if (BOOKING_URL) {
      el.setAttribute("href", BOOKING_URL);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
      return;
    }
    el.addEventListener("click", (e) => {
      if (!dialog || typeof dialog.showModal !== "function") return; // falls back to #book anchor
      e.preventDefault();
      const service = el.getAttribute("data-service");
      if (serviceTag) {
        serviceTag.hidden = !service;
        serviceTag.querySelector("span").textContent = service || "";
      }
      document.body.classList.remove("menu-open");
      dialog.showModal();
    });
  });
  if (dialog) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
    });
  }

  /* Reveal on scroll */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-in"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach((el) => io.observe(el));
  } else {
    items.forEach((el) => el.classList.add("is-in"));
  }

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
