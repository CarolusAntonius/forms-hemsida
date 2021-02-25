"use strict";

// 3. document.querySelector och document.querySelectorAll
// 6. classList.toggle

//document.querySelectorAll(".fraga-container").forEach((a) => (a.style.display = "none"));

/*

  let activeId = 0;


function nextQuestion(){
    activeId += 1;
    console.log(activeId);
    displayQuestion(activeId);
}

function displayQuestion(activeId){
  console.log(activeId);
  //document.querySelector("#hej" + activeId).classList.toggle("invisible"); //man kan inte börja id med en siffra
}

//document.createElement("div");

function skapaKnapp() {
  let btn = document.createElement("BUTTON");
  btn.innerHTML = "CLICK ME";
  document.body.appendChild(btn);
}


}

//ÖVRIGT:::

*/

update();

function update() {
  let articles = document.querySelectorAll("article"); //skapa array och fyll den med alla elemen med namnet "article"

  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.add("invisible"); //lägg till klassen invisible till alla element ked namnet "articles"
  }

  let nuvarande = document.querySelector("input:checked").value; //fyll nuvarande med värdet på den första ikryssade inputen.value value heter samma som id:t längre ner...

  document.querySelector("#" + nuvarande).classList.toggle("invisible"); //hitta artikeln med id:t #nuvarande och stäng av invisible
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

//GÅR INTE ATT GÖRA SEPARAT FUNKTION MED nextQuestion() eftersom nuvarande fråga i så fall måste returneras till changeQuestion

function submitQuiz() {
  document
    .querySelector("#fraga" + nuvarandefraga)
    .classList.toggle("invisible");
  let points = 0;

  let answers = document.querySelectorAll("[data-question]:checked");
  console.log(answers);

  // Loopa igenom svaren och lägg till deras "value" till points:
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
    niva = "gemen soldat";
  }

  // Lägg in poängen i vår "correct-answers" span:
  document.querySelector(".correct-answers").innerHTML = points;
  document.querySelector(".niva").innerHTML = niva;

  //Göm frågorna och visa resultatet: !!!!!!!!!!!!!!!!
  document.querySelector(".questions").classList.toggle("invisible");
  document.querySelector(".result").classList.toggle("invisible");

  //göm headern
  document.querySelector("header").classList.toggle("invisible");
}

function resetQuiz() {
  //Göm resultatet och visa frågorna:
  document.querySelector(".result").classList.toggle("invisible");
  document.querySelector(".questions").classList.toggle("invisible");

  //Nollställ formuläret:
  document.querySelector(".questions").reset();
  document.querySelector("#fraga1").classList.toggle("invisible");

  //Byt fråga
  document
    .getElementById("changeQuestion-button")
    .classList.toggle("invisible");
  document.getElementById("submitQuiz-button").classList.toggle("invisible");
  nuvarandefraga = 1;
}
