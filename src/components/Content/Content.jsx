import React from 'react'
import Projects from '../Project/Projects'
import { MyPicture, MyBio, MyName } from '../Me/Me'

export default function Content(props) {
  return (
    <div className='content'>
      <MyPicture />
      <MyName />
      <MyBio />
      <Projects />
    </div>
  )
}