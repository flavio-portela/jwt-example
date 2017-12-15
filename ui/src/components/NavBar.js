import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="nav">
        <Link className="nav-link active" to="/">JWT Example</Link>
        <Link className="nav-link" to="/login">Login</Link>
    </nav>
);

export default NavBar;