import { tokenize, findEEXPSplitToken, findSplitToken } from './tokenizer.mjs'
import ExpressionType from './ExpressionType.mjs'
import TokenType from './TokenType.js'
import TreeNode from './TreeNode.mjs'

/**
 * Creates a parse tree for a tokenized function. It should be read from the bottom-left to the top-right.
 *
 * @param {TreeNode} root The root of the tree to add the nodes to.
 * @param {ExpressionType} expressionType The type of expression. Usually ExpressionType.EXP.
 * @param {Token} start The first token in the token list to parse. Should probably be TokenList.head.
 * @param {Token} end The final token in the token list to parse. Should probably be TokenList.tail.
 */
function createParseTreeNodes (root, expressionType, startToken, endToken) {
  /*
    Algorithm information:

    This algorithm relies on the following Backus-Naur form (BNF) context free grammar:
    <EXP> ::= <EXP>+<MEXP> | <EXP>-<MEXP> | <MEXP>
    <MEXP> ::= <MEXP>*<PEXP> | <MEXP>/<PEXP> | <PEXP>
    <PEXP> ::= (<EXP>) | <NUMBER>
    <NUMBER> ::= any number or variable
    Note: EXP stands for expression, MEXP stands for multiplication expression, and <PEXP> stands
    for parantheses expression.

    It implements this by starting with an <EXP>, and searching the token list for the last occurence
    where the parantheses are balanced and a + or - character is found (If this does not occur, it
    switches to a <MEXP> expression and loops). Next, it sets the character of the current node to this
    character and recursively calls the function on the left and right portions of the token list using
    the left (EXP) and right (MEXP) children as the roots. Each <EXP> token repeats this process. A
    <MEXP> expresion searches the token list for the last occurence where the parantheses are balanced
    and a * or / character is found (If this does not occur, it switches to a <PEXP> expression and
    loops). Next, it sets the value of the current node to this "split" token and recursively calls the
    function on the left and right portions of the token list using the left (MEXP) and right (PEXP),
    children as the roots. For a <PEXP> expression, it checks whether it is enclosed by parantheses. If
    it is, it removes those parantheses from the token listand loops back to an <EXP> expression.
    Otherwise, there can only be one token left in the list and it sets the valueof te current node to
    this token.

    This works because for an <EXP> expression, the right side is only a <MEXP> expression if it contains
    NO + or - token with balanced parantheses, but we must search until we find one to meet the
    requirement (unless no token does, in which case we just switch to a <MEXP> expression, basically
    doing the equivalent of ignoring the left side). The same idea holds for a <MEXP> expression. For
    a <PEXP> expression, we know that there are no +, -, *, or / symbols outside parantheses by the
    previous two parts. Thus, either we have a single character or some expression surrounded by
    parantheses.
  */

  // Iterate while we have not set the root value.
  while (root.value == null) {
    if (expressionType === ExpressionType.EXP) {
      // Search for a + or - token with balanced parantheses.
      const aToken = findSplitToken(expressionType, startToken, endToken)
      // If no such token was found, switch to a MEXP expression and loop again (this helps to keep
      // unneccessary nodes from building up which would happen with a recursive call in this situation).
      if (aToken == null) {
        expressionType = ExpressionType.MEXP
      } else {
        // Recursively repeat this process for the left and right children and set the token to the split token.
        root.createLeftChild()
        root.createRightChild()
        createParseTreeNodes(root.leftChild, ExpressionType.EXP, startToken, aToken.previous)
        createParseTreeNodes(root.rightChild, ExpressionType.MEXP, aToken.next, endToken)
        root.value = aToken.value
        return
      }
    } else if (expressionType === ExpressionType.MEXP) {
      // Search for a * or / token with balanced parantheses
      const mToken = findSplitToken(expressionType, startToken, endToken)
      // If no such token was found, switch to a PEXP expression and loop again (this helps to keep
      // unneccessary nodes from building up which would happen with a recursive call in this situation).
      if (mToken == null) {
        expressionType = ExpressionType.NEXP
      } else {
        // Recursively repeat this process for the left and right children and set the token to the split token.
        root.createLeftChild()
        root.createRightChild()
        createParseTreeNodes(root.leftChild, ExpressionType.MEXP, startToken, mToken.previous)
        createParseTreeNodes(root.rightChild, ExpressionType.NEXP, mToken.next, endToken)
        root.value = mToken.value
        return
      }
    } else if (expressionType === ExpressionType.NEXP) {
      if (startToken.tokenType === TokenType.NEGATION) {
        root.value = startToken.value
        root.createRightChild()
        createParseTreeNodes(root.rightChild, ExpressionType.NEXP, startToken.next, endToken)
        return
      } else {
        expressionType = ExpressionType.EEXP
      }
    } else if (expressionType === ExpressionType.EEXP) {
      const eToken = findEEXPSplitToken(startToken, endToken)
      if (eToken == null) {
        expressionType = ExpressionType.PEXP
      } else {
        root.createLeftChild()
        root.createRightChild()
        createParseTreeNodes(root.leftChild, ExpressionType.PEXP, startToken, eToken.previous)
        createParseTreeNodes(root.rightChild, ExpressionType.NEXP, eToken.next, endToken)
        root.value = eToken.value
        return
      }
    } else {
      // If the first token is a (, then the last token must be a ). They can both be removed and the expression
      // type changed to EXP. Again, no recursive call is done to eliminate unneccessary nodes.
      if (startToken.tokenType === TokenType.OPEN_PARANTHESES) {
        expressionType = ExpressionType.EXP
        startToken = startToken.next
        endToken = endToken.previous
      } else if (startToken.tokenType === TokenType.E_OPEN_PARANTHESES) {
        root.createRightChild()
        createParseTreeNodes(root.rightChild, ExpressionType.EXP, startToken.next, endToken.previous)
        root.value = startToken.value
        return
      } else { // Otherwise, we should have a single token and this token is set to it.
        root.value = startToken.value
        return
      }
    }
  }
}

/**
 * Tokenizes the input and creates a function parse tree from it.
 *
 * @param {string} input A function that has been validated to turn into a parse tree.
 * @return {TreeNode} The function parse tree that was created.
 */
function createParseTree (input) {
  console.log('Entering createParseTree with input: ' + input)
  const tokenList = tokenize(input)
  const tree = new TreeNode()

  createParseTreeNodes(tree, ExpressionType.EXP, tokenList.head, tokenList.tail)
  console.log(printParseTree(tree))
  console.log('Exiting createParseTree')
  return tree
}

/**
 * Returns a string representation of the parse tree. Intended for testing that the parse tree was created
 * correctly. Searches from the left to the right and prints each token value it finds.
 *
 * @param {TreeNode} tree The root node of the tree to print.
 *
 * @return {string} Representation of the parse tree.
 */
function printParseTree (tree) {
  if (tree == null) {
    return ''
  }

  return printParseTree(tree.leftChild) + tree.value + printParseTree(tree.rightChild)
}

export default createParseTree
