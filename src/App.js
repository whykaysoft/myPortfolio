import './App.css';
import AboutPage from './components/About/AboutPage';
import Contact from './components/Contact/Contact';
import HomePage from './components/Home/HomePage';
import Services from './components/MyServices/Services';
import Navbar from './components/Navbar';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <Project/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
