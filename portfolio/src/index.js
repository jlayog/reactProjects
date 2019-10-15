import React from 'react';
import ReactDOM from 'react-dom';
// Import BrowserRouter, Route, and Link
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Profile from './components/Profile';
import Articles from './components/Articles';
import About from './components/About';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
      
        {/* Set up Router */}
        <Route exact path='/' component={Projects} />
        <Route exact path='/articles' component={Articles} />
        <Route exact path='/about' component={About} />

      </div>
      <div>
        <Profile/>
      </div>
    </BrowserRouter>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
