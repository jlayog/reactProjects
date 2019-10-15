import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    return (
        <nav className="navbar bg-primary">
            <ul>
                <li>
                    <Link to="./Projects">Projects</Link>
                </li>
                <li>
                    <Link to="./Articles">Articles</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;