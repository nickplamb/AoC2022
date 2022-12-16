var fs = require('fs');
const { createSecureContext } = require('tls');
 
let myScore = 0;

let myPlayScores = {'X' : 1, 'Y' : 2, 'Z' : 3};
let outcomes = { 
  "AX" : 3, "AY": 6, "AZ": 0,
  "BX" : 0, "BY": 3, "BZ": 6,
  "CX" : 6, "CY": 0, "CZ": 3,
}

let playNeeded = { 
  'A': { 0: 3, 3: 1, 6: 2 },
  'B': { 0: 1, 3: 2, 6: 3 },
  'C': { 0: 2, 3: 3, 6: 1 } 
}
let part2Outcomes = { 
"AX" : 0, "AY": 3, "AZ": 6,
"BX" : 0, "BY": 3, "BZ": 6,
"CX" : 0, "CY": 3, "CZ": 6,
}
//0 lose, 3 draw, 6 win

const allFileContents = fs.readFileSync('day2Input.txt', 'utf-8');
// Part 2
allFileContents.split(/\n/).forEach(round =>  {
  if (round !== '') {
    let thisRound = round.split(" ");
    let roundOutcome= part2Outcomes[thisRound[0]+thisRound[1]];
    myScore += roundOutcome;
    myScore += playNeeded[thisRound[0]][roundOutcome];
    console.log(`Outcome: ${roundOutcome}, My Play: ${playNeeded[thisRound[0]][roundOutcome]}`)
  }
});

//Part 1
// allFileContents.split(/\n/).forEach(round =>  {
//   if (round !== '') {
//     let thisRound = round.split(" ");
//     myScore += outcomes[thisRound[0]+thisRound[1]] + myPlayScores[thisRound[1]];
//     console.log(thisRound[0] + thisRound[1])
//   }
// });

console.log("My Score: "+ myScore);
