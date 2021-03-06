import React from 'react'
import './AboutMe.css'

export default function AboutMe(props) {

  let paragraphs = props.text
  let displayPs = paragraphs.map(p =>
    <p id={p.id} className={`aboutMeP ${p.id}`}> {p.para} </p>
  )

  return(
    <div className="aboutMeContainer">
        <header>
          <h1 className="h1AboutMe">About Me</h1>
        </header>
        <div className="aboutMePContainer">
          {displayPs}
        </div>
    </div>
  )
}