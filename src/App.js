import React from 'react';
import {withRouter} from "react-router-dom"
import Routes from "./Routes.js"
import Nav from "./Components/Nav/Nav.js"
import './App.css';
import Skills from './Components/Skills/Skills.js';
import Main from "./Components/Main/Main.js"
import Contact from "./Components/Contact/Contact.js"

function App() {
  return (
    <div className="App">
      {Routes}
    </div>
  );
}

export default withRouter(App);
