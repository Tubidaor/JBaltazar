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
          Technologies used: {proj.Tech}
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
