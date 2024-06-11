import React from 'react'
// import { project } from '../../../assets/projects.js'

const ProjectCard = ({ name, description, liveLink, repoLink }) => {
  return (
          <div className="container">
             <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">Repository Link</a>
      </div>
    </div>
          </div>
  )
}

export default ProjectCard