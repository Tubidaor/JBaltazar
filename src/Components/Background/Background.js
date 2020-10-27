import React from 'react'
import './Background.css'

export default function Bubbles(props) {

    const boxShadowSelector = function(color) {
      const coin = Math.floor(Math.random() * 2)
      if(!coin) {
        return "none"
      }
      return "0 0 10px 5px"+color
    } 
    const style = {
      height: props.height,
      width: props.width,
      "backgroundColor": props.color,
      boxShadow: boxShadowSelector(props.color),
      position: "absolute",
      "marginTop": props.marginTop,
      "marginBottom": "auto",
      "marginLeft": props.marginLeft,
      "marginRight": "auto",
    }

  return (
    <div key={props.id} className={`bubbles ${props.id}`} style={style}>
    </div>
  )
}