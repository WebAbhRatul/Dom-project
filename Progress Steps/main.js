const progress = document.getElementById("progress");
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach(function (value, index) {
    if (index < currentActive) {
      value.classList.add("active");
      console.log(index, currentActive);
    } else {
      value.classList.remove("active");
      console.log(index, currentActive);
    }
  });
  const actives = document.querySelectorAll(".active");
  console.log(actives.length);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}