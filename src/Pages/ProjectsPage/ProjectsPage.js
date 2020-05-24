import React from 'react';
import Projects from '../../Components/Projects/Projects';
import './ProjectsPage.css';
import { projects } from '../../Data';

export default function ProjectsPage(props) {

  return (
    <div className="projectsContainer">
      <h1 className="projectsH1">Projects</h1>
      <p className={"projectsIntro"}>These projects are in chronological order. From learning to code in HTML and CSS, to using React and Node to build a client and server.</p>
      <Projects projects={projects}/>
    </div>
  )
}
