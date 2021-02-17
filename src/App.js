import React, {useState, useEffect} from 'react';
import './App.css';
import DARK_THEME from './themes/darkTheme.js'
import LIGHT_THEME from './themes/lightTheme.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/Project/Project';
import { CURRENT_WEBSITE } from './constants/projects';
import Me from './components/Me/Me';
import Projects from './components/Project/Projects';

function App() {
  const [theme, setTheme] = useState(defaultTheme())
  document.body.style.backgroundColor = theme.App.body.style.backgroundColor

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
      return LIGHT_THEME
    }
  }

  useEffect(() => {
    var head = document.head
    var link = document.createElement("link")

    link.type = "text/css"
    link.rel = "stylesheet"
    link.href = theme.stylesheet

    head.appendChild(link)

    return () => head.removeChild(link)
  }, [theme])

  return (
    <div className="App">
      <div className='top'>
        <Project project={ CURRENT_WEBSITE }/>
      </div>
      <Me />
      <Projects />
    </div>
  );
}

export default App;
