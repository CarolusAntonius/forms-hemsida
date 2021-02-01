"use strict";

const projectName = "Greatest Battles of Karl XII Game Quiz";
const projectVersion = 1.0;
console.log(projectName);
console.log(projectName.split(" "));
console.log(projectName.split(""));
console.log(projectName.trim().Length); //Trim tar bort alla mellanslag
console.log(projectName.toUpperCase);
console.log(projectName.toLowerCase);

let score = 0;

//gör en trigger:

score = score + 1;
console.log("Increased score by 1 point");
console.log("Your score is now " + score);
console.log(typeof score);

function funktion(a, b) {
  return a + b;
}

//Antingen:

//let vardeAttSkrivaUt = funktion(2, 3);
//console.log(vardeAttSkrivaUt);

//eller:

console.log(funktion(2, 3));

function greet(name) {
  console.log("Hello " + name);
}

greet();
