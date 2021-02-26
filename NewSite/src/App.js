import './App.css';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [projects] = useState([
    {
      id: 1,
      title: 'Project #1',
      tag: '#javascript',   
    },
    {
      id: 2,
      title: 'Project #2',
      tag: '#javascript',   
    },
    {
      id: 3,
      title: 'Project #3',
      tag: '#javascript',   
    },
])
  return (
    <div className="App">
      <Landing />
      <Navbar />
      <Projects projects={projects} />
      <Footer />
    </div>
  );
}

export default App;
