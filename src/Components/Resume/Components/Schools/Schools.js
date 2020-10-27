import React from 'react'
import './Schools.css'

export default function Schools(props) {
  let displaySchools = props.schools.map(school =>
    <div key={school.id} className="school">
      <div className="schoolNameDiv">
        <h4>{school.school}</h4>
        <h5>{school.city}</h5>
      </div>
      <div className="edDegreeYearDiv">
        <h5>{school.degree}</h5>
        <h5>{school.gradYear}</h5>
      </div>
    </div>
  )

  return (
    <div className="edContainer">
      {displaySchools}
    </div>
  )
}