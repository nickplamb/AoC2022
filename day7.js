const fs = require('fs');
const util = require('util')

const dataStream = fs.readFileSync('day7.txt', 'utf-8');


class Node {
  
  constructor(
    id = null,
    dir = false,
    parent= null,
    size = 0,
  ) {
      this.id = id
      this.parent = parent;
      this.children = [];
      this.size = size;
      this.dir = dir;
    }
    
  } 

let totalSize = 0;

let streamArray = dataStream.split(/\n/);
const calculateDirectorySize = () => {
  
}

let head = null;
let curr_dir = null;
streamArray.forEach((line, index) => {
// for(let i=0; i = streamArray.length; i++) {
  
  if (line == "") return;
  let lineParts = line.split(" ");
  
  // if(!index) {
  //   directories = Object.assign({}, template);
  //   directories.dir = true;
  //   directories.name = lineParts[0];
  //   directories.size = 0;
  // }
  
  //skip list
  // console.log(line);
  if(lineParts[0] == "$" && lineParts[1] == "ls") return;

  if(lineParts[0] == "$" && lineParts[1] == "cd") {
    // console.log("I'm in $ cd")
    // create root
    if (lineParts[2] == '/'){
      // console.log('/');
      head = new Node(lineParts[2], true);
      curr_dir = head;
      return;
    } 
    // go to parent
    if (lineParts[2] == '..') {
      // console.log( '..');
      curr_dir = curr_dir.parent
      return;
    }
    // cd into directory
    // TODO if child.dir == true 
    //get all children, curr_node = first dir child.
    // console.log(curr_dir.children.filter((child) => child.dir == true )[0].id)
    curr_dir = curr_dir.children.filter((child) => child.id == lineParts[2])[0];
    return;
    // console.dir(curr_dir.id);
  }

  if(lineParts[0] == 'dir') {
    // console.log('I am a dir called '+ lineParts[1]);
    let new_dir = new Node(lineParts[1], true, curr_dir);
    curr_dir.children.push(new_dir);
    return;
  }
  
  let new_file = new Node(lineParts[1], false, curr_dir, lineParts[0]);
  curr_dir.children.push(new_file)
  return;

});

console.log(util.inspect(head, {showHidden: false, depth: null, colors: true}))