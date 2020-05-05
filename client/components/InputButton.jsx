import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none'
  }
}))

export default function InputButton (props) {
  const classes = useStyles()
  return (
    <Grid item>
      <Button className={classes.button} variant="contained" color="primary" size="large" onClick={ props.handleButtonClick } value={ props.value }>
        <Typography>{props.title}</Typography>
      </Button>
    </Grid>
  )
}

InputButton.propTypes = {
  value: PropTypes.string,
  title: PropTypes.node,
  handleButtonClick: PropTypes.func
}

InputButton.defaultProps = {
  value: '',
  title: '',
  handleButtonClick: () => {}
}
