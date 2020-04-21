//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React from 'react'
import PropTypes from 'prop-types'

class ButtonGrid extends React.Component {
  render () {
    return (
      <div></div>
    )
  }
}

ButtonGrid.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

ButtonGrid.defaultProps = {
  title: 'Banner Title'
}

export default ButtonGrid
