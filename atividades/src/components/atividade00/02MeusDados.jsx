import React from "react";

export const MeusDadosProps1 = ({ name, course, institution }) => {
  return (
    <div className="card">
      <h1>Meus Dados</h1>
      <h1>Nome Completo: {name}</h1>
      <h1>{course}</h1>
      <h1>{institution}</h1>
    </div>
  );
};
