import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import About from './components/About';
import Home from './components/Home';

function App() {

  const [darkMode, setDarkMode] = React.useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode))
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme()

    if(isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true
    } else {
      return false
    }

  }

  function getPrefColorScheme() {
    if(!window.matchMedia) return;
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar/>
          <nav>
            <div className="toggle-container">
              <span style={{color: darkMode ? 'grey' : 'yellow' }}><i class="fas fa-lightbulb"></i></span>
              <span className="toggle">
                <input
                  checked={darkMode}
                  onChange={() => setDarkMode(prevMode => 
                    !prevMode
                    )}
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox"></label>
              </span>
              <span style={{color: darkMode ? 'slateblue' : 'grey' }}><i class="fas fa-lightbulb"></i></span>
            </div>
          </nav>  
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
          </Switch>
        </div> 
      </div>
    
    
  )
}

export default App;
