import React from 'react'

export default function Project({ project }) {
  return (
    <div className='project'>
      <h4>{project.name}</h4>
      {project.url && <p><b>Website:</b> <a href={`https://${project.url}`} target='_blank'>{project.url}</a></p>}
      <p><b>Description: </b>{project.description}</p>
      <p><b>Source: </b><a href={`https://github.com/${project.source}`} target='_blank'>{project.source}</a></p>
    </div>
  )
}

Project.defaultProps = {
  name: 'Name Missing',
  description: 'Description Missing',
  url: null,
  source: 'Source Missing'
}