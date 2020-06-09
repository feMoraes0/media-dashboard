import React from 'react';
import './style.css';
import ThemeSwitch from '../theme-switch';

const Header = () => (
  <header>
    <div>
      <p>Social Media Dashboard</p>
      <p>Total Followers: 23,004</p>
    </div>
    <div className='switcher-box'>
      <p className='switcher-label'>Dark mode</p>
      <ThemeSwitch />
    </div>
  </header>
);

export default Header;
