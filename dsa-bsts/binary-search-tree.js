class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let compNode = this.root;

    while (compNode.right && val > compNode.val || compNode.left && val < compNode.val) {
      while (compNode.right && val > compNode.val) {
        compNode = compNode.right;
      }
      while (compNode.left && val < compNode.val) {
        compNode = compNode.left;
      }
    }
    if (val > compNode.val) {
      compNode.right = newNode;
    } else {
      compNode.left = newNode;
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    function searchNode(node) {
      if (node.right && val > node.val) {
        searchNode(node.right);
      } else if (node.left && val < node.val) {
        searchNode(node.left);
      } else if (val < node.val) {
        node.left = newNode;
      } else {
        node.right = newNode;
      }
    }

    searchNode(this.root);
    return this;
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;
    let compNode = this.root;
    while (compNode.right && val > compNode.val || compNode.left && val < compNode.val) {
      while (compNode.right && val > compNode.val) {
        compNode = compNode.right;
      }
      while (compNode.left && val < compNode.val) {
        compNode = compNode.left;
      }
    }
    if (compNode.val === val) return compNode;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) return;

    function searchNode(node) {
      console.log(node.val);
      if (node.val === val) {
        return node;
      }
      if (node.left && val < node.val) {
        return searchNode(node.left);
      }

      if (node.right && val > node.val) {
        return searchNode(node.right);
      }
    }

    return searchNode(this.root);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const results = [];
    function dfs(node) {
      results.push(node.val);
      if (node.left) {
        dfs(node.left);
      }
      if (node.right) {
        dfs(node.right);
      }
    }
    if (this.root) dfs(this.root);
    return results;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const results = [];
    function dfs(node) {
      if (node.left) {
        dfs(node.left);
      }
      results.push(node.val);
      if (node.right) {
        dfs(node.right);
      }
    }
    if (this.root) dfs(this.root);
    return results;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const results = [];
    function dfs(node) {
      if (node.left) {
        dfs(node.left);
      }
      if (node.right) {
        dfs(node.right);
      }
      results.push(node.val);
    }
    if (this.root) dfs(this.root);
    return results;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const results = [];
    const nodesToVisit = [];
    let thisLayer = [];
    if (this.root) nodesToVisit.push(this.root);
    while (nodesToVisit.length > 0) {
      const poppedNode = nodesToVisit.pop();

      if (poppedNode.left) thisLayer.unshift(poppedNode.left);
      if (poppedNode.right) thisLayer.unshift(poppedNode.right);

      results.push(poppedNode.val);

      if (nodesToVisit.length === 0 && thisLayer.length > 0) {
        for (let key of thisLayer) {
          nodesToVisit.push(key);
        }

        thisLayer = [];
      }
    }
    return results;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
