import React from "react";
import './navBar.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2 class="logo">Web Form Creator</h2>
            <div class="center">
                <a className="navbar-brand" href="/">
                    Home
                </a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item pr-3">
                            <a className="navbar-brand" href="/create-web-form">Create Web Form</a>
                        </li>
                        <li className="nav-item pr-3">
                            <a className="navbar-brand" href="/saved-web-forms">Saved Web Forms</a>
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