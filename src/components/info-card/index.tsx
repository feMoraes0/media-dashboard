import React from 'react';
import './style.css';

interface InfoCardProps {
  title: string,
  logo: string,
  total: string,
  increased: string
}

const InfoCard: React.FC<InfoCardProps> = ({
  title, logo, total, increased,
}) => (
  <div className='info-card'>
    <div className='info-card-section'>
      <p className='title'>{title}</p>
      <img src={logo} alt='company' />
    </div>
    <div className='info-card-section' style={{ alignItems: 'flex-end' }}>
      <p className='total'>{total}</p>
      <p className='increased'>{increased}</p>
    </div>
  </div>
);

export default InfoCard;
