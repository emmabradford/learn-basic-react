import React from 'react';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Navbar = () => {
    return(
        <nav className="nav-wraoer red darken-3">
            <div className="container">
                <a className="left brand-logo">Untamed shit post</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;