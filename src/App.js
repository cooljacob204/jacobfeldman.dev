import React, {useState} from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import DARK_THEME from './themes/darkTheme'
import LIGHT_THEME from './themes/lightTheme'

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

  return (
    <div style={{...theme.App.div.style}} className="App">
      <TopBar theme={theme} />
      <button onClick={() => {toggleTheme()}}>test</button>
    </div>
  );
}

export default App;
