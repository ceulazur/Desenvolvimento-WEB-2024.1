import React from 'react';
import { World, Arena, Hero, Enemy } from './03Batalha';

const App3 = () => {
  return (
    <div>
      <World>
        <Arena arena="NGL">
          <Hero name="KILLUA" img="hero.png" />
          <Enemy name="FEITAN" img="enemy3.png" />
        </Arena>
        <Arena arena="REPUBLICA ROKARI">
          <Hero name="GON" img="hero2.png" />
          <Enemy name="HISOKA" img="enemy2.png" />
        </Arena>
        <Arena arena="REPUBLICA HASS">
          <Hero name="KURAPIKA" img="hero1.png" />
          <Enemy name="CHROLLO LUCIFER" img="enemy4.png" />
        </Arena>
      </World>
    </div>
  );
};

export default App3;
