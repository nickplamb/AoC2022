const fs = require('fs');

let cleaningAssignments = [];
const dataStream = fs.readFileSync('day7.txt', 'utf-8');

let totalSize = 0;

// const getDirectorySize = (directory, children) => {
//   // console.log(`search ${charBuffer} for ${test}`);
//   if(!charBuffer.includes(test)) {
//     let length = charBuffer.length;
//     if (length == 1) {
//       // console.log('success ' + charBuffer);
//       return true;
//     }
//     return isUnique(charBuffer.substring(0, length-1), charBuffer[length-1])
//   }
//   return false;
// }

// // part 1
// for (let i = 3; i <= dataStream.indexOf('\n'); i++) {
//   if( isUnique(dataStream.substring(i-3, i), dataStream[i]) === true ) {
//     console.log(dataStream.substring(i-3, i+1));
//     console.log(`Start signal found at index ${i+1}`);
//     break;
//   }
// }

// part 2
// 
let streamArray = dataStream.split(/\n/);
for(let i=0; i = streamArray.length; i++) {
  
  if (streamArray[i] == "") return;
  let lineParts = streamArray[i].split(" ");


  if(lineParts[0]=="$" && lineParts[1] == "ls") {
    // 'ls':
      //push to the children array until the next $
  }
  else if (lineParts[0]=="$" && lineParts[1] == "cd") {
    if(lineParts[2] == "..") {
      // move the current pointer up one
    }
    else {
      // if $cd call the recursive function to get the size of the directory
    }
  } 
  else if(lineParts[0]=="dir") {   
      //push the object to the children array. populate name and thats it
  }
    
  

}

let directories = [];
for (let i = 13; i <= dataStream.indexOf('\n'); i++) {
  if( isUnique(dataStream.substring(i-13, i), dataStream[i]) === true ) {
    console.log(dataStream.substring(i-13, i+1));
    console.log(`Start signal found at index ${i+1}`);
    break;
  }
}


directories[] = {'name' : "root", 'children' : [{'name' : "root", 'children' : [], 'size' : 1}], 'size' : 1}
