import React, { Component } from 'react'
import './Jobs.css'



export default class Jobs extends Component {

  render() {
    const { job } = this.props
    const acompData = job.accomplishments
    const acompDisplay = acompData.map(acomp =>
        <li key={acomp} className="liJobs">
          {acomp}
        </li>
      )

    return (
      <div className={`jobsCon`}>
        <div className="jobsDiv">
          <header className="jobHeadingDiv1">
            <h3>{job.company}</h3>
          </header>
          <div className="jobHeadingDiv2">
            <header>
              <h4>{job.city}</h4>  
            </header>
            <header>
              <h4>{job.begDate} - {job.endDate}</h4>
            </header>
          </div>
        </div>
        <header>
          <h4 className="jobTitle">{job.jobTitle}</h4>
        </header>
        <p className="jobResponsibilities">{job.responsibilities}</p>
        <ul className="ulJobs">
          {acompDisplay}
        </ul>
      </div>
    ) 
  }
}