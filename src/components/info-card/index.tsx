import React from 'react';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import './style.css';

interface InfoCardProps {
  title: string,
  logo: string,
  total: string,
  increased: boolean,
  porcentage: number
}

const InfoCard: React.FC<InfoCardProps> = ({
  title, logo, total, increased, porcentage,
}) => (
  <div className='info-card'>
    <div className='info-card-section'>
      <p className='title'>{title}</p>
      <img src={logo} alt='company' />
    </div>
    <div className='info-card-section' style={{ alignItems: 'flex-end' }}>
      <p className='total'>{total}</p>
      <p className='increased' style={{ color: (increased) ? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)' }}>
        {' '}
        {(increased) ? <BsCaretUpFill size={18} /> : <BsCaretDownFill size={18} />}
        {' '}
        {porcentage}
        %
      </p>
    </div>
  </div>
);

export default InfoCard;
