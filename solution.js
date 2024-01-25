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


push(data){
    const newNode = newNode(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  size(){
   let count = 0;
   let current = this.top;
   while(current !== null){
    count++;
    current = current.next;
  }
  return count;
  }
  
  pop(){
    if(this.top !== null){
      const removedNode = this.top;
      this.top = this.top.next;
      return removedNode.data;
    }
    return null;
  }

  isEmpty(){
      return this.top === null;
  }

findMin(){
  let current = this.top;
  let min = Number.MAX_SAFE_INTEGER;

  while(current !== null){
    if(current.data < min){
      min = current.data;
    }
    if(current.data > min)
    current = current.next;
  }
  return current++;
}

peek(){

return this.top;

}

sort(){

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
