import React from "react";
import {
  PlacaMae as PCPlacaMae,
  Memoria as PCMemoria,
  PlacaDeVideo as PCPlacaDeVideo,
} from "./components/atividade01/02MeuPC";

const App2 = () => {
  return (
    <div>
      <h1>Meu Computador</h1>
      <PCPlacaMae nome="Placa Mãe XYZ" preco={399} />
      <PCMemoria nome="Memória RAM 8GB" preco={199} />
      <PCPlacaDeVideo nome="Placa de Vídeo ABC" preco={469} />
    </div>
  );
};

export default App2;
