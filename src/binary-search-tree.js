const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootValue = null;
  }

  root() {
    if (!this.rootValue) {
      return null;
    }
    return this.rootValue;
  }

  add(value) {
    const node = new Node(value);
    if (!this.rootValue) {
      this.rootValue = node;
      return;
    }

    let curNode = this.rootValue;
    console.log(value)
    while (curNode) {
      if (curNode.data === node.data) {
        return;
      }
      if (curNode.data > node.data) {
        if (!curNode.left) {
          curNode.left = node;
          return;
        }
        curNode = curNode.left;
      } else {
        if (!curNode.right) {
          curNode.right = node;
          return;
        }
        curNode = curNode.right;
      }
    }
  }

  has(value) {

    return searchNode(this.rootValue, value);

    function searchNode(node, data) {
      if (!node) return false;

      if (data === node.data) return true;

      if (data < node.data) {
        return searchNode(node.left, value);
      } else {
        return searchNode(node.right, value);
      }
    }
  }

  find(value) {
    return searchNode(this.rootValue, value);

    function searchNode(node, data) {
      if (!node) return null;

      if (data === node.data) return node;

      if (data < node.data) {
        return searchNode(node.left, value);
      } else {
        return searchNode(node.right, value);
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    return findMin(this.rootValue);

    function findMin(node) {
      if (!node.left) return node.data;

      if (node.left) return findMin(node.left);
    }
  }

  max() {
    return findMin(this.rootValue);

    function findMin(node) {
      if (!node.right) return node.data;

      if (node.right) return findMin(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};