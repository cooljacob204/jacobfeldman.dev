import React, { useState, useEffect } from 'react'
import './Me.css'

export default function Me(){
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const calculateScale = () => {
    if (width < 864) {
      // return width * 0.0011574074
      return Math.max((width / 864), .65)
    }

    return 1
  }

  return <div className='me'>
    <div className='centerpiece' style={{ transform: `scale(${calculateScale()})` }}>
      <img src='/centerpiece/background1.svg' alt='background 1' />
      <img src='/centerpiece/background2.svg' alt='background 2' />
      <img src='/centerpiece/JF.png' alt='initials' />
      <a href='https://www.linkedin.com/in/jacobgfeld/' target='_blank'>
        <img src='/centerpiece/linkedin-small-white.svg' alt='linkedin' />
      </a>
      <a href='https://github.com/cooljacob204' target='_blank'>
        <img src='/centerpiece/github-small-white.svg' alt='github' />
      </a>
      <img src='/centerpiece/me.png' alt='me' />
    </div>
  </div>
}