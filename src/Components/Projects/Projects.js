import React from 'react';
import './Projects.css';

export default function Projects(props) {

  let displayProjects = props.projects

  let renderProjects = displayProjects.map(proj =>
    <div key={proj.id} className="projectsDiv">
      <section className="project number-1">
        <h3 className="projectsH3">{proj.title}</h3>
        <p>
          {proj.description}
          <br/><br/>
          Technologies used:
          <br/><br/>
          {proj.Tech.map(techL => <img className="techLogos" alt={techL.name+"logo"} src={techL.url}/>)}
          </p>
        <img 
          src={proj.imageSource}
          alt={proj.imageAlt}
        />
        <div className="buttonContainer">
            <button
              type="button"
              className={`button ${proj.id}`}
              onClick={(e) => {e.preventDefault(); window.open(proj.projectRepo)}}>Repo
            </button>
            <button
              type="button"
              className={`button ${proj.id}`}
              onClick={(e) => {e.preventDefault(); window.open(proj.projectURL)}}
              >
              Web App
            </button>
        </div>
      </section>
  </div>
  )


  return (
    <>
    {renderProjects}
    </>
  )
}
