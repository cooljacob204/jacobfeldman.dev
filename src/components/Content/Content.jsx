import React from 'react'
import Project from '../Project/Project'
import { MyPicture, MyBio, MyName } from '../Me/Me'

export default function Content(props) {
  return (
    <div className='content'>
      <MyPicture />
      <MyName />
      <MyBio />
    </div>
  )
}