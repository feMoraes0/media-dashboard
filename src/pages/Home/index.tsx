import React from 'react';
import './style.css';

import Header from '../../components/header';
import MainCard from '../../components/main-card';
import InfoCard from '../../components/info-card';

import facebook from '../../assets/icon-facebook.svg';
import instagram from '../../assets/icon-instagram.svg';
import twitter from '../../assets/icon-twitter.svg';
import youtube from '../../assets/icon-youtube.svg';

const Home = () => (
  <div className='app'>
    <Header />
    <main>
      <section className='cards-grid'>
        <MainCard
          imageTitle={facebook}
          textTitle='@nathanf'
          counter='1987'
          textCounter='followers'
          footerText='12 today'
          increased
          borderColor='hsl(208, 92%, 53%)'
        />
        <MainCard
          imageTitle={twitter}
          textTitle='@nathanf'
          counter='1044'
          textCounter='followers'
          footerText='99 today'
          increased
          borderColor='hsl(203, 89%, 53%)'
        />
        <MainCard
          imageTitle={instagram}
          textTitle='@realnathanf'
          counter='11k'
          textCounter='followers'
          footerText='1099 today'
          increased
          borderColor='linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))'
        />
        <MainCard
          imageTitle={youtube}
          textTitle='Nathan F.'
          counter='8239'
          textCounter='subscribers'
          footerText='144 today'
          increased={false}
          borderColor='hsl(348, 97%, 39%)'
        />
      </section>
      <h2 className='section-title'>Overview - Today</h2>
      <section className='cards-grid'>
        <InfoCard
          title='Page Views'
          logo={facebook}
          total='87'
          increased
          porcentage={3}
        />
        <InfoCard
          title='Likes'
          logo={facebook}
          total='52'
          increased={false}
          porcentage={2}
        />
        <InfoCard
          title='Likes'
          logo={instagram}
          total='5462'
          increased
          porcentage={2257}
        />
        <InfoCard
          title='Profile Views'
          logo={instagram}
          total='52k'
          increased
          porcentage={1375}
        />
        <InfoCard
          title='Retweets'
          logo={twitter}
          total='117'
          increased
          porcentage={303}
        />
        <InfoCard
          title='Likes'
          logo={twitter}
          total='507'
          increased
          porcentage={553}
        />
        <InfoCard
          title='Likes'
          logo={youtube}
          total='107'
          increased={false}
          porcentage={19}
        />
        <InfoCard
          title='Total Views'
          logo={youtube}
          total='1407'
          increased={false}
          porcentage={12}
        />
      </section>
    </main>
  </div>
);
export default Home;
