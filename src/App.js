import React from "react";
import CardVideo from "./componentes/CardVideo";
import InfosUsuario from "./componentes/InfosUsuario"; // se não usar o default passar importar entre as ()
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <CardVideo />

        <footer>
          <h4>Oi eu sou o footer</h4>
        </footer>
      </div>
    </div>
  );
}
