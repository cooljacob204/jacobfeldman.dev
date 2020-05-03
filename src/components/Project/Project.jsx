import React from 'react'

export default function Project({ project }) {
  return (
    <div className='project'>
      <h4>{project.name}</h4>
      {project.url && <p>Website: {project.url}</p>}
      <p>Description: {project.description}</p>
      <p>Source: <a href={project.source}>{project.source}</a></p>
    </div>
  )
}

Project.defaultProps = {
  name: 'Name Missing',
  description: 'Description Missing',
  url: null,
  source: 'Source Missing'
}