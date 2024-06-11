import React from 'react'
import ProjectCard from './ProjectCard/ProjectCard.jsx'

// import { project } from '../../assets/'
import { projects } from '../../assets/projects.js'


const Project = () => {
  return (
    <div>
           {

           projects.map((item,index) => {
            <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            liveLink={project.liveLink}
            repoLink={project.repoLink}
          />
            })
           } 
    </div>
  )
}

export default Project