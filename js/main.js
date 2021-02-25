"use strict";

update();

function update() {
  let articles = document.querySelectorAll("article");

  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.add("invisible");
  }

  let nuvarande = document.querySelector("input:checked").value;

  document.querySelector("#" + nuvarande).classList.toggle("invisible");
}

let nuvarandefraga = 1;

function changeQuestion() {
  if (nuvarandefraga < 2) {
    document
      .querySelector("#fraga" + nuvarandefraga)
      .classList.toggle("invisible");
    nuvarandefraga += 1;
    document
      .querySelector("#fraga" + nuvarandefraga)
      .classList.toggle("invisible");
  } else {
    document
      .querySelector("#fraga" + nuvarandefraga)
      .classList.toggle("invisible");
    nuvarandefraga += 1;
    document
      .querySelector("#fraga" + nuvarandefraga)
      .classList.toggle("invisible");
    document
      .getElementById("changeQuestion-button")
      .classList.toggle("invisible");
    document.getElementById("submitQuiz-button").classList.toggle("invisible");
  }
}

function submitQuiz() {
  document
    .querySelector("#fraga" + nuvarandefraga)
    .classList.toggle("invisible");
  let points = 0;

  let answers = document.querySelectorAll("[data-question]:checked");
  console.log(answers);

  for (let index = 0; index < answers.length; index++) {
    points += parseInt(answers[index].value);
  }

  let niva;

  if (points == 3) {
    niva = "General";
  } else if (points == 2) {
    niva = "Officerare";
  } else if (points == 1) {
    niva = "Underofficer";
  } else {
    niva = "Menig soldat";
  }

  document.querySelector(".correct-answers").innerHTML = points;
  document.querySelector(".niva").innerHTML = niva;

  document.querySelector(".questions").classList.toggle("invisible");
  document.querySelector(".result").classList.toggle("invisible");

  document.querySelector("header").classList.toggle("invisible");
  document.querySelector("footer").classList.toggle("invisible");
}

function resetQuiz() {
  document.querySelector(".result").classList.toggle("invisible");
  document.querySelector(".questions").classList.toggle("invisible");

  document.querySelector(".questions").reset();
  document.querySelector("#fraga1").classList.toggle("invisible");

  document
    .getElementById("changeQuestion-button")
    .classList.toggle("invisible");
  document.getElementById("submitQuiz-button").classList.toggle("invisible");
  nuvarandefraga = 1;

  document.querySelector("header").classList.toggle("invisible");
  document.querySelector("footer").classList.toggle("invisible");
}
