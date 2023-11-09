/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root){
      return 0;
    }
    let totalSum = 0;
    let nodesToVisit = [this.root];
    while(nodesToVisit.length){
      let node = nodesToVisit.pop();
      totalSum += node.val;
      if(node.children.length){
        for(let i = 0; i < node.children.length; i++){
          nodesToVisit.unshift(node.children[i]);
        }
      }
    }
    return totalSum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root){
      return 0;
    }
    let totalEvens = 0;
    let nodesToVisit = [this.root];
    while(nodesToVisit.length > 0){
      const node = nodesToVisit.pop();
      if(node.val%2 === 0){
        totalEvens+=1;
      }
      if(node.children.length){
        for(let i = 0; i < node.children.length; i++){
          nodesToVisit.unshift(node.children[i]);
        }
      }
    }
    return totalEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root){
      return 0;
    }
    let totalGreater = 0;
    let nodesToVisit = [this.root];
    while(nodesToVisit.length > 0){
      const node = nodesToVisit.pop();
      if(node.val > lowerBound){
        totalGreater+=1;
      }
      if(node.children.length){
        for(let i = 0; i < node.children.length; i++){
          nodesToVisit.unshift(node.children[i]);
        }
      }
    }
    return totalGreater;
  }
}

module.exports = { Tree, TreeNode };
