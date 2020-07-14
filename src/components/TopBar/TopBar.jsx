import React from 'react'
import Github from '../logos/Github'
import Linkedin from '../logos/Linkedin'

import './TopBar.css';

export default function TopBar(props){
  return (
    <header className='header' style={{...props.theme.TopBar.header.style}}>
      <div style={{ display: 'flex' }}>
        <div style={{ fontSize: '1.9em', paddingLeft: '10px' }}>jacobfeldman.dev</div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row-reverse', marginLeft: '10px'}}>
        <div className='header__theme-toggle-wrapper custom-control custom-switch'>
          <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={props.theme.name === 'Dark Theme'} onChange={() => props.toggleTheme()}/>
          <label className="custom-control-label" htmlFor="customSwitch1">Dark Mode</label>
        </div>
        <Github style={{ padding: '2px', marginRight: '10px' }} theme={props.theme} />
        <Linkedin style={{ padding: '2px', marginRight: '10px' }} theme={props.theme} />
      </div>
    </header>
  )
}