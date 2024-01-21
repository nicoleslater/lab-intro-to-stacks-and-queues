const { nums, words } = require("./data/data.js");
const { inspect } = require("util");

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor(){
    this.top = null;
  }

count(){
  return this.size;
}

dequeue(){
  if(this.top === null){
    return "Empty Queue!";
  }

  
}

push(data){
    const newNode = newNode(data);
    newNode.next = this.top;
    this.top = newNode;

    this.size++
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
