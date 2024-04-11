#! /usr/bin/env node
import inquirer from "inquirer";
//asking questions from users through inquirer
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "Number", name: "firstNumber" },
    { message: "Enter second Number ", type: "Number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
// conditional statment
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
