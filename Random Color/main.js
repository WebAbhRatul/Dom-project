const btn = document.querySelector(".btn");
const colorEl = document.querySelector(".color-string");

let colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.trunc(Math.random() * 16);
    hexColor += colorArr[random];
    // console.log(colorArr[random]);
  }
  console.log(hexColor);
  document.getElementById("body").style.backgroundColor = hexColor;
  //   console.log(hexColor);
});
