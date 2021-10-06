
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  return (
    <main className="App">
      <Landing />
      <Navbar />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
