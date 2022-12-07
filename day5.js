const fs = require('fs');

let cleaningAssignments = [];
const allFileContents = fs.readFileSync('day5.txt', 'utf-8');
let splitData = allFileContents.split(/\n\n/);
let stacks = Array.from(Array(9), () => []);
//console.log(stacks);

let stacksData = splitData[0].split(/\n/);
for (let t = stacksData.length; t >=1; t--) {
  //console.log(stacksData);
  //console.log(stacksData[t-1]);
  if (stacksData[t-1].charAt(1) == "1") continue;
  for (let i = 1; i <= 9; i++) {
    let characterIndex = i+((i-1)*3);
    //console.log(stacksData[t-1].charAt(characterIndex));
    if(stacksData[t-1].charAt(characterIndex) != " ") {
      //console.log(i-1);
      stacks[i-1].push(stacksData[t-1].charAt(characterIndex));
      //console.log(stacks[i-1]);
    }
  }
} 
//console.log(stacks);

// let stacksData2 = splitData[1].split(/\n/).forEach(line =>  { 
//   if(line == "") return;
//   let procedure = line.match(/\d+/g);
//   if (procedure[0] >= 1) {
//     for (let x=1; x<=procedure[0]; x++) {
//       stacks[procedure[2]-1].push(stacks[procedure[1]-1].pop());
//     }
//   } 
// });

// let result = '';
// stacks.forEach(stack => {
//   result += stack.pop();
// });

// console.log(result);

// PART 2

let stacksData2 = splitData[1].split(/\n/).forEach((line, index) =>  { 
  if(line == "") return;
  let procedure = line.match(/\d+/g);
  if (procedure[0] >= 1) {
    let start = stacks[procedure[1]-1].length - procedure[0]; 
    // console.log(stacks[procedure[1]-1].length );
    // console.log('# to move ' + procedure[0]);
    // console.log(stacks[procedure[2]-1]);
    stacks[procedure[2]-1].push(...stacks[procedure[1]-1].splice(start));
    // console.log(stacks[procedure[2]-1]);
  } 
});

let result = '';
stacks.forEach(stack => {
  result += stack.pop();
});

console.log(result);