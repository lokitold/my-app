import { Link } from 'react-router-dom'
import React from 'react';
import '../css/menu.css';

const Header = () => (
    <header className="left">
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
                <li><Link to='/list'>List</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header;
