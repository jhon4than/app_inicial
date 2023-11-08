import React from "react";
import "./Home.css"; // Importar o CSS correspondente
import LogoMain from "../../assets/logoHome-remo.png";
import fundo from "../../assets/imageHome.jpg";
import videoSrc from '../../assets/tutorial.mp4';

function Home() {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${fundo})` }} // Corrigido para usar a sintaxe correta
    >
      <div className="scrollContainer">
        <div className="container">
          <img
            src={LogoMain}
            className="centerImage"
            alt="Logo"
          />

          <div className="textContainer">
            <h1 className="welcomeText">Bem Vindo ao Hacker Gold</h1>
            <p className="descriptionText">
              O seu melhor aplicativo de sinais da atualidade!
            </p>
            <p className="videoPrompt">▼ Assista o vídeo tutorial abaixo ▼</p>
          </div>
          <video src={videoSrc} className="video" controls />
        </div>
      </div>
    </div>
  );
}

export default Home;
