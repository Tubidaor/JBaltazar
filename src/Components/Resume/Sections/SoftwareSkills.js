import React, { Component } from 'react';
import Skills from '../Components/Skills/Skills';
import {jobSkills} from '../JobData';

export default class SkillsSection extends Component {

  render() {
    
    let skills = jobSkills
    
    return (
      <section className="skillsSection">
        <h3>Skills</h3>
        <Skills skills={skills}/>
      </section>
    )
  }
}