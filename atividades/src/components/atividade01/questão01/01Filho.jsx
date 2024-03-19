import React from "react";

const Filho = (props) => {
  const { altura, peso } = props;

  const calcularIMC = (altura, peso) => {
    return peso / (altura * altura);
  };

  const imc = calcularIMC(altura, peso);

  const mensagemIMC = () => {
    if (imc < 18) {
      return <h3>Abaixo do peso</h3>;
    } else if (imc > 25) {
      return <h3>Acima do peso</h3>;
    } else {
      return <h3>Peso ideal</h3>;
    }
  };

  return (
    <div>
      <h2>Componente Filho</h2>
      <p>IMC: {imc.toFixed(2)}</p>
      {mensagemIMC()}
    </div>
  );
};

export default Filho;
