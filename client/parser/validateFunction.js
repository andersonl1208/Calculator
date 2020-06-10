const terminalList = ['+', '-', '*', '/', 'x', '(', ')', '$']

const map = {
  S: { '+': '!', '-': '!', '*': '!', '/': '!', x: 'AT', '(': 'AT', ')': '!', $: '!' },
  A: { '+': 'AT+', '-': 'AT-', '*': '!', '/': '!', x: '!', '(': '!', ')': '', $: '' }, // S'
  T: { '+': '!', '-': '!', '*': '!', '/': '!', x: 'BR', '(': 'BR', ')': '!', $: '!' },
  B: { '+': '', '-': '', '*': 'BR*', '/': 'BR/', x: '!', '(': '!', ')': '', $: '' }, //   T'
  R: { '+': '!', '-': '!', '*': '!', '/': '!', x: 'x', '(': ')S(', ')': '!', $: '!' }
}

/**
 * Validates that a function is valid.
 *
 * @param {string} func String containing the function to validate. It should have no whitespace or implicit
 *  multiplication.
 *
 * @returns {boolean} True if the function is valid and false if it is not.
 */
function validateProperFunction (func) {
  console.log('Entering validateProperFunction with function: ' + func)

  func = regexConvert(func)

  const invalidCharacters = /[^+\-*/x()^]/g
  if (func.length === 0 || func.search(invalidCharacters) !== -1) {
    return false
  }

  return isValidFunction(func)
}

function regexConvert (func) {
  // This may need additional work. It fails for .32 or something similar (must do 0.32).
  // Also neeed to consider negative numbers more.
  const numberRemover = /\d+(\.\d+)?|e|pi/g
  func = func.replace(numberRemover, 'x')

  // Check for any number of negatives directly preceded by a *, /, + and remove them.
  // Aso need to check for situations such as -5+3 or x*(-4+3) Anything NOT preceded by an x?
  const negativeRemover = /(^|[^x])-+/g
  func.replace(negativeRemover, '$1')

  const enhancedParanthesesRemover = /((a?(cos|sin|tan))|ln|log)\(/g
  func.replace(enhancedParanthesesRemover, '(')

  console.log(func)

  return func
}

function isValidFunction (func) {
  func += '$'

  const charStack = ['S']
  let point = 0
  let failed = false
  // map["S"]["+"];

  while (point < func.length && !failed) {
    //  if (charStack.empty())
    //  {
    //      cout << "String not accepted\n"; //print string contents?
    //      break;
    //  }
    let currentElem = charStack.pop()

    while (!terminalList.includes(currentElem)) {
      if (map[currentElem][func[point]] === '!') {
        failed = true
        break
        // print error?
      }

      [...map[currentElem][func[point]]].forEach(c => charStack.push(c))

      if (!charStack.length) { // if the array is empty
        if (func[point] !== '$') {
          failed = true
          // print error?
        }
        break
      }

      currentElem = charStack.pop()
    }

    point++
  }

  if (charStack.length || failed) {
    console.log('Char stack: ' + charStack)
    console.log('Remainng string characters: ' + func.substr(point))
  }
  console.log('Exiting validateProperFunction')

  return !charStack.length && !failed
}

export default validateProperFunction
