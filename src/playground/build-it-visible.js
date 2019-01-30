const app = {
    deatailDisplay: false,
};


const toggleDisplay = () => {
    console.log("display test")
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



const appRoot = document.getElementById("app");

const render = () => {

    let details;
    let buttonText;
    if (app.detailDisplay) {
        details = <p>Here's some details!</p>
        buttonText = "Details Shown!"
    } else {
        details
        buttonText = "Click to see details!"
    };

    const template = (
        <div>
            <h1>Visbility Toggle</h1>
            <button name="toggle" onClick={toggleDisplay}>{buttonText}</button>
            {details}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};


render();