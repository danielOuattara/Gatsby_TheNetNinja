import React from 'react';
import { Link } from 'gatsby';

export default function Navbar() {
    return (
        <div className="links">
            <h1>Web Warrior</h1>
            <nav>
                <Link to="/">Home | </Link>
                <Link to="/about">About | </Link>
                <Link to="/projects">Projects Portfolio</Link>
            </nav>
        </div>
    );
}

