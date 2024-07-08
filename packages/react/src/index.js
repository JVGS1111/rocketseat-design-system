"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = App;
var styles_1 = require("./styles");
var Button = (0, styles_1.styled)("button", {
    fontFamily: '$default',
    backgroundColor: "$ignite500",
    borderRadius: "$md",
    padding: "$4"
});
function App() {
    return React.createElement(Button, null, "Hello World");
}
