#! /usr/bin/env node
import inquirer from "inquirer";
console.log("THIS CALCULATOR IS MADE BY HASSAN MASOOD");
const answer = await inquirer.prompt([
    { message: "ENTER FIRST NUMBER", type: "number", name: "FIRSTNUMBER" },
    { message: "ENTER SECOND NUMBER", type: "number", name: "SECONDNUMBER" },
    {
        message: "ONE OF THE OPERATOR TO PERFORM OPERATION",
        type: "list",
        name: "OPERATOR",
        choices: ["ADDITION", "SUBRACTION", "MULTIPLICATION", "DIVISION"],
    },
]);
//conditonal statement
if (answer.OPERATOR === "ADDITION") {
    console.log(answer.FIRSTNUMBER + answer.SECONDNUMBER);
}
else if (answer.OPERATOR === "SUBRACTION") {
    console.log(answer.FIRSTNUMBER - answer.SECONDNUMBER);
}
else if (answer.OPERATOR === "MULTIPLICATION") {
    console.log(answer.FIRSTNUMBER * answer.SECONDNUMBER);
}
else if (answer.OPERATOR === "DIVISION") {
    console.log(answer.FIRSTNUMBER / answer.SECONDNUMBER);
}
else {
    console.log("please select valid operator");
}
console.log("THE END");
