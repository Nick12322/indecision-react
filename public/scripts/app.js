"use strict";

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 11, 1001));

var user = {
    name: "Nick",
    cities: ["San Diego", "Woodbridge"],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [12, 24],
    multiplyBy: 5,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
