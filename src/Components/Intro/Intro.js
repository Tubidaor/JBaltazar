import React from 'react';
import './Intro.css'


export default function Intro(props) {
  const style = {
    // display: "none",
    // position: "absolute",
    top: props.top,
    left: props.left,
    zIndex: "1",
  }


  return (
    <div className="h1Container">
      <h1 className={props.className} Id={props.id} style={style}>
        {props.text}
      </h1>
    </div>
  )
}