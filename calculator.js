/* eslint no-unused-vars: ["warn",{ "varsIgnorePattern": "draw"}]*/

let vertexShaderSource = `
    attribute vec4 position;

    void main() {
        gl_Position = position;
    }
`;

let purpleFragmentShaderSource = `
    void main() {
        gl_FragColor = vec4(0.5, 0.0, 0.5, 1.0);
    }
`;

let axisShader = `
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
    let vertexShader = makeShader(gl, gl.VERTEX_SHADER, vertexSource);
    let fragmentShader = makeShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

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
    let drawWindow = document.getElementById("screen");

    /** @type {WebGLRenderingContext} */
    let gl = drawWindow.getContext("webgl");

    drawWindow.width = drawWindow.clientWidth;
    drawWindow.height = drawWindow.clientHeight;
    gl.viewport(0, 0, drawWindow.width, drawWindow.height);

    gl.clearColor(1.0, 1.0, 1.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    let axisBuffer = createAxises(gl);
    let polynomialBuffer = createPolynomial(gl, tree);

    drawLines(gl, axisBuffer, axisShader)
    drawLineStrip(gl, polynomialBuffer, purpleFragmentShaderSource);    
}


function makeStaticDrawArrayBuffer(gl, verticeArray, numVertices) {
    let buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticeArray), gl.STATIC_DRAW);

    let data = {
        "buffer": buffer,
        "numVertices": numVertices
    };

    return data;
}

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 */
function createPolynomial(gl, tree) {
    console.log("Entering createPolynomial");
    let numVertices = 201;

    let verticeArray = [];

    for(let x = -100; x <= 100; x++) {
        let xi = x / 100;
        let yi = evaluateFunction(tree, xi);
        verticeArray.push(xi, yi, 0.0);
    }

    console.log("Exiting createPolynomial");
    return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices);
}

/**
 * 
 * @param {WebGLRenderingContext} gl The WebGL context 
 */
function createAxises(gl) {
    let numVertices = 4;
    let verticeArray = [
        -1, 0, 0,
        1, 0, 0,
        0, 1, 0,
        0, -1, 0
    ];
    return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices);
}

/**
 * Draws triangles using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 * @param {string} fragmentShaderSource The source code of the fragment shader
 */
function drawLines(gl, data, fragmentShaderSource) {
    let program = makeProgram(gl, vertexShaderSource, fragmentShaderSource);

    gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);

    let position = gl.getAttribLocation(program, "position");
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
    let program = makeProgram(gl, vertexShaderSource, fragmentShaderSource);

    gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer);

    let position = gl.getAttribLocation(program, "position");
    gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(position);

    gl.useProgram(program);

    gl.drawArrays(gl.LINE_STRIP, 0, data.numVertices);
}

function processFunction() {
    console.log("Entering processFunction");
    let removeWhitespacePattern = /\s+/g;  //   /pattern/modifiers
    let whitespaceRemoved = document.getElementById("userString").value.replace(removeWhitespacePattern, "");
    
    let implicitMultiplicationPattern = /(\)|x|\d(?=\D))(?=\(|x|\d)/g;

    let implicitMultiplicationString = whitespaceRemoved.replace(implicitMultiplicationPattern, "$1*");

    document.getElementById("result").innerHTML = implicitMultiplicationString;

    if(!validateProperFunction(implicitMultiplicationString)) {
        console.error("Invalid function!");
    }
    else {
        let tree = createParseTree(implicitMultiplicationString);
    
        draw(tree);

        console.log(evaluateFunction(tree, 1));
    }

    console.log("Exiting processFunction");

    //convert to lowercase? Depends on if we replace things like cos() with some temporary var
}

const terminalList = ['+', '-', '*', '/', 'x', '(', ')', '$'];

const map = {
    S: {"+": "!", "-": "!", "*": "!", "/": "!", "x": "AT", "(": "AT", ")": "!", "$": "!"},
    A: {"+": "AT+", "-": "AT-", "*": "!", "/": "!", "x": "!", "(": "!", ")": "", "$": ""},  // S'
    T: {"+": "!", "-": "!", "*": "!", "/": "!", "x": "BR", "(": "BR", ")": "!", "$": "!"},
    B: {"+": "", "-": "", "*": "BR*", "/": "BR/", "x": "!", "(": "!", ")": "", "$": ""},    // T'
    R: {"+": "!", "-": "!", "*": "!", "/": "!", "x": "x", "(": ")S(", ")": "!", "$": "!"}
};

/**
 * 
 * @param {string} func 
 */
function validateProperFunction(func) {
    console.log("Entering validateProperFunction with function: " + func);
    let numberRemover = /\d+(\.\d+)?/g; // This may need additional work. It fails for .32 or something similar (must do 0.32).

    let input = func.replace(numberRemover, "x");

    let invalidCharacters = /[^+\-*/x()]/g;
    if (input.length == 0 || input.search(invalidCharacters) != -1) {
        return false;
    }

    input += "$";

    let charStack = ['S'];
    let point = 0;
    let failed = false;
    // map["S"]["+"];

    while (point < input.length && !failed) {
        //if (charStack.empty())
			//{
				//cout << "String not accepted\n"; //print string contents?
				//break;
            //}
        let currentElem = charStack.pop();

        while(!terminalList.includes(currentElem)) {
            if(map[currentElem][input[point]] == "!") {
                failed = true;
                break;
                // print error?
            }

            [...map[currentElem][input[point]]].forEach(c => charStack.push(c));

            if(!charStack.length) {// if the array is empty
                if(input[point] != '$') {
                    failed = true;
                    // print error?
                }
                break;
            }

            currentElem = charStack.pop();
        }

        point++;
    }

    console.log("Char stack: " + charStack);
    console.log("Remainng string characters: " + input.substr(point));
    console.log("Exiting validateProperFunction");
    

    return !charStack.length && !failed;
}

/*
 * 
 * @param {string} input 
 */
//function getNextToken(input) {
    
//    let tokenRetriever = /(\d+(\.\d+)?|[+\-*/x()])/; // This may need additional work. It fails for .32 or something similar (must do 0.32).
//    input = input.replace(tokenRetriever, (matchedString, savedToken) => { token = savedToken; return "";});

//    return {"input": input, "token": token};
//}

/**
 * 
 */
const TokenType = Object.freeze({OPEN_PARANTHESES: 1, CLOSE_PARANTHESES: 2, VALUE: 3, ADDITION: 4, MULTIPLICATION: 5});

/**
 * 
 */
class Token {
    constructor(token) {
        this.next = null;
        this.previous = null;
        this.tokenType = TokenType.VALUE; 
        
        if(token == "(") {
            this.tokenType = TokenType.OPEN_PARANTHESES;
        }
        else if (token == ")") {
            this.tokenType = TokenType.CLOSE_PARANTHESES;
        }
        else if (token == "+" || token == "-") {
            this.tokenType = TokenType.ADDITION;
        }
        else if (token == "*" || token == "/") {
            this.tokenType = TokenType.MULTIPLICATION;
        }

        this.value = token;
    }
}

class TokenList {
    constructor() {
        this.head = null;
        this.tail = null;  
    }

    add(token) {
        if(this.head == null) {
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
 * 
 * @param {*} input 
 * @return {TokenList}
 */
function tokenize(input) {
    console.log("Entering tokenize with input: " + input);
    let tokenRetriever = /(\d+(\.\d+)?|[+\-*/x()])/; // This may need additional work. It fails for .32 or something similar (must do 0.32).
    let tokenList = new TokenList(); 

    while(input != "") {
        let token = "";
        input = input.replace(tokenRetriever, (matchedString, savedToken) => { token = savedToken; return "";});
        tokenList.add(new Token(token));
    }

    console.log("Exiting tokenize");
    return tokenList;
}


class TreeNode {
    constructor() {
        this.token = null;
        this.leftChild = null;
        this.rightChild = null;
        this.parent = null;
    }

    createLeftChild() {
        this.leftChild = new TreeNode();
        this.leftChild.parent = this;
    }

    createRightChild() {
        this.rightChild = new TreeNode();
        this.rightChild.parent = this;
    }
}

const ExpressionType = Object.freeze({EXP: 1, MEXP: 2, PEXP: 3});

/**
 * Finds the token that the function parse tree should be split at. Searches from the endToken to the startToken looking
 * for the first token with TokenType.ADDITION (if ExpressionType.EXP) or TokenType.MULTIPLICATION (if ExpressionType.MEXP)
 * where the parantheses are balanced. Returns null if no token meets the requirement. NOTE: startToken and endToken don't
 * have to be the first and last tokens in the token list.
 * 
 * @param {ExpressionType} expressionType The type of expression. Should be either ExpressionType.MEXP or ExpressionType.EXP.
 * @param {Token} startToken The first token in the token list to search.
 * @param {Token} endToken The final token in the token list to search.
 * 
 * @return {Token} The token to split at. Returns null if there was no split token found.
 */
function findSplitToken(expressionType, startToken, endToken) {
    let currentToken = endToken;

    let tokenType = TokenType.ADDITION;

    if(expressionType == ExpressionType.MEXP) {
        tokenType = TokenType.MULTIPLICATION;
    }

    let closeParantheses = 0;

    while(currentToken != startToken && currentToken != startToken.previous) {
        if(currentToken.tokenType == tokenType && closeParantheses == 0) {
            return currentToken;
        }

        if(currentToken.tokenType == TokenType.OPEN_PARANTHESES) {
            closeParantheses--;
        }
        else if(currentToken.tokenType == TokenType.CLOSE_PARANTHESES) {
            closeParantheses++;
        }

        currentToken = currentToken.previous;
    }

    return null;
}

/**
 * Creates a parse tree for a tokenized function. It should be read from the bottom-left to the top-right.  
 * 
 * @param {TreeNode} root The root of the tree to add the nodes to.
 * @param {ExpressionType} expressionType The type of expression. Should probably be ExpressionType.EXP.
 * @param {Token} start The first token in the token list to parse. Should probably be TokenList.head.
 * @param {Token} end The final token in the token list to parse. Should probably be TokenList.tail.
 */
function createParseTreeNodes(root, expressionType, startToken, endToken) {
    while(root.value == null) {
        if (expressionType == ExpressionType.EXP) {
            let aToken = findSplitToken(expressionType, startToken, endToken);
            if(aToken == null) {
                expressionType = ExpressionType.MEXP;
            }
            else {
                root.createLeftChild();
                root.createRightChild();
                createParseTreeNodes(root.leftChild, ExpressionType.EXP, startToken, aToken.previous);
                createParseTreeNodes(root.rightChild, ExpressionType.MEXP, aToken.next, endToken);
                root.token = aToken;
                return;
            }
        }
        else if (expressionType == ExpressionType.MEXP) {
            let mToken = findSplitToken(expressionType, startToken, endToken);
            if (mToken == null) {
                expressionType = ExpressionType.PEXP;
            }
            else {
                root.createLeftChild();
                root.createRightChild();
                createParseTreeNodes(root.leftChild, ExpressionType.MEXP, startToken, mToken.previous);
                createParseTreeNodes(root.rightChild, ExpressionType.PEXP, mToken.next, endToken);
                root.token = mToken;
                return;
            }
        }
        else {
            if (startToken.tokenType == TokenType.OPEN_PARANTHESES) {
                expressionType = ExpressionType.EXP;
                startToken = startToken.next;
                endToken = endToken.previous;
            }
            else {
                root.token = startToken;
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
    console.log("Entering createParseTree with input: " + input);
    let tokenList = tokenize(input);
    let tree = new TreeNode();

    createParseTreeNodes(tree, ExpressionType.EXP, tokenList.head, tokenList.tail);
    console.log(printParseTree(tree));
    console.log("Exiting createParseTree");
    return tree;
}

function printParseTree(tree) {
    if(tree == null) {
        return "";
    }

    return printParseTree(tree.leftChild) + tree.token.value + printParseTree(tree.rightChild);
}

/**
 * 
 * @param {TreeNode} tree 
 * @param {Number} x 
 * @return {Number}
 */
function evaluateFunction(tree, x) {
    let result;
    if(tree.leftChild == null) {
        if(tree.token.value == "x") {
            return x;
        }
        result = tree.token.value;
        return tree.token.value;
    }
    else if (tree.token.value == "*") {
        return Number(evaluateFunction(tree.leftChild, x)) * Number(evaluateFunction(tree.rightChild, x));
    }
    else if (tree.token.value == "/") {
        let numerator = Number(evaluateFunction(tree.leftChild, x));
        let denominator = Number(evaluateFunction(tree.rightChild, x));
        if(denominator == 0) {
            if(numerator == 0) {
                return undefined;
            }
            return Infinity * numerator;
        }
        return numerator / denominator;
    }
    else if (tree.token.value == "+") {
        return Number(evaluateFunction(tree.leftChild, x)) + Number(evaluateFunction(tree.rightChild, x));
    }
    else { //if (tree.token.value == "-") {
        return Number(evaluateFunction(tree.leftChild, x)) - Number(evaluateFunction(tree.rightChild, x));
    }
}