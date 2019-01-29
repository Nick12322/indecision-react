console.log("App.js is running")

var template = ( 
    <div>
        <h1>Test</h1>
        <p>This is info</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Nick Woodward</h1>
        <p>Age: 23</p>
        <p>Location: San Diego, CA</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);