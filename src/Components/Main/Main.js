import React from "react"
import "./Main.css"

export default function Main() {
    return (
        <div className="main_info">
            <div className="Main_Name">
                <h1 className="main_h1">Blake Trapnell</h1>
            </div>
            <div className="Main_Web">
                <h6 className="main_h6">Full Stack Web Developer</h6>
            </div>
            <div className="Main_Navigation">
                <div className="Main_Navigation_Top">
                    <h4>About Me</h4>
                </div>
                <div className="Main_Navigation_LeftRight">
                    <h4 className="Main_Navigation_Left">⇦ Contact</h4>
                    <h4 className="Main_Navigation_Right">Projects ⇨</h4>
                </div>
                <div className="Main_Navigation_Bottom">
                    <h4>Skills <p>⇩</p></h4>
                </div>
            </div>
        </div>

    )
}