import React from 'react'

export function MyPicture({ style }) {
  return (
    <img src='me.jpg' alt='Jacob' style={style} className='me' />
  )
}

export function MyBio(){
  return(
    <div className='bio'>
      <h3>Primary Languages</h3>
      <p>Ruby, Javascript, Python</p>
      <h3>Frameworks and Technologies</h3>
      <p>Rails, React, Node.js, Git, RVM, Linux, Windows, Docker, Kubernetes, Gitlab, Digital Ocean, Atlassian, Postman, Heroku, Apache Airflow</p>
      <h3>Interests</h3>
      <p>Full Stack, Backend, DevOps/SRE, Code Review, Test Driven Development</p>
    </div>
  )
}

export function MyName(){
  return(
    <h1 className='full-name'>Jacob Feldman</h1>
  )
}
