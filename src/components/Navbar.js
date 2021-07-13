import React from 'react';

const Navbar = () => {
    return(
        <nav className="nav-wraoer red darken-3">
            <div className="container">
                <a className="left brand-logo">Untamed shit post</a>
                <ul className="right">
                    <li><a href="/">Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;