const card = document.querySelectorAll(".card");
card.forEach(function (value) {
  value.addEventListener("click", function () {
    myFunction();
    value.classList.add("active");
  });
});

function myFunction() {
  card.forEach(function (value) {
    value.classList.remove("active");
  });
}
