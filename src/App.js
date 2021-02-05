import './App.css';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Blog from './components/Blog';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
        <Navbar/>  
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Blog" component={Blog}/>
            <Route exact path="/Contact" component={Contact}/>
          </Switch>
        </div> 
    </div>
  );
}

export default App;
