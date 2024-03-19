
import React from 'react';

const Hero = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="Hero" />
    </div>
  );
};

const Enemy = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="Enemy" />
    </div>
  );
};

const Arena = ({ arena, children }) => {
  return (
    <div>
      <h1>{arena}</h1>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { arena });
      })}
    </div>
  );
};

const World = (props) => {
  return (
    <div>
      <h1>World</h1>
      {props.children}
    </div>
  );
};

export { Hero, Enemy, Arena, World };

