//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  render () {
    return (
      <button type="button" onClick={this.props.onclick}>{this.props.name}</button>
    )
  }
}

Button.propTypes = {
  name: PropTypes.string,
  onclick: PropTypes.func
}

Button.defaultProps = {
  name: '',
  onclick: (e) => { e.preventDefault() }
}

export default Button
