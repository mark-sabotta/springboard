/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const new_node = new Node(val);
    this.size += 1;
    if (this.last != null) this.last.next = new_node;
    this.last = new_node;
    if (this.size === 1) this.first = new_node;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size < 1) throw Error("error: empty queue");
    let pointer_node = this.first;

    const val = pointer_node.val;
    this.size -= 1;
    if (this.size === 0) {
      this.first = null;
      this.last = null;
      return val;
    }
    pointer_node = pointer_node.next;
    this.first = pointer_node;
    if (this.size === 1) this.last = pointer_node;
    return val;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size < 1) throw Error("error: empty queue");
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !Boolean(this.size);
  }
}

module.exports = Queue;
