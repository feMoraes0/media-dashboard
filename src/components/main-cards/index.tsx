import React from 'react';
import './style.css';

interface MainCardProps {
  imageTitle: string,
  textTitle: string,
  counter: string,
  textCounter: string,
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
      <div className='footer'>
        <p>{footerText}</p>
      </div>
    </div>
  </div>
);

export default MainCard;
