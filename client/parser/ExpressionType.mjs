/**
 * Enum to hold an expression type. Used for turning a function string into a tree.
 * Can be EXP (Expression), MEXP (Multiplication Expression), or PEXP (Parantheses Expression).
 */
const ExpressionType = Object.freeze({
  EXP: 1,
  MEXP: 2,
  NEXP: 3,
  EEXP: 4,
  PEXP: 5
})

export default ExpressionType
