import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SideBarData';
import './sidebar.css';
import { IconContext } from 'react-icons';
import logo from '../NavBar/Alphalogo3.png';
import logoText from '../NavBar/AlphaText2.png';

function SideBar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: '#c5b47c' }}>
                <div className='sidebar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineCloseCircle />
                            </Link>
                            <a href="/"><img className="logo-image" src={logo} alt="logo" /></a>
                        </li>
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
                        <li className="logo-text">
                            <img src={logoText} alt="logoText" />
                        </li>
                    </ul>
                </nav>

            </IconContext.Provider>
        </>
    );
}

export default SideBar;