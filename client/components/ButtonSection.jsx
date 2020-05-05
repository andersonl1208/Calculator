import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    flexWrap: 'nowrap'
  }
}))

export default function ButtonSection (props) {
  const classes = useStyles()
  return (
    <Grid item>
      <Grid container spacing={props.spacing} className={classes.root}>
        {props.children}
      </Grid>
    </Grid>
  )
}

ButtonSection.propTypes = {
  children: PropTypes.node,
  spacing: PropTypes.number
}
