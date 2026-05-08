import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="header-brand">
                <Logo />
                <nav className="desktop-nav">
                    <ul>
                        {props.menu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <nav>
                    <ul>
                        {props.menu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} onClick={closeMenu}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;