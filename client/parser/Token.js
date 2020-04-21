import TokenType from './TokenType.js'

/**
 * Class representing a token in a function. Supports (, ), +, -, *, /. Everything else defaults to values.
 * Contains properties next, previous, value, and tokenType. Previous and next are used to point to the next
 * and previous values in a list of tokens, while value contains the token data. The tokenType is a TokenType
 * variable that is set to the corresponding TokenType value depending on the token value. It is set to
 * TokenType.VALUE as a default.
 */
class Token {
  /**
   * Initializes next and previous to null, value to token, and tokenType to the correct TokenType value for
   * the token.
   *
   * @param {string} token The token to set the value property to and that is used to determine the tokenType.
   */
  constructor (token) {
    this.value = token
    this.next = null
    this.previous = null
    this.tokenType = TokenType.VALUE

    if (token === '(') {
      this.tokenType = TokenType.OPEN_PARANTHESES
    } else if (token === ')') {
      this.tokenType = TokenType.CLOSE_PARANTHESES
    } else if (token === '+') {
      this.tokenType = TokenType.ADDITION
    } else if (token === '-') {
      this.tokenType = TokenType.NEGATION
    } else if (token === '*' || token === '/') {
      this.tokenType = TokenType.MULTIPLICATION
    } else if (token === '^') {
      this.tokenType = TokenType.POWER
    } else if (token === 'cos(' || token === 'sin(' || token === 'tan(' || token === 'acos(' || token === 'asin(' ||
                token === 'atan(' || token === 'log(' || token === 'ln(') {
      this.tokenType = TokenType.E_OPEN_PARANTHESES
      this.value = token.substr(0, 2)
    }
  }
}

export default Token
