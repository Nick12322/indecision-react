console.log("App.js is running")

// var template = <p>Text JSX from app.js</p>;
var template = React.createElement(
    "h1",
    {id: "testid"},
    "text test"
)
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);