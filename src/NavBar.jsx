import React from 'react';
import { Link } from 'react-router-dom'; 
import './NavBar.css';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
