import React from 'react';
import './Skills.css'

export default function Skills(props) {

  const skills = props.skills.map(skill => {
    const styles = {
      width: `${skill.rating}%`
    }

    return (
      <li key={skill.skill}className="liSkills">
        <div className="liSkillContainer">
          <h6>{skill.skill}</h6>
          <div className="potential">
            <div style={styles} className="current">
            </div>
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className="skillsContainer">
      <div className="labelsDiv">
        <div className="labelHolder">
          <div className="labelBubble1">
          </div>
          <label>Current</label>
        </div>
        
        <div className="labelHolder">
          <div className="labelBubble2">
          </div>
          <label>Potential</label>
        </div>
      </div>
      <ul className="ulSkills">
        {skills}
      </ul>
    </div>
  )
}