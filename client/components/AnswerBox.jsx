import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles, Typography, Card } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  display: {
    padding: '5px 10px'
  }
}))

export default function AnswerBox (props) {
  const classes = useStyles()

  return (
    <Card elevation={4} className={classes.display}>
      <Typography variant="h3">{`${props.currentEquation} = ${props.value}`}</Typography>
    </Card>
  )
}

AnswerBox.propTypes = {
  value: PropTypes.string,
  currentEquation: PropTypes.string
}
