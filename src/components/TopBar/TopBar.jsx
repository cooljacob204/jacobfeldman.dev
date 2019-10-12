import React from 'react'
import Github from '../logos/Github'
import Linkedin from '../logos/Linkedin'

export default function TopBar(props){
  return (
    <header style={{ display: 'grid', gridTemplateColumns: '50% 50%', width: '100%', height: '40px', ...props.theme.TopBar.header.style}}>
      <div style={{ display: 'flex' }}>
        <div style={{fontSize: '1.9em', paddingLeft: '10px'}}>jacobfeldman.dev</div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row-reverse' }}>
        <Github style={{ padding: '2px', marginRight: '10px' }} theme={props.theme} />
        <Linkedin style={{ padding: '2px', marginRight: '10px' }} theme={props.theme} />
      </div>
    </header>
  )
}