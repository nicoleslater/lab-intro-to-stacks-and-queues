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

  const currentItem = this.top;
  this.top = this.top.next;
  this.size--;

  return currentItem.data;

}

push(data){
    const newNode = newNode(data);
    newNode.next = this.top;
    this.top = newNode;

    this.size++
  }
}

class Queue{

}

module.exports = {
  Node,
  Queue,
  Stack,
};
