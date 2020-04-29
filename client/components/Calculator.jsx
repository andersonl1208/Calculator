import React, { useState } from 'react'

import Graph from './Graph.jsx'
import EntryField from './EntryField.jsx'
import ButtonGrid from './ButtonGrid.jsx'
import Button from './Button.jsx'

export default function Calculator () {
  const [currentEquation, setCurrentEquation] = useState('x')

  const handleEquationChange = (event) => {
    console.log(event.target.value)
    setCurrentEquation(event.target.value)
  }

  return (
    <div>
      <Graph currentEquation={currentEquation}/>
      <EntryField currentEntry={currentEquation} onEntryChange={handleEquationChange} /><br />
      <ButtonGrid rows={1} columns={1} >
        <Button name='Submit' onclick={() => {}}></Button>
      </ButtonGrid>
      <ButtonGrid></ButtonGrid>
    </div>
  )
}
