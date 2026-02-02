document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const header = document.querySelector(".site-header");

  if (!toggle || !nav) return;

  function openMenu() {
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    document.addEventListener("click", outsideClick);
    document.addEventListener("keydown", escClose);
  }

  function closeMenu() {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    document.removeEventListener("click", outsideClick);
    document.removeEventListener("keydown", escClose);
  }

  function outsideClick(e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  }

  function escClose(e) {
    if (e.key === "Escape") closeMenu();
  }

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.contains("open") ? closeMenu() : openMenu();
  });

  // Header shadow on scroll
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 10);
  });
});