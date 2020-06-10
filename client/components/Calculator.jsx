import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import makeStyles from '@material-ui/core/styles/makeStyles'

import EntryGrid from './EntryGrid.jsx'
import GraphGrid from './GraphGrid.jsx'
import Banner from './Banner.jsx'
import SettingsList from './SettingsList.jsx'

import { processFunction, evaluateFunction } from '../parser/equationParser.js'

const originalEquation = 'x'
const originalTree = processFunction(originalEquation)
const originalValue = evaluateFunction(originalTree, 1).toString()

const useStyles = makeStyles((theme) => ({
  grid: {
    padding: '0.75em'
  }
}))

export default function Calculator () {
  const classes = useStyles()

  const [currentEquation, setCurrentEquation] = useState(originalEquation)
  const [currentTree, setCurrentTree] = useState(originalTree)
  const [currentValue, setCurrentValue] = useState(originalValue)
  const [useDarkTheme, setUseDarkTheme] = useState(false)
  const [initialDarkThemeSet, setUseInitialDarkTheme] = useState(false)

  const handleEquationChange = (newEquation) => {
    setCurrentEquation(newEquation)
    const tree = processFunction(newEquation)
    setCurrentTree(tree)
    if (tree !== null) {
      setCurrentValue(evaluateFunction(tree, 1).toString())
    }
  }

  const handleEquationBoxChange = (event) => {
    handleEquationChange(event.target.value)
  }

  const handleButtonClick = (event) => {
    handleEquationChange(currentEquation + event.currentTarget.value)
  }

  const setEquation = (value) => {
    handleEquationChange(value)
  }

  const handleSettingsButtonClick = (event) => {
    if (event.currentTarget.value === 'theme') {
      setUseDarkTheme(!useDarkTheme)
    }
  }

  if (useMediaQuery('(prefers-color-scheme: dark)') && !initialDarkThemeSet) {
    setUseDarkTheme(true)
    setUseInitialDarkTheme(true)
  }

  const themeType = useDarkTheme ? 'dark' : 'light'

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeType
        }
      }),
    [themeType]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner title={'Calculator'}>
        <SettingsList handleButtonClick={handleSettingsButtonClick} />
      </Banner>

      <Grid className={classes.grid} container spacing={2}>
        <GraphGrid currentEquation={currentEquation} tree={currentTree} value={currentValue} theme={themeType}></GraphGrid>
        <EntryGrid currentEquation={currentEquation} handleEquationChange={handleEquationBoxChange}
          handleButtonClick={handleButtonClick} currentValue={currentValue} setCurrentEquation={setEquation}/>
      </Grid>
    </ThemeProvider>
  )
}
