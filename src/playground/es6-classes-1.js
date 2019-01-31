class Person {
    constructor(name = "anonymous", age = 0) {
        this.name = name;
        this.age = age;
    };
    getGreeting() {
        // return "Hello, I am " + this.name + "!";
        return `Hello, I am ${this.name}`
    };
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
};

const me = new Person("Nick Woodward", 23);
console.log(me.getGreeting());
console.log(me);
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other);
console.log(other.getDescription());