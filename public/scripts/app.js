"use strict";

console.log("App.js is running");

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Test"
    ),
    React.createElement(
        "p",
        null,
        "This is info"
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Nick Woodward"
    ),
    React.createElement(
        "p",
        null,
        "Age: 23"
    ),
    React.createElement(
        "p",
        null,
        "Location: San Diego, CA"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
