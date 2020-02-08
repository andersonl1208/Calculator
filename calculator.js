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

    //convert to lowercase? Depends on if we replace things like cos() with some temporary var
}

const nonTerminalList = ['S', 'A', 'T', 'B', 'R'];
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
    if (input.search(invalidCharacters) != -1) {
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
        let terminalLocation = input.search();
        let nonTerminalLocation = input.search();

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