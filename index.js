#!usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([{
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
    {
        type: "number",
        name: "firstNo",
        message: "Enter first number"
    },
    {
        type: "number",
        name: "secondNo",
        message: "Enter second number"
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.firstNo + answer.secondNo);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNo - answer.secondNo);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNo * answer.secondNo);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNo / answer.secondNo);
}
else {
    console.log("Please select valid operator");
}
