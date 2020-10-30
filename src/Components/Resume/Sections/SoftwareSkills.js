import React, { Component } from 'react'
import Skills from '../Components/Skills/Skills'
import {jobSkills} from '../JobData'

export default class SkillsSection extends Component {

  render() {
    let skills = jobSkills
    
    return (
      <section className="skillsSection">
        <header>
          <h2>Skills</h2>
        </header>
        <Skills skills={skills}/>
      </section>
    )
  }
}