import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
        </nav>
    );
};
