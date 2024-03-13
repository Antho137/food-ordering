import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='nav-container'>
                <NavLink to="/" className="nav-logo">
                     Quick One
                    <i className="fas fa-code"></i>
                </NavLink> 
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to="/" className="nav-links" onClick={handleClick}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/about" className="nav-links" onClick={handleClick}>About</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/services" className="nav-links" onClick={handleClick}>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/contact" className="nav-links" onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
                <div className='nav-icon' onClick={handleClick}>
                    {!click ? <FaBars className='fas fa-bars' /> : <FaTimes className='fas fa-times' />}
                </div>
            </div>
        </div>
    )
}

export default Header;