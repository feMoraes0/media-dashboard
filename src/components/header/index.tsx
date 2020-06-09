import React from 'react';
import './style.css';
import ThemeSwitch from '../theme-switch';

const Header = () => (
  <header>
    <div>
      <h2>Social Media Dashboard</h2>
      <h4>Total Followers: 23,004</h4>
    </div>
    <div className='switcher-box'>
      <p className='switcher-label'>Dark mode</p>
      <ThemeSwitch />
    </div>
  </header>
);

export default Header;
