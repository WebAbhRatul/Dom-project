const open = document.getElementById("op");
const close = document.getElementById("cl");
const container = document.querySelector(".container");

open.addEventListener("click", function () {
  container.classList.add("show-nav");
});
close.addEventListener("click", function () {
  container.classList.remove("show-nav");
});
