import React from "react";
import { useNavigate } from "react-router-dom";
import "./Games.css"; // Importe seu arquivo CSS
// Importando imagens
import cardsImg from "../../imgs/cards.jpeg";
import minesImg from "../../imgs/mines.jpeg";
import fortuneImg from "../../imgs/fortune.jpg";
import bacImg from "../../imgs/bacbo.jpg";
import aviatorImg from "../../imgs/aviator.jpeg";
import backgroundImg from "../../assets/img03.png";
import HeaderLogo from "../Home/headerLogo";

function Games() {
  const navigate = useNavigate();

  const handleClick = (gameName) => {
    switch (gameName) {
      case "Football-studio":
        navigate("/games/football-studio");
        break;
      case "Mines":
        navigate("/games/mines");
        break;
      case "Tiger":
        navigate("/games/tiger");
        break;
      // Adicione outros jogos aqui conforme necessário...
      default:
        console.warn("No route found for:", gameName);
    }
  };

  const gamesList = [
    { name: "Football-studio", img: cardsImg, available: true },
    { name: "Mines", img: minesImg, available: true },
    { name: "Tiger", img: fortuneImg, available: true },
    { name: "BacBo", img: bacImg, available: false },
    { name: "Aviator", img: aviatorImg, available: false },
  ];

  return (
    <div
    className="games-background"
    style={{ backgroundImage: `url(${backgroundImg})` }}
    >
    <HeaderLogo />
      <div className="scroll-container">
        <div className="floating-text-box">
          <h2 className="floating-text">
            🎮 ESCOLHA O JOGO QUE VOCÊ DESEJA HACKEAR 🎮
          </h2>
        </div>

        <div className="floating-text-box">
          <h3 className="floating-subtext">
            POSSÍVEL FALHA 🔐 HACK CONFIRMADO 🎉
          </h3>
        </div>

        <div className="games-grid">
          {gamesList.map((game, index) => (
            <div
              key={index}
              className={`game-card ${!game.available && "disabled"}`}
              onClick={() => game.available && handleClick(game.name)}
            >
              <img src={game.img} className="game-img" alt={game.name} />
              {!game.available && (
                <div className="coming-soon-overlay">
                  <span className="coming-soon-text">Em Breve</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;
