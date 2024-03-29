"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("../../css/app.css");
const api_1 = __importDefault(require("../../api/api"));
const SearchBox = (props) => {
    const [input, setInput] = (0, react_1.useState)("");
    const [token, setToken] = (0, react_1.useState)(0);
    const InputHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        console.log("props");
        if (input.length > 1) {
            const ans = yield (0, api_1.default)(input);
            props.text(ans.choices[0].text);
            const tokens = ans.usage.completion_tokens;
            setToken(+tokens + token);
        }
        else {
            alert("Is this even a question? 😂🤣😂");
        }
        event.target.reset();
    });
    const questionHandler = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };
    return (react_1.default.createElement("form", { onSubmit: InputHandler, className: "search" },
        react_1.default.createElement("div", { className: "input" },
            react_1.default.createElement("input", { onChange: questionHandler, type: "text", placeholder: "Ask a question..." })),
        react_1.default.createElement("div", { className: "submit" },
            react_1.default.createElement("button", { type: "submit" }, " Ask! ")),
        react_1.default.createElement("h3", null,
            "Token Used: ",
            token,
            " ")));
};
exports.default = SearchBox;
