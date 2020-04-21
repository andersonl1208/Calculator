import TokenList from './TokenList.js'
import Token from './Token.js'
import ExpressionType from './ExpressionType.js'
import TokenType from './TokenType.js'

/**
 * Turns the input string into a TokenList of Tokens.
 *
 * @param {string} input The string to tokenize. Should only contain +, -, /, *, (, ), x, and numbers.
 *
 * @return {TokenList} Returns a list of Tokens.
 */
function tokenize (input) {
  console.log('Entering tokenize with input: ' + input)
  // This may need additional work. It fails for .32 or something similar (must do 0.32).
  const tokenRetriever = /(\d+(\.\d+)?|e|pi|a?(sin|cos|tan)\(|(ln|log)\(|[+\-*/x()^])/
  const tokenList = new TokenList()

  while (input.length) {
    let token = ''
    input = input.replace(tokenRetriever, (matchedString, savedToken) => { token = savedToken; return '' })
    tokenList.add(new Token(token))
    if (token === '') {
      console.error('Invalid character found when tokenizing')
      break
    }
  }

  console.log('Exiting tokenize')
  return tokenList
}

/**
 * Finds the token that the function parse tree should be split at. Searches from the endToken to the startToken
 * looking for the first token with TokenType.ADDITION (if ExpressionType.EXP) or TokenType.MULTIPLICATION (if
 * ExpressionType.MEXP) where the parantheses are balanced. Returns null if no token meets the requirement.
 * NOTE: startToken and endToken don't have to be the first and last tokens in the token list.
 *
 * @param {ExpressionType} expressionType The type of expression. Should be either ExpressionType.MEXP or
 *  ExpressionType.EXP.
 * @param {Token} startToken The first token in the token list to search.
 * @param {Token} endToken The final token in the token list to search.
 *
 * @return {Token} The token to split at. Returns null if there was no split token found.
 */
function findSplitToken (expressionType, startToken, endToken) {
  let currentToken = endToken

  let tokenType = TokenType.ADDITION

  if (expressionType === ExpressionType.MEXP) {
    tokenType = TokenType.MULTIPLICATION
  }

  let closeParantheses = 0

  while (currentToken !== startToken && currentToken !== startToken.previous) {
    if (currentToken.tokenType === tokenType && closeParantheses === 0) {
      return currentToken
    }
    if (currentToken.tokenType === TokenType.OPEN_PARANTHESES ||
            currentToken.tokenType === TokenType.E_OPEN_PARANTHESES) {
      closeParantheses--
    } else if (currentToken.tokenType === TokenType.CLOSE_PARANTHESES) {
      closeParantheses++
    }

    currentToken = currentToken.previous
  }

  return null
}

function findEEXPSplitToken (startToken, endToken) {
  let currentToken = startToken

  let closeParantheses = 0

  while (currentToken !== endToken && currentToken !== endToken.next) {
    if (currentToken.tokenType === TokenType.POWER && closeParantheses === 0) {
      return currentToken
    }
    if (currentToken.tokenType === TokenType.OPEN_PARANTHESES ||
            currentToken.tokenType === TokenType.E_OPEN_PARANTHESES) {
      closeParantheses--
    } else if (currentToken.tokenType === TokenType.CLOSE_PARANTHESES) {
      closeParantheses++
    }

    currentToken = currentToken.next
  }

  return null
}

export {
  tokenize,
  findEEXPSplitToken,
  findSplitToken
}
