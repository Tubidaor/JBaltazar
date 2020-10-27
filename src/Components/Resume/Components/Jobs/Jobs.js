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
      <div className={`jobsCont${job.id}`}>
        <div className="jobsDiv">
          <div className="jobHeadingDiv1">
            <h4>{job.company}</h4>
          </div>
          <div className="jobHeadingDiv2">
            <h5>{job.city}</h5>  
            <h5>{job.begDate} - {job.endDate}</h5>
          </div>
        </div>
        <h5 className="jobTitle">{job.jobTitle}</h5>
        <p className="jobResponsibilities">{job.responsibilities}</p>
        <ul className="ulJobs">
          {acompDisplay}
        </ul>
      </div>
    ) 
  }
}