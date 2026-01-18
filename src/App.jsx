// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Education from './components/education'; 
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education /> 
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;