/*
    Primitive Data Type :
        - number -> floating point numbers
        - string
        - boolean
        - null
        - undefined
        - symbol
        - BigInt
*/

let myString = 'z'; // String
let myString2 = "z"; // String

console.log(myString);
console.log(myString2);
console.log(typeof myString);
console.log(typeof myString2);

let pico = "Pico Margondez"; // String
let sparky = 'Sparky White'; // String

console.log(pico);
console.log(sparky);
console.log(typeof pico);
console.log(typeof sparky);

let umurPico = 3; // number
let isSparkyWhite = true; // boolean

console.log(`umurPico : ${umurPico} -> type ${typeof umurPico}`);
console.log(`isSparkyWhite : ${isSparkyWhite} -> type ${typeof isSparkyWhite}`);

let phi = 3.14; // number
console.log(`phi : ${phi} -> typeof phi ${typeof phi}`);


/* 
    Non Primitive Data Type
*/

let myDog = {
    'name': "Pico Margondez",
    'gender': "Female",
    'bark': function() {
        console.log("Whoof!");
    }
}
myDog.bark();