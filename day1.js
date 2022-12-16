var fs = require('fs');
const { createSecureContext } = require('tls');
 
// Open file demo.txt in read mode
// fs.open('day1Input.txt', 'r', readFile(err, f));

// function readFile(err, f) {
  
// }
let elves = [];

const allFileContents = fs.readFileSync('day1Input.txt', 'utf-8');
allFileContents.split(/\n\n/).forEach(elfStash =>  {
  let thisElfStash = elfStash.split(/\n/);
  elves.push(thisElfStash);
  
});

// Summ each array
elves.forEach((elfPack, index) => {
  elves[index] = parseInt(elfPack.reduce((prev, curr) => {
    return parseInt(prev) + parseInt(curr);
  }))
});

let largestStash = elves.reduce((prev, curr) => {
  if(parseInt(curr) > parseInt(prev)) {
    return parseInt(curr);
  } else {
    return parseInt(prev);
  }
});
// console.log(largestStash);

//Part 2
elves.sort((a, b) =>{
  return b - a
});
// console.log(elves);
console.log(elves[0] + elves[1] + elves[2]);