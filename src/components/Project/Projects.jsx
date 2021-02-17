import React from 'react'
import PROJECTS from '../../constants/projects'
import './Projects.css';
import Project from './Project.jsx';

export default function Projects() {
  return (
    <div className='projects'>
      {PROJECTS.map((project, index) => <Project key={index} project={project}/>)}
    </div>
  )
}