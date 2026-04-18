/*
    Primitive Data Type :
        - number -> floating point numbers
        - string
        - boolean
        - undefined -> no value
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
    age: 2,
    bark: function() {
        console.log("Whoof!");
    },
    bark: function() {
        return 'Whoof!';
    }
};

console.log("My Dog's Name :" + " " + myDog.name);
console.log("Gender        :" + " " + myDog.gender);
console.log("Age           :" + " " + myDog.age);
console.log("What's Pico say?" + " " + myDog.bark());
