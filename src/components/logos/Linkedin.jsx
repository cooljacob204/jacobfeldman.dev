import React from 'react'

export default function Linkedin(props) {
  return (
    <div style={{ ...props.style, display: 'inline-block' }}>
      <a href='https://www.linkedin.com/in/jacobgfeld/' target="_blank" rel="noopener noreferrer">
        <img alt='github link' src={props.theme.logos.Linkedin.img} height={props.height} width={props.width}></img>
      </a>
    </div>
  )
}

Linkedin.defaultProps = {
  height: '36',
  width: '36'
}