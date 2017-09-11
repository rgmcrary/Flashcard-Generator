var ClozeCard = function(text, cloze) {
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, cloze);
  }
  this.fullText = text;

  if (text.indexOf(cloze) !== -1) {
    this.partialText = text.replace(cloze, "...");
  } else {
    console.log("This text doesn't include the cloze value you entered.");
  }
  this.cloze = cloze;
};



module.exports = ClozeCard;
