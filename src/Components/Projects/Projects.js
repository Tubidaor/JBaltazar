import React from 'react'
import './Projects.css'

export default function Projects(props) {

  let displayProjects = props.projects

  let renderProjects = displayProjects.map(proj =>
    <div key={proj.id} className="projectsDiv">
      <section className="project number-1">
        <header className="projectsH2Con">
          <h2 className="projectsH2">{proj.title}</h2>
        </header>
        <div className="projectCon">
          <p className="projectP3">
            Date Created:
              <span className="dateCreatedSpan"> {proj.date_completed}</span>
          </p>
          <br/>
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
