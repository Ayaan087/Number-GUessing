#! /usr/bin/env node
import inquirer from "inquirer";
const computerGeneratednumber = Math.floor(Math.random() *10)

const answer = await inquirer.prompt([
{
message:"Guess A Number From 1 Till 10",
type:"number",
name:"UserGuess"
}

])
const {UserGuess} = answer
if (UserGuess === computerGeneratednumber){
    console.log(UserGuess , "userGuess" , computerGeneratednumber)
    console.log("Correct Number,You Win")
}
else (
    console.log(UserGuess , "userGuess" , computerGeneratednumber),
    console.log("Incorrect Number,Pls Try Again")
)
