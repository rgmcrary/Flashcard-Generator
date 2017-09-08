var BasicCard = require ("./BasicCard.js");
var ClozeCard = require ("./ClozeCard.js");

var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

    console.log(firstPresident.front); 
    console.log(firstPresident.back);   
    
    
    var firstPresidentCloze = ClozeCard(
        "George Washington was the first president of the United States.", "George Washington");
    
    console.log(firstPresidentCloze.cloze);
    console.log(firstPresidentCloze.fullText);
    console.log(firstPresidentCloze.partialText);