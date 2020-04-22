// Load React libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Load component
import Calculator from './components/Calculator.jsx'

console.log(process.env.NODE_ENV)

// Rendering the component into the page
ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
)
