//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React, { useEffect, useRef } from 'react'
import drawGraph from '../webgl/drawGraph.js'
import PropTypes from 'prop-types'

import { makeStyles, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  canvas: {
    width: '100%',
    height: 'auto'
  }
}))

export default function Graph (props) {
  const classes = useStyles()

  const canvasRef = useRef(null)

  useEffect(() => {
    drawGraph(props.tree, canvasRef.current, props.theme)
  })

  return (
    <Card elevation={4} ><canvas className={classes.canvas} width='500px' height='500px' ref={ canvasRef }></canvas></Card>
  )
}

Graph.propTypes = {
  tree: PropTypes.object,
  theme: PropTypes.string
}

Graph.defaultProps = {
  tree: null,
  theme: 'light'
}
