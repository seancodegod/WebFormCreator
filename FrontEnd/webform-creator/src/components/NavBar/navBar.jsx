import React from "react";
import logo from './Alphalogo3.png';
import logoText from './AlphaText2.png';
import homePageIcon from './homepageicon.png';
import './navBar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { getUser } from "../../utils/getUser.js";

class NavBar extends React.Component {
    state = {
        userName: "",
        userPicture: ""
    }

    async componentDidMount() {
        const { data: userData } = await getUser();
        const userName = userData.firstName + ' ' + userData.lastName;
        this.setState({ userName });
    }

    render() {
        return (
            <>
                <div className="logo">
                    <a href="/"><img id="logoImage" src={homePageIcon} width="100px" height="100px" alt="logo" /></a>
                </div>
                <nav id="nav" className="navbar nav-custom navbar-expand-lg navbar-dark">
                    <div className="list-elements">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item pr-3">
                                    <a className="navbar-brand" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item pr-3">
                                    <a className="navbar-brand">|</a>
                                </li>
                                <li className="nav-item pr-3">
                                    <a className="navbar-brand" href="/faq">FAQ</a>
                                </li>
                                <li className="nav-item pr-3">
                                    <a className="navbar-brand">|</a>
                                </li>
                                <li className="nav-item pr-3">
                                    <a className="navbar-brand" href="/settings">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="user">
                        <a id="user-name" className="navbar-brand">{this.state.userName}</a>
                        <a className="navbar-brand"><AiIcons.AiOutlineUser /></a>
                    </div>
                </nav >
            </>
        );
    }
};

export default NavBar;