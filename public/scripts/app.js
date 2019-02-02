"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityToggle = function (_React$Component) {
    _inherits(VisibilityToggle, _React$Component);

    function VisibilityToggle(props) {
        _classCallCheck(this, VisibilityToggle);

        var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

        _this.handleVisbilityChange = _this.handleVisbilityChange.bind(_this);
        _this.state = {
            visbility: false
        };
        return _this;
    }

    _createClass(VisibilityToggle, [{
        key: "handleVisbilityChange",
        value: function handleVisbilityChange() {
            this.setState(function (prevState) {
                return {
                    visbility: !prevState.visbility
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleVisbilityChange },
                    this.state.visbility ? "Click to hide details" : "Click to show details"
                ),
                this.state.visbility && React.createElement(
                    "p",
                    null,
                    "Some details"
                )
            );
        }
    }]);

    return VisibilityToggle;
}(React.Component);

;

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById("app"));

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
