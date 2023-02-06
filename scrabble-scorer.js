// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};
function initialPrompt() {
  console.log("Let's play some Scrabble!\n")
  let word = input.question("Enter a word to get a score: ");
  return word;
};
////////////////////////////////////////////////////////////////////////////
/*function oldScrabbleScorer(word) {

  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Score for '${word}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}*/
function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = 0;

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += Number(pointValue);
      }
    }
  }

  return `Score for '${word}': ${letterPoints}`;
}
let word = initialPrompt();
const pointValue = oldScrabbleScorer(word);
////////////////////////////////////////////////////////////////////
let simpleScore = function(word) {
 /* wordSimple = input.question("Enter a word to get a simple score: ")*/
  
  word = word.toUpperCase();
 /* for (i = 0; i < word.length; i++) */{
    console.log(`Score for '${word}': ${word.length}`);
  }
};
/////////////////////////////////////////////////////////////////////
function vowelBonusScore(word) {
    //word = word.toUpperCase();
  let score = 0;
  const vowels = 'aeiouAEIOU';
  
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      score += 3;
    } else {
      score += 1;
    }
  }
  
  return console.log(`Score for '${word}': ${score}`);; 
} 



let scrabbleScore = function(word){
    word = word.toUpperCase();
  let letterPoints = 0;

  for (let i = 0; i < word.length; i++) {
    for (const pointValue in oldPointStructure) {
      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += Number(pointValue);
      }
    }
  }

  /*return */console.log(`Score for '${word}': ${letterPoints}`);
};
//creating objects to store in scoringAlgorithms
let scrabbleScore0 = {
  name: "Scrabble",
  description: "The new scoring algorithm",
  scoringFunction: scrabbleScore
};
let simpleScoreO = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
};
let vowelBonusScoreO = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
};

const scoringAlgorithms = [scrabbleScore0, simpleScoreO, vowelBonusScoreO];
//console.log(scoringAlgorithms[0].name);
/////////////////////////////////////////////////////////////////////
function scorerPrompt() {
  let whichScoreMethod = input.question(`Which scoring algorithm would you like to use?\n \n0 -  ${scoringAlgorithms[0].name}  ${scoringAlgorithms[0].description}\n1 -  ${scoringAlgorithms[1].name} ${scoringAlgorithms[1].description}\n2 -  ${scoringAlgorithms[2].name}  ${scoringAlgorithms[2].description}\nEnter 0, 1, or 2: \n`);
  if (whichScoreMethod === "0") {

    console.log(`${scoringAlgorithms[0].scoringFunction(word)}`);
  }
  else if (whichScoreMethod === "1") {
    console.log(scoringAlgorithms[1].scoringFunction(word));
  }
  else {
    
    console.log(scoringAlgorithms[2].scoringFunction(word));
  }
}

////////////////////////////////////////////////////////////////////
let  newPointStructure = {};
function transform (oldPointStructure){
for (let key in oldPointStructure) {
   let value = oldPointStructure[key];
   for (let i = 0; i < value.length; i++) {
      newPointStructure[value[i].toUpperCase()] = {points: key};
   }
}
}transform (oldPointStructure)
//console.log(newPointStructure);
 
function runProgram() {
  scorerPrompt();


 // const string = vowelBonusScore(word);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt,
};

