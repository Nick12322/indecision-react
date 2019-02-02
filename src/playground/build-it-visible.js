class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisbilityChange = this.handleVisbilityChange.bind(this);
        this.state = {
            visbility: false,
        };
    };

    handleVisbilityChange() {
        this.setState((prevState) => {
            return {
                visbility: !prevState.visbility
            };
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleVisbilityChange}>{this.state.visbility ? "Click to hide details" : "Click to show details"}</button>
                {this.state.visbility && <p>Some details</p>}
            </div>
        );
    };
};

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));



// const app = {
//     deatailDisplay: false,
// };


// const toggleDisplay = () => {
//     console.log("display test")
//     if (app.detailDisplay) {
//         app.detailDisplay = false;
//         console.log(app.detailDisplay);
//         render();
//     } else {
//         app.detailDisplay = true;
//         console.log(app.detailDisplay);
//         render();
//     };
// };



// const appRoot = document.getElementById("app");

// const render = () => {

//     let details;
//     let buttonText;
//     if (app.detailDisplay) {
//         details = <p>Here's some details!</p>
//         buttonText = "Details Shown!"
//     } else {
//         details
//         buttonText = "Click to see details!"
//     };

//     const template = (
//         <div>
//             <h1>Visbility Toggle</h1>
//             <button name="toggle" onClick={toggleDisplay}>{buttonText}</button>
//             {details}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };


// render();