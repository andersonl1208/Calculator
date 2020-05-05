import { processFunction, evaluateFunction } from '../parser/equationParser.js'

/* eslint no-unused-vars: ["warn",{ "varsIgnorePattern": "graphFunction"}] */

/**
 * Code for a vertex shader. Contains attribute position that takes the position of the vertex.
 */
const vertexShaderSource = `
    attribute vec4 position;
    uniform vec4 color;

    varying mediump vec4 fragColor;

    void main() {
        gl_Position = position;
        fragColor = color;
    }
`

/**
 * Default fragment shader for a model
 */
const defaultFragmentShader = `
    precision mediump float;
    varying mediump vec4 fragColor;

    void main() {
        gl_FragColor = fragColor;
    }
`

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} type The type of shader (should be either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER)
 * @param {string} source The source code of the shader
 */
function makeShader (gl, type, source) {
  let shader = gl.createShader(type)

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader))

    gl.deleteShader(shader)
    shader = null
  }

  return shader
}

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {string} vertexSource The source code for the vertex shader
 * @param {string} fragmentSource The source code for the fragment shader
 */
function makeProgram (gl, vertexSource, fragmentSource) {
  const vertexShader = makeShader(gl, gl.VERTEX_SHADER, vertexSource)
  const fragmentShader = makeShader(gl, gl.FRAGMENT_SHADER, fragmentSource)

  let program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)

  gl.linkProgram(program)

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program))

    gl.deleteProgram(program)
    program = null
  }

  return program
}

/**
 *
 */
function draw (tree, drawWindow, theme) {
  try {
    /** @type {WebGLRenderingContext} */
    const gl = drawWindow.getContext('webgl')

    // drawWindow.width = drawWindow.clientWidth
    // drawWindow.height = drawWindow.clientHeight
    gl.viewport(0, 0, drawWindow.width, drawWindow.height)

    const colors = {
      clear: [1.0, 1.0, 1.0, 1.0],
      axes: [0, 0, 0, 1],
      polynomial: [0.5, 0, 0.5, 1]
    }

    if (theme === 'dark') {
      colors.clear = [0.259, 0.259, 0.259, 1.0]
      colors.axes = [1, 1, 1, 1]
      colors.polynomial = [0, 1, 0.251, 1]
    }

    gl.clearColor(...colors.clear)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    const axisBuffer = createAxises(gl)
    const tickMarkBuffer = createTickMarks(gl, 20, 20)
    const polynomialBuffer = createPolynomial(gl, tree)

    drawLines(gl, axisBuffer, new Float32Array(colors.axes))
    drawLines(gl, tickMarkBuffer, new Float32Array(colors.axes))
    drawLineStrip(gl, polynomialBuffer, new Float32Array(colors.polynomial))
  } catch (e) {
    console.error(`Draw failed with drawWindow ${drawWindow}`)
    console.error(e)
  }
}

function makeStaticDrawArrayBuffer (gl, verticeArray, numVertices) {
  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticeArray), gl.STATIC_DRAW)

  const data = {
    buffer: buffer,
    numVertices: numVertices
  }

  return data
}

/**
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 */
function createPolynomial (gl, tree) {
  console.log('Entering createPolynomial')
  const numVertices = 201

  const verticeArray = []

  for (let x = -100; x <= 100; x++) {
    const xi = x / 10
    const yi = evaluateFunction(tree, xi)
    verticeArray.push(xi / 10, yi / 10, 0.0)
  }

  console.log('Exiting createPolynomial')
  return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices)
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
function createAxises (gl) {
  const numVertices = 4
  const verticeArray = [
    -1, 0, 0,
    1, 0, 0,
    0, 1, 0,
    0, -1, 0
  ]
  return makeStaticDrawArrayBuffer(gl, verticeArray, numVertices)
}

function createTickMarks (gl, numX, numY) {
  const verticeArray = []

  for (let i = 0; i < numX; i++) {
    verticeArray.push(2 / numX * i - 1, -0.02, 0, 2 / numX * i - 1, 0.02, 0)
  }

  for (let j = 0; j <= numY; j++) {
    verticeArray.push(-0.02, 2 / numY * j - 1, 0, 0.02, 2 / numY * j - 1, 0)
  }
  return makeStaticDrawArrayBuffer(gl, verticeArray, 2 * (numX + numY))
}

/**
 * Draws lines using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 */
function drawLines (gl, data, color) {
  const program = makeProgram(gl, vertexShaderSource, defaultFragmentShader)

  gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer)

  const position = gl.getAttribLocation(program, 'position')
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(position)

  gl.useProgram(program)

  const col = gl.getUniformLocation(program, 'color')
  gl.uniform4fv(col, color)

  gl.drawArrays(gl.LINES, 0, data.numVertices)
}

/**
 * Draws triangles using the vertices contained in the data object
 *
 * @param {WebGLRenderingContext} gl The WebGL context
 * @param {*} data JSON object holding the buffer and the number of vertices
 */
function drawLineStrip (gl, data, color) {
  const program = makeProgram(gl, vertexShaderSource, defaultFragmentShader)

  gl.bindBuffer(gl.ARRAY_BUFFER, data.buffer)

  const position = gl.getAttribLocation(program, 'position')
  gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0)
  gl.enableVertexAttribArray(position)

  gl.useProgram(program)

  const col = gl.getUniformLocation(program, 'color')
  gl.uniform4fv(col, color)

  gl.drawArrays(gl.LINE_STRIP, 0, data.numVertices)
}

/**
 * Called when the user clicks the graph function button. Processes and draws the function if it is valid.
 */
function graphFunction (tree, drawWindow, theme) {
  try {
    if (tree !== null) {
      draw(tree, drawWindow, theme)
    }
  } catch (e) {
    console.error(`Graph function failed for ${tree} with drawWindow ${drawWindow}`)
    console.error(e)
  }
}

export default graphFunction
