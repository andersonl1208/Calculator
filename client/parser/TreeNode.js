/**
 * Class representing a node of a binary tree with a token. Contains value, leftChild, rightChild,
 * and parent properties, as well as createLeftChild and createRightChild functions. Left child,
 * right child, and parent properties are automatically set and should usually only be gotten.
 */
class TreeNode {
  /**
   * Initializes the value, leftChild, rightChild, and parent variables to null.
   */
  constructor () {
    this.value = null
    this.leftChild = null
    this.rightChild = null
    this.parent = null
  }

  /**
   * Creates a new tree node and assigns it to the left child of this tree node.
   * Sets the new tree node's parent to this tree node.
   */
  createLeftChild () {
    this.leftChild = new TreeNode()
    this.leftChild.parent = this
  }

  /**
   * Creates a new tree node and assigns it to the right child of this tree node.
   * Sets the new tree node's parent to this tree node.
   */
  createRightChild () {
    this.rightChild = new TreeNode()
    this.rightChild.parent = this
  }
}

export default TreeNode
