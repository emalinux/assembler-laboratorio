document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".hero-track");
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  const prevBtn = document.querySelector(".hero-arrow.prev");
  const nextBtn = document.querySelector(".hero-arrow.next");

  if (!track || slides.length === 0) return;

  let index = 0;
  let interval = null;

  function goToSlide(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function next() {
    goToSlide(index + 1);
  }

  function prev() {
    goToSlide(index - 1);
  }

  function startAuto() {
    interval = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  // Init
  goToSlide(0);
  startAuto();

  // Events
  nextBtn.addEventListener("click", () => {
    stopAuto();
    next();
    startAuto();
  });

  prevBtn.addEventListener("click", () => {
    stopAuto();
    prev();
    startAuto();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", e => {
      stopAuto();
      goToSlide(parseInt(e.target.dataset.index));
      startAuto();
    });
  });

  // Pausa hover
  const viewport = document.querySelector(".hero-viewport");
  viewport.addEventListener("mouseenter", stopAuto);
  viewport.addEventListener("mouseleave", startAuto);

  // Swipe mobile
  let startX = 0;
  viewport.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  viewport.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  });
});