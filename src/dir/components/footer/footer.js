"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../../css/app.css");
const Footer = () => {
    return (react_1.default.createElement("footer", null,
        react_1.default.createElement("a", { href: "https://chat.openai.com/" }, "Uses Chat GPT"),
        react_1.default.createElement("div", null, " \u00A9 All right Reserved! ")));
};
exports.default = Footer;
