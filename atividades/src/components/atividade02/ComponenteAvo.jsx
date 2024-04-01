
import React, { createContext, useState } from "react";
import ComponenteFilho from "./ComponenteFilho";

export const PokemonContext = createContext();

const ComponenteAvo = () => {
  const [numeroPokemon, setNumeroPokemon] = useState(1);

  return (
    <PokemonContext.Provider value={{ numeroPokemon, setNumeroPokemon }}>
      <ComponenteFilho />
    </PokemonContext.Provider>
  );
};

export default ComponenteAvo;
