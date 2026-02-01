document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".hero-track");
  if (!track) return;

  const slides = track.children;
  const total = slides.length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 5000);
});