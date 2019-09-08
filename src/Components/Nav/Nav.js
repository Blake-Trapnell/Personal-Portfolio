import React, { Component } from "react"
import "./Nav.css"
import Background from '../../Wb2.jpg';
import Skills from "../Skills/Skills"
import { TimelineMax, TweenLite, Draggable, Power3, Bounce } from "gsap/all";


export default class Nav extends Component {
    componentDidMount() {
        Draggable.create("#Throwable", {
            type: "x,y",
            edgeResistance: 0.15,
            bounds: ".App",
            throwProps: true,
            onDrag: function () {
                if (this.hitTest(".Skills_Logo_JavaScript", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_JavaScript"), 0.3, { opacity: 1, scale: 1 });
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_JavaScript"), 0.3, { opacity: 0, scale: 0 });
                }
                if (this.hitTest(".Skills_Logo_Html5", "100%" )) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Html5"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Html5"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Css3", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Css3"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Css3"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_React", "100%" )) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_React"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_React"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Heroku", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Heroku"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Heroku"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Node", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Node"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Node"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_PS", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_PS"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_PS"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".Skills_Logo_Postgres", "100%")) {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Postgres"), 0.3, { opacity: 1, scale: 1 })
                }
                else {
                    TweenLite.to(document.getElementsByClassName("Skills_Logo_Postgres"), 0.3, { opacity: 0, scale: 0 })
                }
                if (this.hitTest(".main_h1", "100%" )) {
                    TweenLite.to(document.getElementsByClassName('main_h1'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut})
                }
                else {
                    TweenLite.to(document.getElementsByClassName('main_h1'), .2, { opacity: 0, })
                }
                if (this.hitTest(".main_h6","100%")) {
                    TweenLite.to(document.getElementsByClassName('main_h6'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('main_h6'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Top","100%")) {
                    TweenLite.to(document.getElementsByClassName("Main_Navigation_Top"), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Top'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Left","100%")) {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Left'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Left'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Right","100%")) {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Right'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Right'), .2, { opacity: 0, })
                }
                if (this.hitTest(".Main_Navigation_Bottom","100%")) {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Bottom'), .5, { opacity: 1, scale: 1, ease: Bounce.easeOut })
                }
                else {
                    TweenLite.to(document.getElementsByClassName('Main_Navigation_Bottom'), .2, { opacity: 0, })
                }
            }

        });
    }
    render() {
        return (
            <div>
                <div className="App_Background" src={Background} alt="Background">

                    <div id="Throwable" className="Nav_Header">

                    </div>
                </div>
            </div>
        )
    }
}