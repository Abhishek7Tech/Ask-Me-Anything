"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
require("../src/css/app.css");
const footer_1 = __importDefault(require("./components/footer/footer"));
const searchBox_1 = __importDefault(require("./components/searchbox/searchBox"));
const header_1 = __importDefault(require("./components/header/header"));
const answer_1 = __importDefault(require("./components/answer/answer"));
function App() {
    const [answer, setAnswer] = (0, react_2.useState)(null);
    return (react_1.default.createElement("div", { className: "bg" },
        react_1.default.createElement(header_1.default, null),
        react_1.default.createElement(searchBox_1.default, { text: setAnswer }),
        react_1.default.createElement(answer_1.default, { ans: answer }),
        react_1.default.createElement(footer_1.default, null)));
}
exports.default = App;
