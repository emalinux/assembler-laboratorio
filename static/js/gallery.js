const track = document.querySelector('.gallery-track');
const slides = document.querySelectorAll('.gallery-slide');
const dots = document.querySelectorAll('.gallery-dot');
const prevBtn = document.querySelector('.gallery-arrow.prev');
const nextBtn = document.querySelector('.gallery-arrow.next');

let index = 0;
let interval = null;
const delay = 3000; // 3 secondi → showroom style

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
}

function startAuto() {
  interval = setInterval(nextSlide, delay);
}

function stopAuto() {
  clearInterval(interval);
}

// eventi
nextBtn.addEventListener('click', () => {
  stopAuto();
  nextSlide();
  startAuto();
});

prevBtn.addEventListener('click', () => {
  stopAuto();
  prevSlide();
  startAuto();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    stopAuto();
    index = i;
    updateSlider();
    startAuto();
  });
});

// avvio
updateSlider();
startAuto();

document.querySelector('.gallery-viewport')
  .addEventListener('mouseenter', stopAuto);

document.querySelector('.gallery-viewport')
  .addEventListener('mouseleave', startAuto);