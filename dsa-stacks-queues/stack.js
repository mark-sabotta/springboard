/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const new_node = new Node(val);
    if (!this.last) {
      this.last = new_node;
    }
    new_node.next = this.first;
    this.first = new_node;
    this.size += 1;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size < 1) throw Error("Error: Stack is empty")
    const val = this.first.val;
    this.first = this.first.next;
    this.size -= 1;
    if (this.size == 0) this.last = null;
    return val;
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.size < 1) throw Error("Error: Stack is empty")
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !Boolean(this.size);
  }
}

module.exports = Stack;
