import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div>
        <nav className='navbar navbar-expand-md bg-dark navbar-dark container-fluid'>
          <Link to="/" className="navbar-brand">
            <img src="https://thebulletin.org/wp-content/uploads/2021/01/845px-Atomwaffen_Division_logo.svg.png" alt="Atomwaffen Division logo" style={{ maxWidth: '100px', maxHeight: '50px' }} />
          </Link>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Homepage</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about" className='nav-link'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact" className='nav-link'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
