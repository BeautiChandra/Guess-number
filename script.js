"use strict";
let secrectnum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let Highscore = 0;

let displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    displaymessage("No Number");
  } else if (guess == secrectnum) {
    displaymessage("Correct Number🎉🎉");
    document.querySelector(".number").textContent = secrectnum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > Highscore) {
      Highscore = score;
      document.querySelector(".highscore").textContent = Highscore;
    }
  } else if (guess != secrectnum) {
    if (score > 0) {
      document.querySelector(".message").textContent =
        guess > secrectnum ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game👎";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  let secrectnum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  Highscore = 0;
  document.querySelector(".highscore").textContent = Highscore;
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
