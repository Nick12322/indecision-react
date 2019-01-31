class Person {
    constructor(name = "anonymous", age = 0) {
        this.name = name;
        this.age = age;
    };
    
    getGreeting() {
        // return "Hello, I am " + this.name + "!";
        return `Hello, I'm ${this.name}.`
    };

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    };
};

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    };

    hasMajor() {
        return !!this.major;
    };

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        };

        return description;
    };
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    };

    hasHomeLocation() {
        return !!this.homeLocation;
    };

    getGreeting() {
        let greeting = super.getGreeting();

        if(this.hasHomeLocation()) {
            greeting += ` I'm from ${this.homeLocation}`;
        };

        return greeting;
    };
};

const me = new Traveler("Nick Woodward", 23, "San Diego");
console.log(me);
console.log(me.getGreeting());

const other = new Traveler("Tom", 14);
console.log(other.getGreeting());