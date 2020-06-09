import React from 'react';
import './App.css';
import Header from './components/header';

import facebook from './assets/icon-facebook.svg';
import instagram from './assets/icon-instagram.svg';
import twitter from './assets/icon-twitter.svg';
import youtube from './assets/icon-youtube.svg';
import MainCard from './components/main-cards';

const App = () => (
  <div className='app'>
    <Header />
    <main>
      <section className='main-cards'>
        <MainCard
          imageTitle={facebook}
          textTitle='@nathanf'
          counter='1987'
          textCounter='followers'
          footerText='12 today'
          borderColor='hsl(208, 92%, 53%)'
        />
        <MainCard
          imageTitle={twitter}
          textTitle='@nathanf'
          counter='1044'
          textCounter='followers'
          footerText='99 today'
          borderColor='hsl(203, 89%, 53%)'
        />
        <MainCard
          imageTitle={instagram}
          textTitle='@realnathanf'
          counter='11k'
          textCounter='followers'
          footerText='1099 today'
          borderColor='linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))'
        />
        <MainCard
          imageTitle={youtube}
          textTitle='Nathan F.'
          counter='8239'
          textCounter='subscribers'
          footerText='144 today'
          borderColor='hsl(348, 97%, 39%)'
        />
      </section>
    </main>
  </div>
);

export default App;
