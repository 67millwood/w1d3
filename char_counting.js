
var text = "Here is a line of text for you to test";

var outputObj = {}


//outputObj.happy = 6;

function countLetters (input) {
  var letters = input.split(' ').join("");
  var letters = letters.toLowerCase();
  for (var i = 0; i < letters.length; i++) {
    if (!outputObj[letters[i]]) {
      outputObj[letters[i]] = 1;
    }
    else {
    outputObj[letters[i]] += 1;
    }
  }
  console.log(outputObj);
}





countLetters(text);

