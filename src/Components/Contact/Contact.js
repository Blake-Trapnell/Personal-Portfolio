import React from "react"
import {Link} from "react-router-dom"
import './Contact.css'

export default function Contact() {
    return (
        <div className="Contact_Outer">

            <div className="Contact_Profile_image"></div>
            <div className="Contact_Links_Container">
                <h3 style={{textShadow: "0 0 10px rgb(72, 255, 0)"}} className="Contact_Links">Email: <p>
                    BlakeTrapnell.Dev@Gmail.com
                </p>
                </h3>
                <a href="https://github.com/Blake-Trapnell" >
                    <h3 style={{textShadow: "0 0 10px rgb(255, 145, 0)"}} className="Contact_Links">GitProfile: <p>
                        https://github.com/Blake-Trapnell
                </p>
                    </h3>
                </a>
                <a href="https://www.linkedin.com/in/blake-trapnell-0b526495/">
                    <h3 className="Contact_Links">LinkedIn Profile: https://www.linkedin.com/in/blake-trapnell-0b526495/</h3>
                </a>
                    <Link to="/About">
                    <h1 style={{textShadow: "0 0 10px rgb(0, 4, 255)"}} className="Contact_Links Aboutme">About me</h1>
                    </Link>

            </div>
        </div>
    )
}