import React, { Component } from 'react';
import Jobs from '../Components/Jobs/Jobs';
import { jobData } from '../JobData';

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
        <h3>Professional Experience</h3>
        {displayJobs}
      </section>
    )
  }
}