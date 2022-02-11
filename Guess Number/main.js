//!   dom element
const againBtn = document.querySelector(".again-btn");
const guess = document.querySelector(".guess");
const guessInput = document.querySelector(".number");
const checkBtn = document.querySelector(".check-btn");
const guessMessage = document.querySelector(".guess-message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highScore");

//! global variable
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(randomNumber);

let playing = true;

//! conditions
scoreEl.textContent = score;

checkBtn.addEventListener("click", function () {
  let number = Number(guessInput.value);
  if (number === randomNumber) {
    guessMessage.textContent = "Correct Number ...!";
    guess.textContent = randomNumber;

    playing = false;
    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else if (number < randomNumber) {
    if (playing) {
      guessMessage.textContent = "Guess is to low ... !";
      score--;
      if (score > 0) {
        scoreEl.textContent = score;
      } else {
        guessMessage.textContent = "You lose the game... !";
        score = 0;
        scoreEl.textContent = score;
      }
    }
  } else if (number > randomNumber) {
    if (playing) {
      guessMessage.textContent = "Guess is to High ... !";
      score--;
      if (score > 0) {
        scoreEl.textContent = score;
      } else {
        guessMessage.textContent = "You lose the game... !";
        score = 0;
        scoreEl.textContent = score;
      }
    }
  }
});

againBtn.addEventListener("click", function () {
  score = 20;
  guessInput.value = "";
  guessMessage.textContent = "Start Guessing ...";
  scoreEl.textContent = score;
});
