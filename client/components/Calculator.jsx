
import React from 'react'

import Graph from './Graph.jsx'
import EntryField from './EntryField.jsx'
import ButtonGrid from './ButtonGrid.jsx'
import Button from './Button.jsx'

class Calculator extends React.Component {
  constructor (props) {
    super(props)

    this.handleEquationChange = this.handleEquationChange.bind(this)

    this.state = {
      currentEquation: 'x'
    }
  }

  handleEquationChange (event) {
    console.log(event.target.value)
    this.setState({ currentEquation: event.target.value })
  }

  render () {
    return (
      <div>
        <Graph currentEquation={this.state.currentEquation}/>
        <EntryField currentEntry={this.state.currentEquation} onEntryChange={this.handleEquationChange} /><br />
        <ButtonGrid rows={1} columns={1} >
          <Button name='Submit' onclick={this.handleGraphClick}></Button>
        </ButtonGrid>
        <ButtonGrid></ButtonGrid>
      </div>
    )
  }
}

export default Calculator
