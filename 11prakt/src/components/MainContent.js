import React from 'react';
import '../styles/MainContent.css';
import Figures from '../assets/Figures.png';
import BackgroundImage from '../assets/Background-image.png';
import Titel from '../assets/TITEL.png';

const MainContent = () => {
  return (
    <div className="container">
      <div className="fuf">
        <div className="fuf1">
          <img className="figure" src={Figures} alt="Figures" />
          <img className="back" src={BackgroundImage} alt="Background" />
          <p className="text-wrapper">TITEL не связан с Mojang AB, все средства идут на развитие проекта.</p>
          <div className="Button-start">
            <div className="div">Начать игру.</div>
          </div>
          <p className="p">
            ВЫ ОКУНЕТЕСЬ В МИР НОВЫХ ПРИКЛЮЧЕНИЙ!<br />ВАС ЖДЕТ АТМОСФЕРНОЕ ВЫЖИВАНИЕ <br /> НОВЫЕ ЗНАКОМСТВА, КУЧА ЭМОЦИЙ<br />И МНОГОЕ ДРУГОЕ.
          </p>
          <div className="label"><img className="ttt" src={Titel} alt="TITEL" /></div>
          <div className="div-2">
            <div className="text-wrapper-3">Поддержка версии - 1.16.5</div>
            <div className="text-wrapper-3">Игроков онлайн: 495</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
