console.log("App.js is running")

const app = {
    title: "Title String",
    subtitle: "Subtitle String",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options " + app.options : "No Options"}</p>
            <p>{app.options.length}</p>
            <button name="removeAll" onClick={onRemoveAll}>Remove All Options</button>
            <ol>
                {app.options.map((option) => {
                    return <li key={option}>{option}</li>
                })}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};


render();