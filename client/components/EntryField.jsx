//     <canvas id="screen" ></canvas>
//     <textarea id="userString" rows="5" cols="85">x</textarea><br/>
//     <button type="button" onClick="graphFunction()">Graph</button>
//     <div id="result"></div><br/>

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { List, ListItem, TextField, ListItemText, makeStyles, Paper, Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 300,
    height: 300
  },

  textField: {
    width: '100%'
  },

  entry: {
    marginBottom: '-1.5em'
  },

  result: {
    textAlign: 'right'
  }
}))

export default function EntryField (props) {
  const classes = useStyles()

  const [entriesList, setEntriesList] = useState([])
  const [resultsList, setResultsList] = useState([])

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      setEntriesList(entriesList.concat(props.currentEntry))
      if (props.currentValue !== undefined) {
        setResultsList(resultsList.concat(props.currentValue))
      } else {
        setResultsList(resultsList.concat('undefined'))
      }
      props.setCurrentEntry('')
    }
  }

  useEffect(() => {
    document.getElementById('textFieldEntryBox').scrollIntoView(false)
  }, [entriesList])

  const entryTiles = []
  for (let i = 0; i < entriesList.length; i++) {
    entryTiles.push(
      <ListItem key={i * 3} className={classes.entry}>
        <ListItemText primary={entriesList[i]}>
        </ListItemText>
      </ListItem>
    )
    entryTiles.push(
      <div key={i * 2 + 1}>
        <ListItem>
          <ListItemText primary={resultsList[i]} className={classes.result}>
          </ListItemText>
        </ListItem>
        <Divider />
      </div>
    )
  }

  return (
    <Paper elevation={4}>
      <List className={classes.root} dense={true}>
        {entryTiles}
        <ListItem>
          <TextField id='textFieldEntryBox' className={classes.textField} value={props.currentEntry} onChange={props.onEntryChange} onKeyPress={onKeyPress}/>
        </ListItem>
      </List>
    </Paper>
  )
}

EntryField.propTypes = {
  currentEntry: PropTypes.string,
  onEntryChange: PropTypes.func,
  currentValue: PropTypes.string,
  setCurrentEntry: PropTypes.func
}
