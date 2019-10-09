import React from "react"
import Nav from "../Nav/Nav.js"
import Skills from "../Skills/Skills.js"
import Main from  "../Main/Main.js"
import Contact from "../Contact/Contact.js"
import Projects from "../Projects/Projects"
import "./Landing.css"


export default function Landing() {
    return(
        <div className="Landing_Outer" >
          <div className="landing-main">
      <Contact/>
      <Main/>
      <Projects/>
          </div>
          <div className="landing-footer"></div>
      <Skills/>
        </div>
    )
}