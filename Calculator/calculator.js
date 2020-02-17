/* eslint no-unused-vars: ["warn",{ "varsIgnorePattern": "graphFunction"}] */

/**
 * Code for a vertex shader. Contains attribute position that takes the position of the vertex.
 */
const vertexShaderSource = `
    attribute vec4 position;

    void main() {
        gl_Position = position;
    }
`;

/**
 * Code for a fragment shader. Colors the fragment purple.
 */
const purpleFragmentShaderSource = `
    void main() {
        gl_FragColor = vec4(0.5, 0.0, 0.5, 1.0);
    }
`;

/**
 * Code for a fragment shader. Colors the fragment black. Intended specifically for shading axis fragments.
 */
const axisShader = `
    void main() {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
`;

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} type The type of shader (should be either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER)
 * @param {string} source The source code of the shader
 */
function makeShader(gl, type, source) {
    let shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));

        gl.deleteShader(shader);
        shader = null;
    }

    return shader;
}

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {string} vertexSource The source code for the vertex shader
 * @param {string} fragmentSource The source code for the fragment shader
 */
function makeProgram(gl, vertexSource, fragmentSource) {
    const vertexShader = makeShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = makeShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));

        gl.deleteProgram(program);
        program = null;
    }

    return program;
}

/**
 *
 */
function draw(tree) {
    const drawWindow = document.getElementById('screen');

    /** @type {WebGLRenderingContext} */
    const gl = drawWindow.getContext('webgl');

    drawWindow.width = drawWindow.clientWidth;
    drawWindow.height = drawWindow.clientHeight;
    gl.viewport(0, 0, drawWindow.width, drawWindow.height);

    gl.clearColor(1.0, 1.0, 1.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    const axisBuffer = createAxises(gl);
    const tickMarkBuffer = createTickMarks(gl, 20, 20);
    const polynomialBuffer = createPolynomial(gl, tree);

    drawLines(gl, axisBuffer, axisShader);
    drawLines(gl, tickMarkBuffer, axisShader);
    drawLineStrip(gl, polynomialBuffer, purpleFragmentShaderSource);
}

function makeStaticDrawArrayBuffer(gl, verticeArray, numVertices) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticeArray), gl.STATIC_DRAW);

    const data = {
        buffer: buffer,
        numVertices: numVertices
    };

    return data;
}

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 */
function createPolynomial(gl, tree) {
    console.log('Entering createPolynomial');
    const numVertices = 201;

    const verticeArray = [];

    for (let x = -100; x <= 100; x++) {
        const xi = x / 10;
        const yi = evaluateFunction(tree, xi);
        verticeArray.push(xi / 10, yi / 10, 0.0);
    }

    console.log('Exiting createPolynomial');
    return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices);
}

/**
 * Creates 3D vertices to define x and y axises centered on the screen and adds them to a buffer. The vertices
 * should be drawn with gl.LINES.
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 *
 * @returns {*} An object containing the vertice buffer (as 'buffer') and the number of vertices in the buffer (as
 *  'numVertices').
 */
function createAxises(gl) {
    const numVertices = 4;
    const verticeArray = [
        -1, 0, 0,
        1, 0, 0,
        0, 1, 0,
        0, -1, 0
    ];
    return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices);
}

function createTickMarks(gl, numX, numY) {
    const verticeArray = [];

    for (let i = 0; i < numX; i++) {
        verticeArray.push(2 / numX * i - 1, -0.02, 0, 2 / numX * i - 1, 0.02, 0);
    }

    for (let j = 0; j <= numY; j++) {
        verticeArray.push(-0.02, 2 / numY * j - 1, 0, 0.02, 2 / numY * j - 1, 0);
    }
    return makeStaticDrawArrayBuffer(gl, verticeArray, 2 * (numX + numY));
}

/**
 * Draws lines using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 * @param {string} fragmentShaderSource The source code of the fragment shader
 */
function drawLines(gl, data, fragmentShaderSource) {
    const program = makeProgram(gl, vertexShaderSource, fragmentShaderSource);

    gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);

    const position = gl.getAttribLocation(program, 'position');
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(position);

    gl.useProgram(program);

    gl.drawArrays(gl.LINES, 0, data.numVertices);
}

/**
 * Draws triangles using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 * @param {string} fragmentShaderSource The source code of the fragment shader
 */
function drawLineStrip(gl, data, fragmentShaderSource) {
    const program = makeProgram(gl, vertexShaderSource, fragmentShaderSource);

    gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);

    const position = gl.getAttribLocation(program, 'position');
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(position);

    gl.useProgram(program);

    gl.drawArrays(gl.LINE_STRIP, 0, data.numVertices);
}

/**
 * Called when the user clicks the graph function button. Processes and draws the function if it is valid.
 */
function graphFunction() {
    const tree = processFunction(document.getElementById('userString').value);
    if (tree !== null) {
        draw(tree);
    }
}

/**
 * Processes a string containing a function. Removes whitespace, handles implicit multiplication, checks
 * that the function is valid, and converts it into a function parse tree that is returned.
 *
 * @param {string} func The function to process.
 *
 * @returns {TreeNode} The parse tree representing the function that was created. Returns null if the
 *  function was invalid.
 */
function processFunction(func) {
    console.log('Entering processFunction');

    const whitespaceRemoved = removeWhitespace(func);

    const implicitMultiplicationString = handleImplicitMultiplication(whitespaceRemoved);

    const implicitAdditionString = handleImplicitAddition(implicitMultiplicationString);

    document.getElementById('result').innerHTML = implicitAdditionString;

    let tree = null;

    // if (validateProperFunction(implicitAdditionString)) {
    //    console.error('Invalid function!');
    // }
    // else {
    tree = createParseTree(implicitAdditionString);

    console.log(evaluateFunction(tree, 1));
    // }

    console.log('Exiting processFunction');

    return tree;

    // convert to lowercase? Depends on if we replace things like cos() with some temporary var
}

/**
 * Removes all whitespace from a string.
 *
 * @param {string} input The string to remove whitespace from.
 *
 * @returns {string} The string with all whitespace removed.
 */
function removeWhitespace(input) {
    return input.replace(/\s+/g, '');
}

/**
 * Adds multiplication symbols to a string containing a function wherever implicit multiplication occurs.
 *
 * @param {string} func A function (with no whitespace) to add multiplication symbols to.
 *
 * @returns {string} The function with multiplication symbols added wherever implicit multiplication occured.
 */
function handleImplicitMultiplication(func) {
    return func.replace(/(\)|x|\d(?=\D))(?=\(|x|\d|c|s|t)/g, '$1*');
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
function handleImplicitAddition(func) {
    return func.replace(/([^\-(*/+^])-/g, '$1+-');
}

/**
 * Validates that a function is valid.
 *
 * @param {string} func String containing the function to validate. It should have no whitespace or implicit
 *  multiplication.
 *
 * @returns {boolean} True if the function is valid and false if it is not.
 */
function validateProperFunction(func) {
    const terminalList = ['+', '-', '*', '/', 'x', '(', ')', '$'];

    const map = {
        S: { '+': '!', '-': '!', '*': '!', '/': '!', x: 'AT', '(': 'AT', ')': '!', $: '!' },
        A: { '+': 'AT+', '-': 'AT-', '*': '!', '/': '!', x: '!', '(': '!', ')': '', $: '' }, // S'
        T: { '+': '!', '-': '!', '*': '!', '/': '!', x: 'BR', '(': 'BR', ')': '!', $: '!' },
        B: { '+': '', '-': '', '*': 'BR*', '/': 'BR/', x: '!', '(': '!', ')': '', $: '' }, //   T'
        R: { '+': '!', '-': '!', '*': '!', '/': '!', x: 'x', '(': ')S(', ')': '!', $: '!' }
    };

    console.log('Entering validateProperFunction with function: ' + func);
    // This may need additional work. It fails for .32 or something similar (must do 0.32).
    // Also neeed to consider negative numbers more.
    const numberRemover = /\d+(\.\d+)?/g;
    let input = func.replace(numberRemover, 'x');

    // Check for any number of negatives directly preceded by a *, /, + and remove them.
    // Aso need to check for situations such as -5+3 or x*(-4+3) Anything NOT preceded by an x?
    const negativeRemover = /(^|[^x])-+/g;
    input = input.replace(negativeRemover, '$1');

    const trigonometryRemover = /a?(cos|sin|tan)\(/g;
    input = input.replace(trigonometryRemover, '(');

    console.log(input);

    const invalidCharacters = /[^+\-*/x()^]/g;
    if (input.length === 0 || input.search(invalidCharacters) !== -1) {
        return false;
    }

    input += '$';

    const charStack = ['S'];
    let point = 0;
    let failed = false;
    // map["S"]["+"];

    while (point < input.length && !failed) {
    //  if (charStack.empty())
    //  {
    //      cout << "String not accepted\n"; //print string contents?
    //      break;
    //  }
        let currentElem = charStack.pop();

        while (!terminalList.includes(currentElem)) {
            if (map[currentElem][input[point]] === '!') {
                failed = true;
                break;
                // print error?
            }

            [...map[currentElem][input[point]]].forEach(c => charStack.push(c));

            if (!charStack.length) { // if the array is empty
                if (input[point] !== '$') {
                    failed = true;
                    // print error?
                }
                break;
            }

            currentElem = charStack.pop();
        }

        point++;
    }

    if (charStack.length || failed) {
        console.log('Char stack: ' + charStack);
        console.log('Remainng string characters: ' + input.substr(point));
    }
    console.log('Exiting validateProperFunction');

    return !charStack.length && !failed;
}

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
    TRIGONOMETRY: 8
});

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
    constructor(token) {
        this.value = token;
        this.next = null;
        this.previous = null;
        this.tokenType = TokenType.VALUE;

        if (token === '(') {
            this.tokenType = TokenType.OPEN_PARANTHESES;
        }
        else if (token === ')') {
            this.tokenType = TokenType.CLOSE_PARANTHESES;
        }
        else if (token === '+') {
            this.tokenType = TokenType.ADDITION;
        }
        else if (token === '-') {
            this.tokenType = TokenType.NEGATION;
        }
        else if (token === '*' || token === '/') {
            this.tokenType = TokenType.MULTIPLICATION;
        }
        else if (token === '^') {
            this.tokenType = TokenType.POWER;
        }
        else if (token === 'cos(' || token === 'sin(' || token === 'tan(' || token === 'acos(' || token === 'asin(' ||
                    token === 'atan(') {
            this.tokenType = TokenType.TRIGONOMETRY;
            this.value = token.substr(0, 2);
        }
    }
}

/**
 * Class representing a token list, containing properties holding the head and the tail and a function to
 * add a new token. Each token in the list must have previous and next properties.
 */
class TokenList {
    /**
     * Inititializes the head and tail properties to null.
     */
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * Adds a token to the end of the TokenList.
     *
     * @param {*} token A token to add to the end of the list. Must contain properties next and previous.
     */
    add(token) {
        if (this.head == null) {
            this.head = token;
        }
        else {
            this.tail.next = token;
            token.previous = this.tail;
        }
        this.tail = token;
    }
}

/**
 * Turns the input string into a TokenList of Tokens.
 *
 * @param {string} input The string to tokenize. Should only contain +, -, /, *, (, ), x, and numbers.
 *
 * @return {TokenList} Returns a list of Tokens.
 */
function tokenize(input) {
    console.log('Entering tokenize with input: ' + input);
    // This may need additional work. It fails for .32 or something similar (must do 0.32).
    const tokenRetriever = /(\d+(\.\d+)?|a?(sin|cos|tan)\(|[+\-*/x()^])/;
    const tokenList = new TokenList();

    while (input.length) {
        let token = '';
        input = input.replace(tokenRetriever, (matchedString, savedToken) => { token = savedToken; return ''; });
        tokenList.add(new Token(token));
    }

    console.log('Exiting tokenize');
    return tokenList;
}

/**
 * Class representing a node of a binary tree with a token. Contains value, leftChild, rightChild,
 * and parent properties, as well as createLeftChild and createRightChild functions. Left child,
 * right child, and parent properties are automatically set and should usually only be gotten.
 */
class TreeNode {
    /**
     * Initializes the value, leftChild, rightChild, and parent variables to null.
     */
    constructor() {
        this.value = null;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }

    /**
     * Creates a new tree node and assigns it to the left child of this tree node.
     * Sets the new tree node's parent to this tree node.
     */
    createLeftChild() {
        this.leftChild = new TreeNode();
        this.leftChild.parent = this;
    }

    /**
     * Creates a new tree node and assigns it to the right child of this tree node.
     * Sets the new tree node's parent to this tree node.
     */
    createRightChild() {
        this.rightChild = new TreeNode();
        this.rightChild.parent = this;
    }
}

/**
 * Enum to hold an expression type. Used for turning a function string into a tree.
 * Can be EXP (Expression), MEXP (Multiplication Expression), or PEXP (Parantheses Expression).
 */
const ExpressionType = Object.freeze({ EXP: 1, MEXP: 2, NEXP: 3, EEXP: 4, PEXP: 5 });

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
function findSplitToken(expressionType, startToken, endToken) {
    let currentToken = endToken;

    let tokenType = TokenType.ADDITION;

    if (expressionType === ExpressionType.MEXP) {
        tokenType = TokenType.MULTIPLICATION;
    }

    let closeParantheses = 0;

    while (currentToken !== startToken && currentToken !== startToken.previous) {
        if (currentToken.tokenType === tokenType && closeParantheses === 0) {
            return currentToken;
        }
        if (currentToken.tokenType === TokenType.OPEN_PARANTHESES ||
            currentToken.tokenType === TokenType.TRIGONOMETRY) {
            closeParantheses--;
        }
        else if (currentToken.tokenType === TokenType.CLOSE_PARANTHESES) {
            closeParantheses++;
        }

        currentToken = currentToken.previous;
    }

    return null;
}

function findEEXPSplitToken(startToken, endToken) {
    let currentToken = startToken;

    let closeParantheses = 0;

    while (currentToken !== endToken && currentToken !== endToken.next) {
        if (currentToken.tokenType === TokenType.POWER && closeParantheses === 0) {
            return currentToken;
        }
        if (currentToken.tokenType === TokenType.OPEN_PARANTHESES ||
            currentToken.tokenType === TokenType.TRIGONOMETRY) {
            closeParantheses--;
        }
        else if (currentToken.tokenType === TokenType.CLOSE_PARANTHESES) {
            closeParantheses++;
        }

        currentToken = currentToken.next;
    }

    return null;
}

/**
 * Creates a parse tree for a tokenized function. It should be read from the bottom-left to the top-right.
 *
 * @param {TreeNode} root The root of the tree to add the nodes to.
 * @param {ExpressionType} expressionType The type of expression. Usually ExpressionType.EXP.
 * @param {Token} start The first token in the token list to parse. Should probably be TokenList.head.
 * @param {Token} end The final token in the token list to parse. Should probably be TokenList.tail.
 */
function createParseTreeNodes(root, expressionType, startToken, endToken) {
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
            const aToken = findSplitToken(expressionType, startToken, endToken);
            // If no such token was found, switch to a MEXP expression and loop again (this helps to keep
            // unneccessary nodes from building up which would happen with a recursive call in this situation).
            if (aToken == null) {
                expressionType = ExpressionType.MEXP;
            }
            else {
                // Recursively repeat this process for the left and right children and set the token to the split token.
                root.createLeftChild();
                root.createRightChild();
                createParseTreeNodes(root.leftChild, ExpressionType.EXP, startToken, aToken.previous);
                createParseTreeNodes(root.rightChild, ExpressionType.MEXP, aToken.next, endToken);
                root.value = aToken.value;
                return;
            }
        }
        else if (expressionType === ExpressionType.MEXP) {
            // Search for a * or / token with balanced parantheses
            const mToken = findSplitToken(expressionType, startToken, endToken);
            // If no such token was found, switch to a PEXP expression and loop again (this helps to keep
            // unneccessary nodes from building up which would happen with a recursive call in this situation).
            if (mToken == null) {
                expressionType = ExpressionType.NEXP;
            }
            else {
                // Recursively repeat this process for the left and right children and set the token to the split token.
                root.createLeftChild();
                root.createRightChild();
                createParseTreeNodes(root.leftChild, ExpressionType.MEXP, startToken, mToken.previous);
                createParseTreeNodes(root.rightChild, ExpressionType.NEXP, mToken.next, endToken);
                root.value = mToken.value;
                return;
            }
        }
        else if (expressionType === ExpressionType.NEXP) {
            if (startToken.tokenType === TokenType.NEGATION) {
                root.value = startToken.value;
                root.createRightChild();
                createParseTreeNodes(root.rightChild, ExpressionType.NEXP, startToken.next, endToken);
                return;
            }
            else {
                expressionType = ExpressionType.EEXP;
            }
        }
        else if (expressionType === ExpressionType.EEXP) {
            const eToken = findEEXPSplitToken(startToken, endToken);
            if (eToken == null) {
                expressionType = ExpressionType.PEXP;
            }
            else {
                root.createLeftChild();
                root.createRightChild();
                createParseTreeNodes(root.leftChild, ExpressionType.PEXP, startToken, eToken.previous);
                createParseTreeNodes(root.rightChild, ExpressionType.NEXP, eToken.next, endToken);
                root.value = eToken.value;
                return;
            }
        }
        else {
            // If the first token is a (, then the last token must be a ). They can both be removed and the expression
            // type changed to EXP. Again, no recursive call is done to eliminate unneccessary nodes.
            if (startToken.tokenType === TokenType.OPEN_PARANTHESES) {
                expressionType = ExpressionType.EXP;
                startToken = startToken.next;
                endToken = endToken.previous;
            }
            else if (startToken.tokenType === TokenType.TRIGONOMETRY) {
                root.createRightChild();
                createParseTreeNodes(root.rightChild, ExpressionType.EXP, startToken.next, endToken.previous);
                root.value = startToken.value;
                return;
            }
            // Otherwise, we should have a single token and this token is set to it.
            else {
                root.value = startToken.value;
                return;
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
function createParseTree(input) {
    console.log('Entering createParseTree with input: ' + input);
    const tokenList = tokenize(input);
    const tree = new TreeNode();

    createParseTreeNodes(tree, ExpressionType.EXP, tokenList.head, tokenList.tail);
    console.log(printParseTree(tree));
    console.log('Exiting createParseTree');
    return tree;
}

/**
 * Returns a string representation of the parse tree. Intended for testing that the parse tree was created
 * correctly. Searches from the left to the right and prints each token value it finds.
 *
 * @param {TreeNode} tree The root node of the tree to print.
 *
 * @return {string} Representation of the parse tree.
 */
function printParseTree(tree) {
    if (tree == null) {
        return '';
    }

    return printParseTree(tree.leftChild) + tree.value + printParseTree(tree.rightChild);
}

/**
 * Evaluates the value of a function in tree form at the point x. Handles +, -, *, /, (, ), x, and numbers.
 *
 * @param {TreeNode} tree The root node of the function parse tree to evaluate.
 * @param {Number} x The value of the variable x in the function.
 * @return {Number} f(x) (the answer to the function at x).
 */
function evaluateFunction(tree, x) {
    // Should make this into a switch
    if (tree.value === '*') {
        return Number(evaluateFunction(tree.leftChild, x)) * Number(evaluateFunction(tree.rightChild, x));
    }
    else if (tree.value === '/') {
        const numerator = Number(evaluateFunction(tree.leftChild, x));
        const denominator = Number(evaluateFunction(tree.rightChild, x));
        if (denominator === 0) {
            if (numerator === 0) {
                return undefined;
            }
            return Infinity * numerator;
        }
        return numerator / denominator;
    }
    else if (tree.value === '+') {
        return Number(evaluateFunction(tree.leftChild, x)) + Number(evaluateFunction(tree.rightChild, x));
    }
    else if (tree.value === '-') {
        return -1 * Number(evaluateFunction(tree.rightChild, x)); // Number(evaluateFunction(tree.leftChild, x))
    }
    else if (tree.value === '^') {
        return Math.pow(Number(evaluateFunction(tree.leftChild, x)), Number(evaluateFunction(tree.rightChild, x)));
    }
    else if (tree.value === 'co') {
        return Math.cos(Number(evaluateFunction(tree.rightChild, x)));
    }
    else if (tree.value === 'si') {
        return Math.sin(Number(evaluateFunction(tree.rightChild, x)));
    }
    else if (tree.value === 'ta') {
        return Math.tan(Number(evaluateFunction(tree.rightChild, x)));
    }
    else if (tree.value === 'ac') {
        return Math.acos(Number(evaluateFunction(tree.rightChild, x)));
    }
    else if (tree.value === 'as') {
        return Math.asin(Number(evaluateFunction(tree.rightChild, x)));
    }
    else if (tree.value === 'at') {
        return Math.atan(Number(evaluateFunction(tree.rightChild, x)));
    }
    else {
        if (tree.value === 'x') {
            return x;
        }
        return tree.value;
    }
}

// NEXT STEPS:
// Redo documentation for negative numbers and powers
// Implement powers into validateProperFunction
// Write documentation for validateProperFunction
// Implement more trigonometry
// Implement .number
// Enhance graphing when far enough in class
// Implement constants (e, pi)
// Implement logs?
