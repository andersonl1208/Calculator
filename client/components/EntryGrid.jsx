import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import EntryField from './EntryField.jsx'
import ButtonGrid from './ButtonGrid.jsx'

export default function EntryGrid (props) {
  return (
    <Grid item xs={ 12 } md={ 6 } lg={8}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <EntryField currentEntry={props.currentEquation} onEntryChange={props.handleEquationChange}
            currentValue={props.currentValue} setCurrentEntry={props.setCurrentEquation}/>
        </Grid>
        <Grid item>
          <ButtonGrid handleButtonClick={props.handleButtonClick} />
        </Grid>
      </Grid>
    </Grid>
  )
}

EntryGrid.propTypes = {
  currentEquation: PropTypes.string.isRequired,
  handleEquationChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  currentValue: PropTypes.string,
  setCurrentEquation: PropTypes.func
}
