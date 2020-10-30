import React, { Component } from 'react'
import Jobs from '../Components/Jobs/Jobs'
import { jobData } from '../JobData'

export default class ProfessionalExp extends Component {

  render() {
    const displayJobs = jobData.map(job => 
      <Jobs  
        key={job.id}
        job={job}
      />
    )
    
    return(
      <section className="profExSection">
        <header>
          <h2>Professional Experience</h2>
        </header>
        {displayJobs}
      </section>
    )
  }
}