import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Toggleable = React.forwardRef((props,ref) => {
  const [visable, setVisable] = useState(false)
  const hideWhenVisable = { display : visable ? 'none' : '' }
  const showWhenVisalbe = { display : visable ? '' : 'none' }

  const ToggleVisibility = () => {
    setVisable(!visable)
  }
  useImperativeHandle(ref,() => {
    return ToggleVisibility
  })
  return(
    <div>
      <div style = {hideWhenVisable} >
        <button onClick = {ToggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style = {showWhenVisalbe}>
        {props.children}
        <button onClick = {ToggleVisibility}>cancel</button>
      </div>
    </div>
  )
})
Toggleable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Toggleable