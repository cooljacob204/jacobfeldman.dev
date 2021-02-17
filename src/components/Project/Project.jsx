import React from 'react'
import './Project.css';

export default function Project({ project }) {
  return (
    <div className='project'>
      <a href={project.source} target='_blank'>
        <img src='Github.svg' />
        <div className='project__info'>
          <div>{project.name}</div>
          <div>{project.description}</div>
        </div>
      </a>
    </div>
  )
}

Project.defaultProps = {
  name: 'Name Missing',
  description: 'Description Missing',
  url: null,
  source: 'Source Missing'
}