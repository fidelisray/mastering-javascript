/*
    Primitive Data Type :
        - number -> floating point numbers (used for decimals and integers)
        - string
        - boolean -> logical (value: true / false)
        - undefined -> value taken from a variable that is not yet defined
        - symbol
        - BigInt
*/

let iniString = "Pico Margondez"; // String
let iniJugaString = 'Sparky White'; // String

console.log(iniString);
console.log(iniJugaString);
console.log(typeof iniString);
console.log(typeof iniJugaString);

let umurPico = 3; // number
let isSparkyWhite = true; // boolean

console.log("umurPico :" + " " + umurPico + " " + "-> type" + " " + typeof umurPico);
console.log("isSparkyWhite :" + " " + isSparkyWhite + " " + "-> type" + " " + typeof isSparkyWhite);

let phi = 3.14; // number
console.log("phi :" + " " + phi + "-> typeof" + " " + "phi" + " " + typeof phi);

let tidakDidefinisikan; // undefined
console.log(tidakDidefinisikan);
console.log("Type Of 'tidakDidefinisikan' : " + typeof tidakDidefinisikan);

let mySymbol = Symbol("symbol 1");
console.log(mySymbol);
console.log(typeof mySymbol);
let my2ndSymbol = Symbol("symbol 1");
console.log(my2ndSymbol);
console.log(typeof my2ndSymbol);
console.log("mySymbol == my2ndSymbol " + (mySymbol == my2ndSymbol));


/* 
    Non Primitive Data Type :
        - Object
*/

let myDog = {
    name: "Pico Margondez",
    gender: "Female",
    birthYear: 2022,
    weight: 20,
    bark: function() {
        console.log("Whoof!");
    },
    bark: function() {
        return 'Whoof!';
    }
};

console.log("My Dog's Name :" + " " + myDog.name);
console.log("Gender        :" + " " + myDog.gender);
console.log("Birth Year    :" + " " + myDog.birthYear);
console.log("Weight        :" + " " + myDog.weight + " kg");
console.log("What's Pico say?" + " " + myDog.bark());


/*
    Operators
*/

// 1. Mathematical Operators

let thisYear = 2025;
let myDogAge = thisYear - myDog.birthYear;

console.log("My Dog's Age : " + myDogAge + " years old");

let tomatoesPrices = 15000;
let potatoesPrices = 18000;

let total = tomatoesPrices + potatoesPrices;
console.log("Buy 1kg Potatoes and 1kg Tomatoes, Total Prices : Rp." + total + ".00-");

let twoKiloTomatoes = tomatoesPrices * 2;
console.log("Buy 2kg Tomatoes, Total Prices : Rp." + twoKiloTomatoes + ".00-");

let halfKiloPotatoes = potatoesPrices / 2;
console.log("Half kilo Potatoes = Rp." + halfKiloPotatoes + ".00-");
