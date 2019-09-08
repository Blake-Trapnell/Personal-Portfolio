import React from 'react';
import Nav from "./Components/Nav/Nav.js"
import './App.css';
import Skills from './Components/Skills/Skills.js';
import Main from "./Components/Main/Main.js"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Skills/>
    </div>
  );
}

export default App;
