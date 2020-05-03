import React from 'react'
import Github from '../logos/Github'
import Linkedin from '../logos/Linkedin'
import './TopBar.css';

export default function TopBar(props){
  return (
    <header className='header' style={{...props.theme.TopBar.header.style}}>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '1.9em', paddingLeft: '10px' }}>jacobfeldman.dev</div>
        <div className='header__theme-toggle-wrapper'>
          <img 
            style={{ cursor: 'pointer' }} 
            src={props.theme.TopBar.header.icon.src} 
            size='36' width='36' 
            alt='Change theme'
            onClick={() => props.toggleTheme()}
          ></img>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row-reverse', marginLeft: '10px'}}>
        <Github style={{ padding: '2px', marginRight: '10px' }} theme={props.theme} />
        <Linkedin style={{ padding: '2px', marginRight: '10px' }} theme={props.theme} />
      </div>
    </header>
  )
}