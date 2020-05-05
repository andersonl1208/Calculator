import createParseTree from './parseTree.js'
import processImplicit from './implicit.js'
import validateFunction from './validateFunction.js'

/**
 * Processes a string containing a function. Removes whitespace, handles implicit multiplication, checks
 * that the function is valid, and converts it into a function parse tree that is returned.
 *
 * @param {string} func The function to process.
 *
 * @returns {TreeNode} The parse tree representing the function that was created. Returns null if the
 *  function was invalid.
 */
function processFunction (func) {
  console.log('Entering processFunction')
  try {
    const implicitAddedFunc = processImplicit(func)

    // document.getElementById('result').innerHTML = implicitAddedFunc

    let tree = null

    //   if (validateFunction(implicitAddedFunc)) {
    //     console.error('Invalid function!')
    //   } else {
    tree = createParseTree(implicitAddedFunc)

    console.log(evaluateFunction(tree, 1))
    //   }

    console.log('Exiting processFunction')
    return tree
  } catch (e) {
    console.log(`Process function failed for ${func}`)
    console.log(e)
    return null
  }
  // convert to lowercase? Depends on if we replace things like cos() with some temporary var
}

/**
 * Evaluates the value of a function in tree form at the point x. Handles +, -, *, /, (, ), x, and numbers.
 *
 * @param {TreeNode} tree The root node of the function parse tree to evaluate.
 * @param {Number} x The value of the variable x in the function.
 * @return {Number} f(x) (the answer to the function at x).
 */
function evaluateFunction (tree, x) {
  if (tree === null) {
    return null
  }
  // Should make this into a switch
  if (tree.value === '*') {
    return Number(evaluateFunction(tree.leftChild, x)) * Number(evaluateFunction(tree.rightChild, x))
  } else if (tree.value === '/') {
    const numerator = Number(evaluateFunction(tree.leftChild, x))
    const denominator = Number(evaluateFunction(tree.rightChild, x))
    if (denominator === 0) {
      if (numerator === 0) {
        return undefined
      }
      return Infinity * numerator
    }
    return numerator / denominator
  } else if (tree.value === '+') {
    return Number(evaluateFunction(tree.leftChild, x)) + Number(evaluateFunction(tree.rightChild, x))
  } else if (tree.value === '-') {
    return -1 * Number(evaluateFunction(tree.rightChild, x)) // Number(evaluateFunction(tree.leftChild, x))
  } else if (tree.value === '^') {
    return Math.pow(Number(evaluateFunction(tree.leftChild, x)), Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'co') {
    return Math.cos(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'si') {
    return Math.sin(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'ta') {
    return Math.tan(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'ac') {
    return Math.acos(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'as') {
    return Math.asin(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'at') {
    return Math.atan(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'ln') {
    return Math.log(Number(evaluateFunction(tree.rightChild, x)))
  } else if (tree.value === 'lo') {
    return Math.log10(Number(evaluateFunction(tree.rightChild, x)))
  } else {
    if (tree.value === 'x') {
      return x
    } else if (tree.value === 'e') {
      return Math.E
    } else if (tree.value === 'pi') {
      return Math.PI
    }

    return tree.value
  }
}

export {
  processFunction,
  evaluateFunction
}
// NEXT STEPS:
// Redo documentation for negative numbers and powers
// Implement powers into validateProperFunction
// Write documentation for validateProperFunction
// Implement more trigonometry
// Implement .number
// Enhance graphing when far enough in class
// Implement absolute value
// Implement floor and ceiling?
// Implement hyperbolics?
// Implement sqrt?
