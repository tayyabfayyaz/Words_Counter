import inquirer from "inquirer";
let userAnwser = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Write the Sentence or Paragraph for counts the words:"
});
let wordCounter = userAnwser.sentence.trim().split(" ");
console.log(wordCounter);
let result = `${wordCounter.length} :words in your sentence or paragraph`;
console.log(result);
