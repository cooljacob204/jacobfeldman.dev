import React, { useState, useEffect } from 'react'
import './Centerpiece.css'

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
      <img src='/centerpiece/background1.svg' />
      <div /> {/* background2 image, div image set by css themes */}
      <div /> {/* JF initials, div image set by css themes */}
      <a href='https://www.linkedin.com/in/jacobgfeld/' target='_blank' className='icon'>
        <div /> {/* boarder for image */}
        <div />  {/* linkedin icon, div image set by css themes */}
      </a>
      <a href='https://github.com/cooljacob204' target='_blank' className='icon'>
        <div /> {/* boarder for image */}
        <div />  {/* github icon, div image set by css themes */}
      </a>
      <img src='/centerpiece/me.png' alt='picture of me' />
    </div>
  </div>
}