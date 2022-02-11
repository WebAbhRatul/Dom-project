const modals = document.querySelectorAll(".modal");
const popUp = document.querySelector(".popUp");
const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overflow");

modals.forEach(function (modal) {
  modal.addEventListener("click", function () {
    popUp.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});
btn.addEventListener("click", function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
});

console.log(modal);
