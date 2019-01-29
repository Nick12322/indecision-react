// function square (x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;



// console.log(squareArrow(9));

const getFirstName = (fullName) => {
    const firstName = fullName.split(" ")[0];
    console.log(firstName);
};

const getFirstNameShort = (fullName) => console.log(fullName.split(" ")[0]);

getFirstName("Nick Woodward");
getFirstNameShort("Tom Jenkins");