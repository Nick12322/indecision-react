console.log("App.js is running")

var app = {
    title: "Title String",
    subtitle: "Subtitle String"
};

var template = ( 
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
    </div>
);

var user = {
    name: "Nick",
    age: 23,
    location: "San Diego"
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);