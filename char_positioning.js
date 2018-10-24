
var text2 = "lighthouse in the house";

var outputObj = {}


//outputObj.happy = 6;

function positionLetters (input) {
  var letters = input.split(' ').join("");
  var letters = letters.toLowerCase();
  for (var i = 0; i < letters.length; i++) {
    if (!outputObj[letters[i]]) {
      outputObj[letters[i]] = [i];
    }
    else {
    outputObj[letters[i]].push(i);
    }
  }
  console.log(outputObj);
}

positionLetters(text2);
