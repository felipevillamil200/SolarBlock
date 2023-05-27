/*
Esta es una función que se utiliza para
los slides deslizables
*/
var sliderContainer = slider.querySelector(".slider-container");
var slides = sliderContainer.getElementsByClassName("slide");
var currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }
  sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Slider automático
function startSlider() {
  setInterval(function() {
    nextSlide();
  }, 10000); // Cambia el valor para ajustar la duración de cada slide
}

startSlider();
