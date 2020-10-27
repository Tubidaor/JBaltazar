import React from 'react'
import ReactDOM from 'react-dom'
import Resume from './Resume'

test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Resume></Resume>, div)
  ReactDOM.unmountComponentAtNode(div)
})
