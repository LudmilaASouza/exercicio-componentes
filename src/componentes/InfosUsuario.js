import React from "react";
import foto from "../img/fotoPerfil.jpg";
import "./InfosUsuarioStyle.css";

const InfosUsuario = () => {
  //export default function InfosUsuario () {}

  const autor = "Ludmila Souza";

  return (
    <div className="container">
      <img id="perfil-imagem" src={foto} alt="" align="left" />
      <p align="rigth">{autor}</p>
    </div>
  );
};

export default InfosUsuario;
