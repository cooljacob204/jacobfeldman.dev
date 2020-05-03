import React, {useState, useEffect} from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Content from './components/Content/Content';
import DARK_THEME from './themes/darkTheme.js'
import LIGHT_THEME from './themes/lightTheme.js'

function App() {
  const [theme, setTheme] = useState(DARK_THEME)
  document.body.style.backgroundColor = theme.App.body.style.backgroundColor

  function toggleTheme(){
    if (theme === DARK_THEME) {
      setTheme(LIGHT_THEME)
    } else {
      setTheme(DARK_THEME)
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
    <div style={{...theme.App.div.style}} className="App">
      <TopBar theme={theme} toggleTheme={toggleTheme}/>
      <Content theme={theme} />
    </div>
  );
}

export default App;
