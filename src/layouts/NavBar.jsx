import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact Us</Link></li>
      <li><Link to="/try-demo">Try Demo</Link></li>
    </ul>
  </nav>
);

export default NavBar;
