#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const computerGeneratednumber = Math.floor(Math.random() * 10);
const answer = await inquirer_1.default.prompt([
    {
        message: "Guess A Number From 1 Till 10",
        type: "number",
        name: "UserGuess"
    }
]);
const { UserGuess } = answer;
if (UserGuess === computerGeneratednumber) {
    console.log(UserGuess, "userGuess", computerGeneratednumber);
    console.log("Correct Number,You Win");
}
else
    (console.log(UserGuess, "userGuess", computerGeneratednumber),
        console.log("Incorrect Number,Pls Try Again"));
