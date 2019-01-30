"use strict";

var app = {
    deatailDisplay: false
};

var toggleDisplay = function toggleDisplay() {
    console.log("display test");
    if (app.detailDisplay) {
        app.detailDisplay = false;
        console.log(app.detailDisplay);
        render();
    } else {
        app.detailDisplay = true;
        console.log(app.detailDisplay);
        render();
    };
};

var appRoot = document.getElementById("app");

var render = function render() {

    var details = void 0;
    var buttonText = void 0;
    if (app.detailDisplay) {
        details = React.createElement(
            "p",
            null,
            "Here's some details!"
        );
        buttonText = "Details Shown!";
    } else {
        details;
        buttonText = "Click to see details!";
    };

    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visbility Toggle"
        ),
        React.createElement(
            "button",
            { name: "toggle", onClick: toggleDisplay },
            buttonText
        ),
        details
    );

    ReactDOM.render(template, appRoot);
};

render();
