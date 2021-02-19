import React, {useState, useEffect} from 'react';
import './App.css';
import DARK_THEME from './themes/darkTheme.js'
import LIGHT_THEME from './themes/lightTheme.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project/Project';
import { CURRENT_WEBSITE } from './constants/projects';
import Me from './components/Centerpiece/Centerpiece';
import Projects from './components/Project/Projects';

function App() {
  const [theme, setTheme] = useState(defaultTheme())

  function toggleTheme(){
    if (theme === DARK_THEME) {
      setTheme(LIGHT_THEME)
    } else {
      setTheme(DARK_THEME)
    }
  }

  function defaultTheme(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
      return LIGHT_THEME
    } else {
      return DARK_THEME
    }
  }

  return (
    <div className="App" theme={theme.name}>
      <div className='top'>
        <Project project={ CURRENT_WEBSITE }/>
      </div>
      <Me />
      <Projects />
      <div className='theme_select' onClick={() => toggleTheme()}>
        <div>Dark Mode</div>
        <div>Light Mode</div>
      </div>
    </div>
  );
}

export default App;
