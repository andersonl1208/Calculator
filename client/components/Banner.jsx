import React from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useTheme from '@material-ui/styles/useTheme'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  }
}))

export default function Banner (props) {
  const classes = useStyles()
  const theme = useTheme()
  let color = 'primary'
  if (theme.palette.type === 'dark') {
    color = 'inherit'
  }

  return (
    <AppBar position="static" color={color}>
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
