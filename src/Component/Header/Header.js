import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='nav-time'>
            <div className='logo'>
                <h2>QuizContest</h2>
            </div>
            <div className='nav-links'>
                <Link to='/home'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/account'>Account</Link>
            </div>
        </nav>
    );
};

export default Header;