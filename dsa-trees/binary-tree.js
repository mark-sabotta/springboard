/** BinaryTreeNode: node for a general tree. */
function minLeafDepth(node, depth){
  if(node.left && node.right){
    return Math.min(minLeafDepth(node.left, depth+1),
      minLeafDepth(node.right, depth+1));
  }
  return depth;
}

function maxLeafDepth(node, depth){
  if(!node){
    return depth - 1;
  }
  let record = depth;
  if(node.left){
    record = Math.max(record, maxLeafDepth(node.left, depth + 1))
  }
  if(node.right){
    record = Math.max(record, maxLeafDepth(node.right, depth + 1))
  }
  return record;
}





class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root){
      return minLeafDepth(this.root, 1);
    }
    return 0;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    return maxLeafDepth(this.root, 1);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let record = null;
    if(!this.root){
      return record;
    }
    let nodesToVisit = [this.root];
    while(nodesToVisit.length){
      let node = nodesToVisit.pop();
      if(node.val > lowerBound){
        if(record){
          record = Math.min(record, node.val);
        }else{
          record = node.val;
        }
      if(node.left){
        nodesToVisit.unshift(node.left);
      }
      if(node.right){
        nodesToVisit.unshift(node.right);
      }
      }
    }
    return record;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
