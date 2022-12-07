const fs = require('fs');

let cleaningAssignments = [];
const allFileContents = fs.readFileSync('day4.txt', 'utf-8');
allFileContents.split(/\n/).forEach(line =>  {
  if (line == "") return;
  let team = line.split(",");
  cleaningAssignments.push([team[0].split('-'), team[1].split('-')])
});

let countMatched = 0;
cleaningAssignments.forEach((team) => {
	if(parseInt(team[0][0]) >= parseInt(team[1][0]) && parseInt(team[0][0]) <= parseInt(team[1][1])) {
		countMatched++;
		console.log(team);
	} else if (parseInt(team[0][1]) >= parseInt(team[1][0]) && parseInt(team[0][1]) <= parseInt(team[1][1])) {
		countMatched++;
		console.log(team);
	} else if(parseInt(team[1][0]) >= parseInt(team[0][0]) && parseInt(team[1][0]) <= parseInt(team[0][1])) {
		countMatched++;
		console.log(team);
	} else if (parseInt(team[1][1]) >= parseInt(team[0][0]) && parseInt(team[1][1]) <= parseInt(team[0][1])) {
		countMatched++;
		console.log(team);
	}
});

console.log(countMatched);