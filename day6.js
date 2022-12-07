const fs = require('fs');

let cleaningAssignments = [];
const dataStream = fs.readFileSync('day6.txt', 'utf-8');

const isUnique = (charBuffer, test) => {
  // console.log(`search ${charBuffer} for ${test}`);
  if(!charBuffer.includes(test)) {
    let length = charBuffer.length;
    if (length == 1) {
      // console.log('success ' + charBuffer);
      return true;
    }
    return isUnique(charBuffer.substring(0, length-1), charBuffer[length-1])
  }
  return false;
}

// // part 1
// for (let i = 3; i <= dataStream.indexOf('\n'); i++) {
//   if( isUnique(dataStream.substring(i-3, i), dataStream[i]) === true ) {
//     console.log(dataStream.substring(i-3, i+1));
//     console.log(`Start signal found at index ${i+1}`);
//     break;
//   }
// }

// part 2
for (let i = 13; i <= dataStream.indexOf('\n'); i++) {
  if( isUnique(dataStream.substring(i-13, i), dataStream[i]) === true ) {
    console.log(dataStream.substring(i-13, i+1));
    console.log(`Start signal found at index ${i+1}`);
    break;
  }
}