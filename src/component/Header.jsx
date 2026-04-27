import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = (props) => {
    return (
        <header>
            <div className="header-brand">
                <Logo />
                <nav>
                    <ul>
                        {props.menu.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;