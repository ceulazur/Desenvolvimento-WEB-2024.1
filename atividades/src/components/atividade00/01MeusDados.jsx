import React from 'react';
import './01MeusDados.css';

export function MeusDados() {
  return (
    <div>
      <h1 >Meus Dados</h1>
      <h1>Nome Completo: Jhordanna Gonçalves de Oliveira</h1>
      <h1>Engenharia de Software</h1>
      <h1>UFC - Campus Quixadá</h1>
    </div>
  );
};


export const MeusDados1 = () => {
  return (
    <div>
      <h1>Meus Dados</h1>
      <h1>Nome Completo: Jhordanna Gonçalves de Oliveira</h1>
      <h1>Engenharia de Software</h1>
      <h1>UFC - Campus Quixadá</h1>
    </div>
  );
};

export const MeusDados2 = () => (
    <div >
      <h1>Meus Dados</h1>
      <h1>Nome Completo: Jhordanna Gonçalves de Oliveira</h1>
      <h1>Engenharia de Software</h1>
      <h1>UFC - Campus Quixadá</h1>
    </div>
  );

export class MeusDados3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Meus Dados</h1>
        <h1>Nome Completo: Jhordanna Gonçalves de Oliveira</h1>
        <h1>Engenharia de Software</h1>
        <h1>UFC - Campus Quixadá</h1>
      </div>
    );
  }
}