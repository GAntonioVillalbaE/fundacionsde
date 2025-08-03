document.addEventListener("DOMContentLoaded", function () {
  const menuIcono = document.querySelector(".menu-movil-icono");
  const menuMovil = document.querySelector(".menu-sde");

  if (menuIcono && menuMovil) {
    menuIcono.addEventListener("click", () => {
      menuIcono.classList.toggle("active");
      menuMovil.classList.toggle("active");
    });
  }
});

// script Imagenes home
let slideIndex = 1;
let autoSlideTimeout;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].classList.add("active");
  if (dots.length >= slideIndex) {
    dots[slideIndex - 1].classList.add("active");
  }
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideTimeout = setTimeout(() => {
    slideIndex++;
    showSlides(slideIndex);
    startAutoSlide();
  }, 5000);
}

function resetAutoSlide() {
  clearTimeout(autoSlideTimeout);
  startAutoSlide();
}

function addSwipeSupport(containerId) {
  const container = document.getElementById(containerId);
  let startX = 0;
  let endX = 0;

  container.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener("touchmove", e => {
    endX = e.touches[0].clientX;
  });

  container.addEventListener("touchend", () => {
    const diff = endX - startX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        plusSlides(-1); // swipe right
      } else {
        plusSlides(1); // swipe left
      }
    }
    startX = 0;
    endX = 0;
  });
}

// Initialize
showSlides(slideIndex);
startAutoSlide();
addSwipeSupport("slideshow");
