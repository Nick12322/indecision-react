"use strict";

// function square (x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(9));

var getFirstName = function getFirstName(fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
};

var getFirstNameShort = function getFirstNameShort(fullName) {
    return console.log(fullName.split(" ")[0]);
};

getFirstName("Nick Woodward");
getFirstNameShort("Tom Jenkins");
