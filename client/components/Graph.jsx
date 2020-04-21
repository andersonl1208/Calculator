//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React from 'react'
import drawGraph from '../webgl/drawGraph.js'
import PropTypes from 'prop-types'

class Graph extends React.Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  // initial draw
  componentDidMount () {
    drawGraph(this.props.currentEquation, this.canvasRef.current)
  }

  render () {
    const canvas = <canvas width={500} height={500} ref={ this.canvasRef }></canvas>

    if (this.canvasRef.current !== null) {
      drawGraph(this.props.currentEquation, this.canvasRef.current)
    }

    return canvas
  }
}

Graph.propTypes = {
  currentEquation: PropTypes.string
}

Graph.defaultProps = {
  currentEquation: '',
}

export default Graph
