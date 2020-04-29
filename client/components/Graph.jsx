//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React, { useEffect, useRef } from 'react'
import drawGraph from '../webgl/drawGraph.js'
import PropTypes from 'prop-types'

export default function Graph (props) {
  const canvasRef = useRef(null)

  useEffect(() => {
    drawGraph(props.currentEquation, canvasRef.current)
  })

  return <canvas width={500} height={500} ref={ canvasRef }></canvas>
}

Graph.propTypes = {
  currentEquation: PropTypes.string
}

Graph.defaultProps = {
  currentEquation: ''
}
