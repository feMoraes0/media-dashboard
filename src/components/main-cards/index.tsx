import React from 'react';
import './style.css';

import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

interface MainCardProps {
  imageTitle: string,
  textTitle: string,
  counter: string,
  textCounter: string,
  increased: boolean,
  footerText: string,
  borderColor: string
}

const MainCard: React.FC<MainCardProps> = ({
  imageTitle,
  textTitle,
  counter,
  textCounter,
  footerText,
  borderColor,
  increased,
}) => (
  <div className='main-card' style={{ background: borderColor }}>
    <div className='main-card-body'>
      <div className='title'>
        <img src={imageTitle} alt='facebook' />
        <p>{textTitle}</p>
      </div>
      <div className='data'>
        <p>{counter}</p>
        <p>{textCounter}</p>
      </div>
      <div
        className='footer'
        style={{ color: (increased) ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)' }}
      >
        <p>
          {(increased) ? <BsCaretUpFill size={18} /> : <BsCaretDownFill size={18} />}
          {' '}
          {footerText}
        </p>
      </div>
    </div>
  </div>
);

export default MainCard;
