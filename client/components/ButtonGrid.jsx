import React from 'react'
import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles.js'

import ButtonSection from './ButtonSection.jsx'
import InputButton from './InputButton.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px'
  }
}))

export default function ButtonGrid (props) {
  const classes = useStyles()

  const createButton = (value, text = value) => {
    return (
      <InputButton value={value} title={text} handleButtonClick={props.handleButtonClick}/>
    )
  }

  return (
    <Paper elevation={4} >
      <Grid container className={classes.root} spacing={1} justify="center">
        <Grid item xs={12}>
          <Grid container spacing={1} justify="center">
            <ButtonSection spacing={1}>
              {createButton('0')}
              {createButton('1')}
              {createButton('2')}
              {createButton('3')}
              {createButton('4')}
            </ButtonSection>
            <ButtonSection spacing={1}>
              {createButton('5')}
              {createButton('6')}
              {createButton('7')}
              {createButton('8')}
              {createButton('9')}
            </ButtonSection>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={1} justify="center">
            <ButtonSection spacing={1}>
              {createButton('+')}
              {createButton('-')}
              {createButton('*')}
              {createButton('/')}
              {createButton('^(', '^')}
            </ButtonSection>
            <ButtonSection spacing={1}>
              {createButton('^(1/2)', <span>&radic;</span>)}
              {createButton('pi', <span>&pi;</span>)}
              {createButton('7', 'e')}
              {createButton('8', 'ln')}
              {createButton('9', 'log')}
            </ButtonSection>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1} justify="center">
            <ButtonSection spacing={1}>
              {createButton('sin(', 'sin')}
              {createButton('cos(', 'cos')}
              {createButton('tan(', 'tan')}
            </ButtonSection>
            <ButtonSection spacing={1}>
              {createButton('asin(', 'arcsin')}
              {createButton('acos(', 'arccos')}
              {createButton('atan(', 'arctan')}
            </ButtonSection>
            <ButtonSection spacing={1}>
              {createButton('x')}
              {createButton('(')}
              {createButton(')')}
            </ButtonSection>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

ButtonGrid.propTypes = {
  handleButtonClick: PropTypes.func.isRequired
}
