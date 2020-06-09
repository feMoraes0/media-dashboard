import React from 'react';
import './style.css';

const Header = () => (
  <header>
    <div>
      <p>Social Media Dashboard</p>
      <p>Total Followers: 23,004</p>
    </div>
    <div className='switcher-box'>
      <p className='switcher-label'>Dark mode</p>
      <div className='switcher'>
        <div className='switch' />
      </div>
    </div>
  </header>
);

export default Header;
