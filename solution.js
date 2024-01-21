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
  if (this.first === null) {
    return "The Queue is Empty!";
  }

  let currentFirst = this.first;
  if (this.first === this.last) {
    this.first = null;
    this.last = null;
} else {
  this.first = currentFirst.next;
}

this.size--;

return currentFirst.data;
}

push(data){
    const newNode = newNode(data);
    newNode.next = this.top;
    this.top = newNode;

    this.size++
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
    this.maxValue = Number.MAX_SAFE_INTEGER;
  }
}

module.exports = {
  Node,
  Queue,
  Stack,
};
