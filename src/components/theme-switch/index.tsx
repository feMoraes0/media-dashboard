import React, { useState } from 'react';
import './style.css';

interface Theme {
  mainBgColor: string,
  secondaryBgColor: string,
  cardBg: string,
  secondaryText: string,
  mainText: string,
}

const ThemeSwitch = () => {
  const darkTheme: Theme = {
    mainBgColor: 'hsl(230, 17%, 14%)',
    secondaryBgColor: 'hsl(232, 19%, 15%)',
    cardBg: 'hsl(228, 28%, 20%)',
    secondaryText: 'hsl(228, 34%, 66%)',
    mainText: 'hsl(0, 0%, 100%)',
  };

  const lightTheme: Theme = {
    mainBgColor: 'hsl(0, 0%, 100%)',
    secondaryBgColor: 'hsl(225, 100%, 98%)',
    cardBg: 'hsl(227, 47%, 96%)',
    mainText: 'hsl(230, 17%, 14%)',
    secondaryText: 'hsl(228, 34%, 66%)',
  };

  const [currentTheme, setCurrentTheme] = useState<Theme>(darkTheme);

  function updateDOMTheme(html: HTMLHtmlElement, theme: Object): void {
    Object.keys(theme).map((element) => {
      html.style.setProperty(`--${element}`, theme[element]);
      return null;
    });
  }

  function objectsCompare(obj1: Object, obj2: Object): boolean {
    return (JSON.stringify(obj1) === JSON.stringify(obj2));
  }

  function changeTheme(): void {
    const html: HTMLHtmlElement = document.querySelector('html');
    updateDOMTheme(html, currentTheme);
    setCurrentTheme(objectsCompare(currentTheme, lightTheme) ? darkTheme : lightTheme);
  }

  return (
    <button
      type='button'
      className='switcher'
      onClick={changeTheme}
    >
      <div
        className='switch'
        style={{
          transform: objectsCompare(currentTheme, lightTheme) ? 'translateX(100%)' : 'translateX(0%)',
        }}
      />
    </button>
  );
};

export default ThemeSwitch;
