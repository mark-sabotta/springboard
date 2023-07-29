/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newTail = new Node(val);
    if(!this.tail){
      this.head = newTail;
      this.tail = newTail;
    }else{
      this.tail.next = newTail;
      this.tail = newTail;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newHead = new Node(val);
    if(this.head){
      newHead.next = this.head;
      this.head = newHead;
    }else{
      this.head = newHead;
      this.tail = newHead;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head){
      return;
    }
    if(this.length==1){
      let temp = this.head.val;
      this.length = 0;
      this.head = null;
      this.tail = null;
      return temp;
    }
    let point = this.head;
    while(point.next && point.next != this.tail){
      point = point.next;
    }
    let popped = point.next.val;
    point.next = null;
    this.tail = point;
    this.length--;
    if(popped){
      return popped;
    }
    return
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      return;
    }
    let shifted = this.head.val;
    if(this.head != this.tail){
      this.head = this.head.next;
    }else{
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return shifted;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let point = this.head;
    for(let count = 0; count < idx; count++){
      point = point.next;
    }
    return point.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let point = this.head;
    for(let count = 0; count < idx; count++){
      point = point.next;
    }
    point.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(!this.head){
      let newNode= new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
      return;
    }
    if(idx > this.length){
      return;
    }
    if(idx == 0){
      this.unshift(val);
      return;
    }
    let point = this.head;
    for(let count = 0; count < idx-1; count++){
      point = point.next;
    }
    this.length++;
    let newNode = new Node(val);
    if(!point.next){
      this.tail = newNode;
    }else{
      newNode.next = point.next;
    }
    point.next = newNode;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(!this.head){
      this.length = 0;
      return;
    }
    let point = this.head;
    for(let count = 0; count < idx-1; count++){
      point = point.next;
    }
    if(point == this.tail){
        return this.pop();
    }else{
      this.length--;
      if(this.length == 0){
        this.head = null;
        this.tail = null;
      }
      let removed = point.next;
      point.next = point.next.next;
      return removed.val;
    }
  }


  /** average(): return an average of all values in the list */

  average() {
    if(!this.head){
      return 0;
    }
    let total = this.head.val;
    let number = 1;
    let point = this.head;
    while(point != this.tail){
      point=point.next;
      number++;
      total += point.val;
    }
    return total/number;
  }
}

module.exports = LinkedList;
