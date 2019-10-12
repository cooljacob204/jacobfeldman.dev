import React from 'react'

export default function Github(props){
  return(
    <div style={{...props.style, display: 'inline-block'}}>
      <a href='https://github.com/cooljacob204' target="_blank" rel="noopener noreferrer">
        <img alt='github link' src={props.theme.logos.Github.img} height={props.height} width={props.width}></img>
      </a>
    </div>
  )
}

Github.defaultProps = {
  height: '36',
  width: '36'
}