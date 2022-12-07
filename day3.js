const fs = require('fs');

// let item = "a";
// console.log('a: '+ (item.charCodeAt(0)-96));
// item = "A";
// console.log('A: '+ (item.charCodeAt(0)-38));


// //Part 1
// let rucksacks = [];
// const allFileContents = fs.readFileSync('day3.txt', 'utf-8');
// allFileContents.split(/\n/).forEach(line =>  {
//   if (line == "") return;
//   let rucksack = line.split("");
//   let compartment1 = [];
//   let compartment2 = [];

//   let offset = rucksack.length/2;
//   for(let i = 0; i < rucksack.length / 2; i++) {
//   	compartment1.push(rucksack[i]); 
//   	compartment2.push(rucksack[i+offset]); 
//   }
//   rucksacks.push([compartment1, compartment2]);
  
// });


// let priorityItemTotal = 0;
// let foundMatch = false;
// rucksacks.forEach(rucksack => {
// 	console.log(`RuckSack: ${rucksack} `);
// 	foundMatch = false;

// 	rucksack[0].forEach(item => {
// 		if (rucksack[1].includes(item)) {
			
// 			if (foundMatch) return;
// 			if (item.charCodeAt(0)>90){
// 				priorityItemTotal += item.charCodeAt(0)-96;
// 			} else {
// 				priorityItemTotal += item.charCodeAt(0)-38;
// 			}
// 			console.log(`ITEM: ${item} `+ item.charCodeAt(0));
// 			foundMatch = true;
// 			return;
// 		}
// 	});
// 	if(foundMatch) {
// 		return;
// 	}
// });

// console.log(priorityItemTotal);

//Part 2
let rucksacks = [];
const allFileContents = fs.readFileSync('day3.txt', 'utf-8');
allFileContents.split(/\n/).forEach(line =>  {
  if (line == "") return;
  let rucksack = line.split("");
  rucksacks.push(rucksack);
});


let priorityItemTotal = 0;
let foundMatch = false;

for (let i=0; i<rucksacks.length; i=i+3) {

	console.log(`RuckSack-Leader: ${rucksacks[i]} `);
	foundMatch = false;

	rucksacks[i].forEach(item => {
		if (rucksacks[i+1].includes(item) && rucksacks[i+2].includes(item)) {
			if (foundMatch) return;
			if (item.charCodeAt(0)>90){
				priorityItemTotal += item.charCodeAt(0)-96;
			} else {
				priorityItemTotal += item.charCodeAt(0)-38;
			}
			console.log(`ITEM: ${item} `);
			foundMatch = true;
			return;
		}
	});
	if(foundMatch) {
		continue;
	}

}

console.log(priorityItemTotal);
//console.log(rucksacks[0]);
