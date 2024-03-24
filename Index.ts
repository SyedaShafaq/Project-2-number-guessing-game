#! /usr/bin/env node

//This is CLI based number guessing game
//Start with importing inquirer

import inquirer from "inquirer";
const guessingNum:number = Math.floor(Math.random() * 10 + 1);

const guessingAns = await inquirer.prompt([
    {
        name : "userGuessedNum",
        type : "number",
        message : "Please guess a number b/w 1-10",


}])


//Use If & Else statement

if(guessingAns.userGuessedNum === guessingNum){

console.log(`Congratulations! You guessed a correct number`);

}
else{
    console.log(`Sorry! You guessed a wrong number`);
    

}

