import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import Brightness4 from '@material-ui/icons/Brightness4'

export default function SettingsGrid (props) {
  return (
    <Tooltip title="Toggle Dark Mode">
      <IconButton color="inherit" onClick={ props.handleButtonClick } value='theme'><Brightness4 /></IconButton>
    </Tooltip>
  )
}

SettingsGrid.propTypes = {
  handleButtonClick: PropTypes.func
}

SettingsGrid.defaultPropTypes = {
  handleButtonClick: () => {}
}
