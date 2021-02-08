"use strict";

let firstName = "Dylan";
let lastName = "Israel";

let fullName = firstName + " " + lastName;
const fullNameTwo = `${firstName} ${lastName}`;

let example = 7.77; //man kan även lägga det i en string och det fungerar ändå, let example = "7.77";

console.log(example);
console.log(parseFloat(example));
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

example1.forEach((element) => {
  //ARROW FUNCTIONS!!!
  console.log(element);
});

console.log(example1);

const products = ["toilet paper", "bottled water", "sanitizer"];
products[0] = "paper towels";
products.pop();
products.push("bleach");

console.log(products);

//OBJEKT:

let example2 = {
  firstName: "Dylan", //Key: value
  lastName: "Israel",
  address: {
    city: "Austin",
    state: "Texas",
  },
  age: 30,
  cats: ["Milo", "Tito", "Achieles"],
};

example2.age = 31;

console.log(example1.age);
console.log(Object.keys(example1));
console.log(Object.values(example1));
console.log(example2.address.city);
console.log(example2.hasOwnProperty("firstName")); //kolla om example1 har en string med namnet firstname

const user = {
  firstName: "Carl-Anton",
  lastName: "Grandelius",
  address: {
    city: "Stockholm",
    county: "Stockholms laen",
  },
  hobbies: ["running", "swimming"],
  isGoldMember: "true",
};

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

let example3 = 1;
example3 %= 5; //*=, +=, -= osv.

console.log(example1);

const customerAnswer = Math.random() >= 0.5;
let quantity = 2;

if (customerAnswer) {
  quantity++;
  // quantity = quantity + 1;
}

console.log(quantity);

//eller:

let slumpvarde = Math.random(); //math.random returnerar alltid ett värde från 0 till 1

let varde = 2;

if (slumpvarde >= 0.5) {
  varde++;
}
console.log(varde);

let example4 = 5;

if (example4 === 6 || false === true) {
  console.log("Runs");
} else if (true) {
  console.log("else if");
} else {
  console.log("else");
}

const age = 18;

if (age <= 12) {
  console.log("child");
} else if (age <= 20) {
  console.log("teenager");
} else {
  console.log("adult");
}

let studentAnswer = "D";

switch (studentAnswer) {
  case "A":
    console.log("A is wrong.");
    break;
  case "B":
    console.log("B is wrong.");
    break;
  case "C":
    console.log("C is correct.");
    break;
  default:
    console.log("Not a real answer.");
}

const userType = null;

switch (userType) {
  case "guest":
    console.log("You are a guest");
    break;
  case "shopper":
    console.log("You are a shopper");
    break;
  case "super shopper":
    console.log("You are a super shopper");
    break;
  default:
    console.log("We asume you are a guest");
    break;
}

let kvantitet = 5;
let pris = 3;
let total = 0;

for (let i = 1; i < kvantitet + 1; i++) {
  total += pris;
}
console.log(total);

//eller
/*
let price = [3, 3, 3, 3, 3];
let total = 0;

for (let i = 1; i < price.length; i++) {
  total += price;
}
console.log(total);
*/

// Challenge: Total Price

/*
 1. Give our customer their total price. 
 2. Add the price of the items together with a sales tax of 8%.
 3. Log the price. 
*/

const cartItems = [
  { quantity: 1, price: 5 },
  { quantity: 3, price: 4 },
  { quantity: 10, price: 1 },
];
let totalsum = 0;

// for(let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price * cartItems[i].quantity;
// }

for (const cartItem of cartItems) {
  totalsum += cartItem.price * cartItem.quantity;
}

// total = total * 1.08;
totalsum *= 1.08;

console.log(total);

let count = 0;

do {
  count++;

  if (count < 20) {
    break;
  }
} while (false);

let update = 0;

do {
  update++;
  console.log(update);
} while (update > 20);

console.log(update);

function lax() {
  return 10;
}

console.log(lax());

//eller

function lax(meningslostnummer) {
  return 10;
}

console.log(lax(2));
