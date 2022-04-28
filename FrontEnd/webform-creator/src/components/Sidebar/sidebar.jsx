import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from './SideBarData';
import './sidebar.css';
import { IconContext } from 'react-icons';
import logo from '../NavBar/Alphalogo3.png';
import logoText from '../NavBar/AlphaText2.png';

function SideBar() {
    return (
        <>
            <IconContext.Provider value={{ color: '#c5b47c' }}>
                <nav className='nav-menu'>
                    <ul className='nav-menu-items'>
                        <div className="menu-options">
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </div>
                        <div className="logo-pos">
                            <img src={logo} alt="logo" />
                            <img src={logoText} alt="logoText" />
                        </div>
                    </ul>
                </nav>

            </IconContext.Provider>
        </>
    );
}

export default SideBar;