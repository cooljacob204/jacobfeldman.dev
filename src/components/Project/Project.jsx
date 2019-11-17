import React from 'react'
import { nullLiteral } from '@babel/types'

export default function Project(props) {
  return (
    <div>
      placeholder
    </div>
  )
}

Project.defaultProps = {
  name: 'Name Missing',
  description: 'Description Missing',
  url: null,
  source: 'Source Missing'
}