/**
 * Runs the other functions in implicit.js on a string. Removes whitespace and then adds addition/multiplication symbols
 * wherever implicit addition/multiplication occurs.
 *
 * @param {string} input The string to process
 *
 * @returns {string} The processed string
 */
function runImplicitFunctions (input) {
  return handleImplicitAddition(handleImplicitMultiplication(removeWhitespace(input)))
}

/**
 * Removes all whitespace from a string.
 *
 * @param {string} input The string to remove whitespace from.
 *
 * @returns {string} The string with all whitespace removed.
 */
function removeWhitespace (input) {
  return input.replace(/\s+/g, '')
}

/**
 * Adds multiplication symbols to a string containing a function wherever implicit multiplication occurs.
 *
 * @param {string} func A function (with no whitespace) to add multiplication symbols to.
 *
 * @returns {string} The function with multiplication symbols added wherever implicit multiplication occured.
 */
function handleImplicitMultiplication (func) {
  return func.replace(/(\)|x|pi|e|\d(?=\D))(?=\(|x|\d|c|s|t|a|p|e|l)/g, '$1*')
}

/**
 * Adds addition symbols to a string containing a function wherever "implicit addition" occurs. "Implicit addition" is
 * defined as subtraction of an expression, where what is happening is addition of a negative expression.
 * Ex: 10-3 will be rewritten as 10+-3 and (x+10)-(x+3) will be rewritten as (x+10)+-(x+3).
 *
 * @param {string} func A function (with no whitespace) to add addition symbols to.
 *
 * @returns {string} The function with addition symbols added wherever implicit addition occured.
 */
function handleImplicitAddition (func) {
  return func.replace(/([^\-(*/+^])-/g, '$1+-')
}

export default runImplicitFunctions
