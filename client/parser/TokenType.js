/**
 * Enum to hold mathematical token types. Can be OPEN_PARNTHESES, CLOSE_PARANTHESES, VALUE, ADDITION, or MULTIPLICATION.
 */
const TokenType = Object.freeze({
  OPEN_PARANTHESES: 1,
  CLOSE_PARANTHESES: 2,
  VALUE: 3,
  ADDITION: 4,
  MULTIPLICATION: 5,
  NEGATION: 6,
  POWER: 7,
  E_OPEN_PARANTHESES: 8
})

export default TokenType
