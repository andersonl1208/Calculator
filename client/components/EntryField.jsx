//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React from 'react'
import PropTypes from 'prop-types'

export default function EntryField (props) {
  return (
    <textarea rows="5" cols="85" value={props.currentEntry} onChange={props.onEntryChange}></textarea>
  )
}

EntryField.propTypes = {
  currentEntry: PropTypes.string,
  onEntryChange: PropTypes.func
}
