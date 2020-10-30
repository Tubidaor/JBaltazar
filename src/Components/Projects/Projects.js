import React from 'react'
import './Projects.css'

export default function Projects(props) {

  let displayProjects = props.projects

  let renderProjects = displayProjects.map(proj =>
    <div key={proj.id} className="projectsDiv">
      <section className="project number-1">
        <h3 className="projectsH3">{proj.title}</h3>
        <div className="projectCon">
          <h5 className="projectH5">
            Date Created:
              <span className="dateCreatedSpan"> {proj.date_completed}</span>
          </h5>
          <p className="projectsP">
            {proj.description}
            <br/><br/>
            Technologies used:
            <br/><br/>
            {
              proj.Tech.map(techL =>
                <img
                className="techLogos"
                alt={techL.name+"logo"}
                src={techL.url}
                />
                )
              }
            </p>
          <img 
            src={proj.imageSource}
            url={proj.imageSource}
            alt={proj.imageAlt}
            />
          <div className="buttonContainer">
              <button
                type="button"
                className={`button ${proj.id}`}
                onClick={(e) =>
                  {e.preventDefault(); window.open(proj.projectRepoClient)}
                }
                >
                Client Repo
              </button>
              { proj.projectRepoServer !== 'None' &&
                <button
                type="button"
                className={`button ${proj.id}`}
                onClick={(e) =>
                  {e.preventDefault(); window.open(proj.projectRepoServer)}
                }
                >
                  Server Repo
                </button>
              }
              <button
                type="button"
                className={`button ${proj.id}`}
                onClick={(e) =>
                  {e.preventDefault(); window.open(proj.projectURL)}
                }
                >
                Web App
              </button>
          </div>
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
