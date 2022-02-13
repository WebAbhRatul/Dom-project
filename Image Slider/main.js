const nxt = document.querySelector(".nxt");
const previous = document.querySelector(".pre");
const slider = document.querySelector(".slider-img");
const sliderImages = document.querySelectorAll(".slider-img img");

let counter = 1;
const size = sliderImages[0].clientWidth;
slider.style.transform = "translateX(" + -size * counter + "px)";

nxt.addEventListener("click", () => {
  if (counter >= sliderImages.length - 1) return;
  slider.style.transition = "transform .3s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
previous.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform .3s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});
slider.addEventListener("transitionend", () => {
  if (sliderImages[counter].classList.contains("lastClone")) {
    slider.style.transition = "none";
    counter = sliderImages.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (sliderImages[counter].classList.contains("firstClone")) {
    slider.style.transition = "none";
    counter = sliderImages.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
});
