import React from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

export default function Projects(props) {
  
  let displayProjects = props.projects
  console.log(displayProjects)

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
          <Link to={proj.projectRepo}>
            <button
              type="button"
              className={`button ${proj.id}`}
              >
              Repo
            </button>
          </Link>
          <Link to={proj.projectURL}>
            <button
              type="button"
              className={`button ${proj.id}`}
              >
              Web App
            </button>
          </Link>
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