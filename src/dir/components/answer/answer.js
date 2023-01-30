"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../css/app.css");
const Answer = (props) => {
    const answer = props.ans;
    // const answer = "MESSI";
    return (react_1.default.createElement("div", { className: "paragraph" }, answer === null ? react_1.default.createElement("h1", null, " ASK A QUESTION? ") : react_1.default.createElement("p", null, answer)));
};
exports.default = Answer;
