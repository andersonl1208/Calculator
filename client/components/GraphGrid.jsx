import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import Graph from './Graph.jsx'
import AnswerBox from './AnswerBox.jsx'

export default function GraphGrid (props) {
  return (
    <Grid item xs={ 12 } md={ 6 } lg={4}>
      <Graph tree={props.tree} theme={props.theme} /><br />
      <AnswerBox value={props.value} currentEquation={props.currentEquation} />
    </Grid>
  )
}

GraphGrid.propTypes = {
  currentEquation: PropTypes.string,
  tree: PropTypes.object,
  value: PropTypes.string,
  theme: PropTypes.string
}
