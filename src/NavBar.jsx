import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css';
import logo from '../src/images/logo-black.png'

const NavBar = () => {
  return (
    <div className='navMain'>
                <img src={logo} className='logo'></img>

    <div className='navDiv'>

    <nav className='nav'>

      <ul>
        <li>
          <Link to="/" className="navLink">Home</Link>
        </li>
        <li>
          <Link to="/About" className="navLink">About</Link>
        </li>
        <li>
          <Link to="/Contact" className="navLink">Contact</Link>
        </li>
      </ul>
    </nav>
    </div>
    </div>
  );
};

export default NavBar;
