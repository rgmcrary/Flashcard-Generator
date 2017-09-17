var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer = require("inquirer");


// Function option call
inquirer
  .prompt([
    {
      type: "list",
      name: "cardType",
      message: "What type of card do you want to create??",
      choices: ["BasicCard", "ClozeCard"]
    }
  ])
  .then(function(answer) {
    console.log(answer.cardType)
    // BasicCard creation
    if (answer.cardType[0] === "BasicCard") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "front",
            message: "Please input the question."
          },
          {
            type: "input",
            name: "back",
            message: "Please input the answer."
          }
        ])
        .then(function(basicAns) {
          var basicCard = BasicCard(basicAns.front, basicAns.back);
          console.log(basicCard.front);
          console.log(basicCard.back);
        });
    } else if (answer.cardType[0] === "ClozeCard") {
      // ClozeCard creation
      inquirer
        .prompt([
          {
            type: "input",
            name: "text",
            message: "Please input the full sentence."
          },
          {
            type: "input",
            name: "cloze",
            message: "Please input the cloze."
          }
        ])
        .then(function(clozeAns) {
          var clozeCard = ClozeCard(clozeAns.text, clozeAns.cloze);
          console.log(clozeCard.fullText);
          console.log(clozeCard.partialText);
          console.log(clozeCard.cloze);
        });
    }
  });
