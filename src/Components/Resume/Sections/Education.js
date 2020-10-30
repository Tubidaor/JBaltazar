import React from 'react'
import { schools } from '../JobData'
import Schools from '../Components/Schools/Schools'

export default function Education(props) {

  const schoolData = schools
  
  return (
    <section className="edSection">
      <header>
        <h2>Education</h2>
      </header>
      <Schools schools={schoolData}/>
    </section>
  )
}