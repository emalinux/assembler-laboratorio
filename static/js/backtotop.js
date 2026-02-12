document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

});