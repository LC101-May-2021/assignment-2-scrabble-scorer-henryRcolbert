// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

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

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   // console.log("Let's play some scrabble! Enter a word:"); 
  let str = "";
  str = input.question("Let's play some scrabble! Enter a word:  "); 
  // console.log(str); 

  return str;
};



function simpleScore(word) {

 let simpScore = 0;

  for(let i = 0; i < word.length; i++) {
    simpScore += 1;
  }
   return simpScore;

}
function vowelBonusScore (word) {

  let vbs = 0;
  word = word.toUpperCase();

  for(let i = 0; i < word.length; i++) {
 
    if(word[i] === 'A') { 
      vbs += 3; 
    }
    
    else if(word[i] === 'E') {
      vbs += 3;
    }
    else if(word[i] === 'I') {
      vbs += 3;
    }
    else if(word[i] === 'O') {
      vbs += 3;
    }
    else if(word[i] === 'U') {
      vbs += 3;
    }
    else { 
      vbs += 1; 
    }
       
  }

  return vbs;    

}


function scrabbleScore(word) { 

 	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
   for(item in newPointStructure){
    if(word[i] === item) {
	 
    
    letterPoints += Number(newPointStructure[item]);
    
    }
   }  
  }

	return letterPoints;
  
}



const scoringAlgorithms = [
{ 
  name: "Simple Score",
  description: "Each letter is worth 1 point",
  scorerFunction: simpleScore
}
,
{
  name:"Bonus Vowels",
  description: 	"Vowels are 3 pts, consonants are 1 pt",
  scorerFunction: vowelBonusScore
}
,
{
  name: "Scrabble",
  description: "The traditional scoring algorithm",
  scorerFunction: scrabbleScore
}




];

function scorerPrompt() {
let reponse = 0;

console.log( "Which scoring algorithm would you like to use?" );
console.log();
console.log("0 - Simple: One point per character" );
console.log("1 - Vowel Bonus: Vowels are worth 3 points" );
console.log("2 - Scrabble: Uses scrabble point system");
let response = input.question("Enter 0, 1, or 2: "); 

return response;



}

function transform(oldPointStructure) { 
 let newStruct = {};
  for(const key in oldPointStructure) {
       // oldPointStructure[key];
       let newKey = oldPointStructure[key]; 
        newKey = String(newKey); 
       
    for(i = 0; i < newKey.length; i++){
      let kiki = newKey[i]; 
      
   // console.log(newKey[i]); the array of chars 
   // console.log(key)  the values
      newStruct[kiki] = Number(key);
      
       
       // newStruct[newKey] = newKey[i];
      
      // objectName["new-key"] = propertyValue;


    }
  }
return newStruct;
}; 

let newPointStructure = transform(oldPointStructure);





function runProgram() {
   
   str = initialPrompt(); 
   // console.log(oldScrabbleScorer(str)); 
   let ans = scorerPrompt(); 

   console.log("score for " + str + ": " + scoringAlgorithms[ans].scorerFunction(str));
   
   
   /*
   let simpScore =  simpleScore(str); 
   console.log(simpScore);
   let vowel = vowelBonusScore(str); 
   console.log(vowel); 
   let scrab = scrabbleScore(str); 
   console.log(scrab);
   */
   
   // console.log("algorithm name: ", scoringAlgorithms[2].name);
  //  console.log("scorerFunction result: ", scoringAlgorithms[2].scorerFunction(str));
   
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
	scorerPrompt: scorerPrompt
};

