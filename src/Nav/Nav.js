import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'

export default class Nav extends Component {
    render() {
        return (
            <section className="hero is-dark is-fullheight is-bold">
                <div className="hero-head">
                    <nav className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                <div className="navbar-item">
                                    <h1 className="title is-left">Jonathan Riggs<br/>Full Stack Software Developer</h1>
                                </div>
                                <span className="navbar-burger burger" data-target="navbarMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navbarMenu" className="navbar-menu">
                                <div className="navbar-end">
                                <div className="tabs is-right">
                                    <ul>
                                        <li><Link to="/Home">Home</Link></li>
                                        <li><Link to="/AboutMe">About Me</Link></li>
                                        <li><Link to="/Projects">Projects</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                        "Any fool can write code that a computer can understand,<br/>
                        Good programmers write code that humans can understand."
                        </h1>
                        <h2 className="subtitle">
                        Martin Fowler
                        </h2>
                    </div>
                </div>
                </section>
        )
    }
}