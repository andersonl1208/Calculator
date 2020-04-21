//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React from 'react'

class EntryField extends React.Component {
  render () {
    return (
      <textarea rows="5" cols="85" value={this.props.currentEntry} onChange={this.props.onEntryChange}></textarea>
    )
  }
}

export default EntryField
