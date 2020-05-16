import React from 'react';
import Projects from '../../Components/Projects/Projects';
import './ProjectsPage.css';
import { projects } from '../../Data';

export default function ProjectsPage(props) {



  return (
    <div className="projectsContainer">
      <h1 className="projectsH1">Projects</h1>
      <Projects projects={projects}/>
    </div>
  )
}
