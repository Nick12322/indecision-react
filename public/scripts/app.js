"use strict";

console.log("App.js is running");

var app = {
    title: "Title String",
    subtitle: "Subtitle String",
    options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options " + app.options : "No Options"
    )
);

var user = {
    name: "Nick",
    age: 23,
    location: "San Diego"
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Loation: ",
            location
        );
    };
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
