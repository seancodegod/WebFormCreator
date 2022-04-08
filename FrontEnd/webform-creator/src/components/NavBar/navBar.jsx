import React from "react";
import logo from './Alphalogo3.png';
import logoText from './AlphaText2.png';
import './navBar.css';

const NavBar = () => {
    return (
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark">
            <div class="logo">
                <a href="/"><img id="logoImage" src={logo} alt="logo" /></a>
                <a href="/"><img src={logoText} alt="logoText" /></a>
            </div>
            <div class="center">
                <a className="navbar-brand" href="/">
                    Home
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item pr-3">
                            <a className="navbar-brand" href="/web-form">Web Forms</a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="navbar-brand" href="/faq">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default NavBar;