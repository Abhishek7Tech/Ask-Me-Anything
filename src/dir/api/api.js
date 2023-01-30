"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAnswer = (question) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("API", process.env.REACT_APP_OPEN_API_KEY);
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.REACT_APP_OPEN_API_KEY,
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Answer this, ${question} ?, like a pro in shortest form possible`,
            max_tokens: 50,
            temperature: 0.8,
        }),
    };
    try {
        const response = yield fetch("https://api.openai.com/v1/completions", requestOptions);
        const answer = yield response.json();
        console.log("Answeer");
        return answer;
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = getAnswer;
