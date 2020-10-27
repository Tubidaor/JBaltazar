import React from 'react'
import { schools } from '../JobData'
import Schools from '../Components/Schools/Schools'

export default function Education(props) {

  const schoolData = schools
  
  return (
    <section className="edSection">
      <h3>Education</h3>
      <Schools schools={schoolData}/>
    </section>
  )
}