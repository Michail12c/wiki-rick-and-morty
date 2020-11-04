import React, { useState } from 'react';
import wrapper from './../styles/img/Layer 18 copy.png';
import button from './../styles/img/red1.png';
import styled from 'styled-components';

const StyledProgress = styled.div`
  width: 0%;
  height: 100%;
  background-color: #9ecbe8;
  animation: 1s linear 1s progress;
  animation-fill-mode: forwards;
  @keyframes progress {
    from { width: 0%; }
    to   { width: ${props => props.progressWidth}%}
  }
`;

const BlockModal = () => {

  const [activateProgress, setActivateProgress] = useState(false);
  const [widthProgress, setWidthProgress] = useState(0);

  const progressScale = () => {
    if (activateProgress) {
      setActivateProgress(false);
      setWidthProgress(0);
      return
    }
    let randomNumber = Math.floor(10 + Math.random() * (100 - 10));
    setWidthProgress(randomNumber);
    setActivateProgress(true);
  }

  return (
    <div className="block-modal">
      <div className="modal">

        <img className="img-wrapper" src={wrapper} />
        <img className="img-button" src={button} />

        <div className="section-info">
          <div className="section-info__title">Обучение по продажам</div>
          <div className="section-info__text">Вы сделали 13 продаж и заработали</div>
          <div className="section-info__number">$ 2 000</div>
        </div>

        <div className="section-scale">
          <div className="section-scale__info">Месячный план выполнен на</div>
          <div className="scala-wrapper">
            {activateProgress && <StyledProgress progressWidth={widthProgress} />}
            <span>{`${widthProgress}%`}</span>
          </div>
          <div className="update-scale">
            <button className="update-scale__btn" onClick={progressScale}>
              {!activateProgress ? 'Продолжить' : 'Сбросить'}
            </button>
            <div className="update-scale__text">Осталось 8 дней</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlockModal;