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
function draw() {
    let drawWindow = document.getElementById("screen");

    /** @type {WebGLRenderingContext} */
    let gl = drawWindow.getContext("webgl");

    drawWindow.width = drawWindow.clientWidth;
    drawWindow.height = drawWindow.clientHeight;
    gl.viewport(0, 0, drawWindow.width, drawWindow.height);

    gl.clearColor(1.0, 1.0, 1.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    let axisBuffer = createAxises(gl);
    let polynomialBuffer = createPolynomial(gl);

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
function createPolynomial(gl) {
    let numVertices = 201;

    let verticeArray = [];

    for(let x = -100; x <= 100; x++) {
        let xi = x / 100;
        let yi = xi * xi * xi;
        verticeArray.push(xi, yi, 0);
    }

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
    let removeWhitespacePattern = /\s+/g;  //   /pattern/modifiers
    let whitespaceRemoved = document.getElementById("userString").value.replace(removeWhitespacePattern, "");
    
    let implicitMultiplicationPattern = /(\)|x|\d(?=\D))(?=\(|x|\d)/g;

    let implicitMultiplicationString = whitespaceRemoved.replace(implicitMultiplicationPattern, "$1*");

    document.getElementById("result").innerHTML = implicitMultiplicationString;

    if(!validateProperFunction(implicitMultiplicationString)) {
        console.error("Invalid function!");
    }
    else {
        console.log(evaluateFunction(createParseTree(implicitMultiplicationString), 1));
    }

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

const TokenType = Object.freeze({OPEN_PARANTHESES: 1, CLOSE_PARANTHESES: 2, VALUE: 3, ADDITION: 4, MULTIPLICATION: 5});

class Token {
    constructor(token) {
        this.next = null;
        this.previous = null;
        this.tokenType = TokenType.VALUE; 
        
        if(token == "(") {
            this.tokenType = TokenType.OPEN_PARANTHESES;
        }
        else if (token == ")") {
            this.TokenType = TokenType.CLOSE_PARANTHESES;
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
    let tokenRetriever = /(\d+(\.\d+)?|[+\-*/x()])/; // This may need additional work. It fails for .32 or something similar (must do 0.32).
    let tokenList = new TokenList(); 

    while(input != "") {
        let token = "";
        input = input.replace(tokenRetriever, (matchedString, savedToken) => { token = savedToken; return "";});
        tokenList.add(new Token(token));
    }

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

function findSplitToken(expressionType, startToken, endToken) {
    let currentToken = endToken;

    let tokenType = TokenType.ADDITION;

    if(expressionType == ExpressionType.MEXP) {
        tokenType = TokenType.MULTIPLICATION;
    }

    while(currentToken != startToken && currentToken != startToken.previous) {
        if(currentToken.tokenType == tokenType) {
            return currentToken;
        }

        currentToken = currentToken.previous;
    }

    return null;
}

/**
 * 
 * @param {TreeNode} root 
 * @param {ExpressionType} expressionType 
 * @param {Token} start
 * @param {Token} end
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

function createParseTree(input) {
    let tokenList = tokenize(input);
    let tree = new TreeNode();

    createParseTreeNodes(tree, ExpressionType.EXP, tokenList.head, tokenList.tail);
    console.log(printParseTree(tree));
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
 * @param {*} x 
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
        let left = evaluateFunction(tree.leftChild, x);
        let right = evaluateFunction(tree.rightChild, x);
        result = Number(left) * Number(right);
        return result;
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
        let left = evaluateFunction(tree.leftChild, x);
        let right = evaluateFunction(tree.rightChild, x);
        result = Number(left) + Number(right);
        return result;
    }
    else { //if (tree.token.value == "-") {
        result = Number(evaluateFunction(tree.leftChild, x)) - Number(evaluateFunction(tree.rightChild, x));
        return result;
    }
}

// IMPLEMENT PARANTHESE BALANCING!!!