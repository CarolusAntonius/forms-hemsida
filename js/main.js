"use strict";


let firstName = "Dylan";
let lastName = "Israel";

let fullName = firstName + " " + lastName;
const fullNameTwo = `${firstName} ${lastName}`;

let example = 7.77; //man kan även lägga det i en string och det fungerar ändå, let example = "7.77";

console.log(example);
console.log(parseFloat(example))
console.log(parseInt(example));
console.log(example.toFixed(5)); //ange antal decimaler

console.log(fullName);


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











let example1 = [5, 7, 6];

example1.push(8, 9, 10);
example1.pop();

example1[0] = 1;

example1.forEach((element) => { //ARROW FUNCTIONS!!!
  console.log(element);
});

console.log(example1);










const products = ["toilet paper", "bottled water", "sanitizer"];
products[0] = "paper towels";
products.pop();
products.push("bleach");

console.log(products);








//OBJEKT:

let example1 = {
  firstName: "Dylan", //Key: value
  lastName: "Israel",
  address: {
    city: "Austin",
    state: "Texas",
  },
  age: 30,
  cats: ["Milo", "Tito", "Achieles"],
};

example1.age = 31;

console.log(example1.age);
console.log(Object.keys(example1));
console.log(Object.values(example1));
console.log(address.city);
console.log(example1.hasOwnProperty("firstName")); //kolla om example1 har en string med namnet firstname




const user = {
    firstName: "Carl-Anton",
    lastName: "Grandelius",
    address: {
        city ="Stockholm",
        county = "Stockholms laen"   
    },
    hobbies: ["running", "swimming"],
    isGoldMember: "true"
}

console.log(user);  

//ELLER:

/*
  const user = {
    firstName: 'Dylan',
    lastName: 'Israel'
};

user['address'] = {
    city: 'Tampa',
    state: 'Florida'
};

user.hobbies = ['Anime', 'Coding', 'Dating', 'Gaming'];
user.isGoldMember = true;

console.log(user);

*/

/*

console.log(example1 == example2); //kolla att de är lika
console.log(example1 === example2); //kolla att de är lika och att typen är lika

console.log(example1 != example2); //kolla att de är olika
console.log(example1 !== example2); //kolla att de är olika och att typen är lika

*/

let example1 = 1;
example1 %= 5; //*=, +=, -= osv.

console.log(example1);