import React from "react";
import "./Bonus.css"; // Este é o arquivo CSS onde você vai definir todos os seus estilos
import imgbonus from "../../assets/cadastro.jpeg";
import HeaderLogo from "../Home/headerLogo";
import { FaTelegramPlane, FaRegListAlt, FaDownload } from "react-icons/fa"; // Importando ícones específicos

const Bonus = () => {
  return (
    <div className="bonus-page">
      <div className="bonus-content">
        <HeaderLogo />

        <div className="bonus-image">
          <img src={imgbonus} alt="Bônus" />
        </div>

        <div className="bonus-buttons">
          <button onClick={() => window.open("link-do-telegram", "_blank")}>
            <FaTelegramPlane /> Entrar no Canal do Telegram
          </button>
          <button onClick={() => window.open("link-de-cadastro", "_blank")}>
            <FaRegListAlt /> Cadastre-se na Plataforma
          </button>
          <button
            onClick={() => window.open("link-para-download-do-pdf", "_blank")}
          >
            <FaDownload /> Baixar PDF de Bônus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bonus;
