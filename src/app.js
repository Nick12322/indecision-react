console.log("App.js is running")

const app = {
    title: "Title String",
    subtitle: "Subtitle String",
    options: ["One", "Two"]
};

const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options " + app.options : "No Options"}</p>
    </div>
);

const user = {
    name: "Nick",
    age: 23,
    location: "San Diego"
};

function getLocation(location) {
    if (location){
        return <p>Loation: {location}</p>;
    };
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);