import React from 'react'
import './Schools.css'

export default function Schools(props) {
  let displaySchools = props.schools.map(school =>
    <div key={school.id} className="school">
      <div className="schoolNameDiv">
        <header>
          <h3>{school.school}</h3>
        </header>
        <header className="schoolCity">
          <h4>{school.city}</h4>
        </header>
      </div>
      <div className="edDegreeYearDiv">
        <header>
          <h4>{school.degree}</h4>
        </header>
        <header>
          <h4>{school.gradYear}</h4>
        </header>
      </div>
    </div>
  )

  return (
    <div className="edContainer">
      {displaySchools}
    </div>
  )
}