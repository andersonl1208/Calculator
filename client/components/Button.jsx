//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React from 'react'
import PropTypes from 'prop-types'

export default function Button (props) {
  return (
    <button type="button" onClick={props.onclick}>{props.name}</button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  onclick: PropTypes.func
}

Button.defaultProps = {
  name: '',
  onclick: (e) => { e.preventDefault() }
}
