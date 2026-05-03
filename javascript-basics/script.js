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

/* 
// 1. Arithmatic Operators

// --- standard arithmatic operator (+, -, *, /)

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

// --- Remainder (%)
let myNumber1 = 7;
let myNumber2 = 5;
console.log(`${myNumber1} % ${myNumber2} = ${myNumber1 % myNumber2}`);

// --- Increment (++)
console.log(`${myNumber1}++`);
myNumber1++;
console.log(`-> ${myNumber1}`);


// --- Decrement (--)
console.log(`${myNumber2}--`);
myNumber2--;
console.log(`-> ${myNumber2}`);

// --- Exponentiation Operator (**)
console.log(`${myNumber1} ** 2 -> ${myNumber1 ** 2}`);

// --- unary plus (+)
const negNumber = -5;
const posNumber = 7;
console.log(`+ ${negNumber} -> ${+negNumber}`);
console.log(`+ ${posNumber} -> ${+posNumber}`);

// --- unary negation (-)
console.log(`- ${negNumber} -> ${-negNumber}`);
console.log(`- ${posNumber} -> ${+posNumber}`);
*/


/* 
// 2. Logical Operators

// --- and (&&)

let a = true;
let b = false;

console.log(`a && b = ${a && b}`);

// --- or (||)
console.log(`a || b = ${a || b}`);

// --- not (!)
console.log(`a = ${a} -> !a = ${!a}`);

// -- nullish (??) 
let x = 30;
let y = -5;
console.log(`y ?? x -> ${y ?? x}`);

*/


// 3. Comparisson Operator

const var1 = 4;
const var2 = "4"
const var3 = 40;

// --- equal (==)
console.log("-------------- equal (==)");

console.log(`${var1} (${typeof var1}) == "${var2}" (${typeof var2}) -> ${var1 == var2}`);
console.log(`"${var2}" (${typeof var2}) == ${var1} (${typeof var1}) -> ${var2 == var1}`);
console.log(`${var1} (${typeof var1}) == ${var3} (${typeof var3}) -> ${var1 == var3}`);

// --- strict equal (===)
console.log("-------------- strict equal (===)");

console.log(`${var1} (${typeof var1}) === "${var2}" (${typeof var2}) -> ${var1 === var2}`);
console.log(`"${var2}" (${typeof var2}) === ${var1} (${typeof var1}) -> ${var2 === var1}`);
console.log(`${var1} (${typeof var1}) === ${var3} (${typeof var3}) -> ${var1 === var3}`);
console.log(`${var1} (${typeof var1}) === ${var1} (${typeof var1}) -> ${var1 === var1}`);


// --- not equal (!=)
console.log("-------------- not equal (!=)");

console.log(`${var1} (${typeof var1}) != "${var2}" (${typeof var2}) -> ${var1 != var2}`);
console.log(`"${var2}" (${typeof var2}) != ${var1} (${typeof var1}) -> ${var2 != var1}`);
console.log(`${var1} (${typeof var1}) != ${var3} (${typeof var3}) -> ${var1 != var3}`);

// --- strict not equal (!==)
console.log("-------------- strict not equal (!==)");

console.log(`${var1} (${typeof var1}) !== "${var2}" (${typeof var2}) -> ${var1 !== var2}`);
console.log(`"${var2}" (${typeof var2}) !== ${var1} (${typeof var1}) -> ${var2 !== var1}`);
console.log(`${var1} (${typeof var1}) !== ${var3} (${typeof var3}) -> ${var1 !== var3}`);
console.log(`${var1} (${typeof var1}) !== ${var1} (${typeof var1}) -> ${var1 !== var1}`);

// --- greater than (>)
console.log("-------------- greater than (>)");

console.log(`${var1} (${typeof var1}) > "${var2}" (${typeof var2}) -> ${var1 > var2}`);
console.log(`"${var2}" (${typeof var2}) > ${var1} (${typeof var1}) -> ${var2 > var1}`);
console.log(`${var1} (${typeof var1}) > ${var3} (${typeof var3}) -> ${var1 > var3}`);

// --- greater than or equal (>=)
console.log("-------------- greater than or equal (>=)");

console.log(`${var1} (${typeof var1}) >= "${var2}" (${typeof var2}) -> ${var1 >= var2}`);
console.log(`"${var2}" (${typeof var2}) >= ${var1} (${typeof var1}) -> ${var2 >= var1}`);
console.log(`${var1} (${typeof var1}) >= ${var3} (${typeof var3}) -> ${var1 >= var3}`);

// --- less than (<)
console.log("-------------- less than (<)");

console.log(`${var1} (${typeof var1}) < "${var2}" (${typeof var2}) -> ${var1 < var2}`);
console.log(`"${var2}" (${typeof var2}) < ${var1} (${typeof var1}) -> ${var2 < var1}`);
console.log(`${var1} (${typeof var1}) < ${var3} (${typeof var3}) -> ${var1 < var3}`);

// --- less than or equal (<=)
console.log("-------------- less than or equal (<=)");

console.log(`${var1} (${typeof var1}) <= "${var2}" (${typeof var2}) -> ${var1 <= var2}`);
console.log(`"${var2}" (${typeof var2}) <= ${var1} (${typeof var1}) -> ${var2 <= var1}`);
console.log(`${var1} (${typeof var1}) <= ${var3} (${typeof var3}) -> ${var1 <= var3}`);

// 4. Bitwise Operator

const myNumber3 = 5;
const myNumber4 = 15;

// --- Bitwise AND (&)
console.log(`${myNumber3} & ${myNumber4} -> ${myNumber3 & myNumber4}`);

// --- Bitwise OR (|)
console.log(`${myNumber3} | ${myNumber4} -> ${myNumber3 | myNumber4}`);

// --- Bitwise NOT (~)
console.log(`~${myNumber4} -> ${~myNumber4}`);

// --- Bitwise XOR (^)
console.log(`${myNumber3} ^ ${myNumber4} -> ${myNumber3 ^ myNumber4}`);
