import React from 'react';
import './Possible.css';
import sensorImg from '../assets/photos/main2.png';
import shapeBg from '../assets/svg/Line.svg';
import icon1 from '../assets/photos/NoEye.png';
import icon2 from '../assets/photos/Smoke.png';
import icon3 from '../assets/photos/OK.png';
import icon4 from '../assets/photos/BELL.png';

const scrollToForm = () => {
    const formElement = document.getElementById('order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

const features = [
  {
    icon: icon1,
    text: "Анти-вейп система работает там, где запрещено видеонаблюдение (туалеты, раздевалки, кабинки)"
  },
  {
    icon: icon2,
    text: "Датчик улавливает пары глицерина, пропиленгликоля и никотина всего за 5 секунд"
  },
  {
    icon: icon3,
    text: "Умная система отличает пар от других аэрозолей, исключая ложные тревоги"
  },
  {
    icon: icon4,
    text: "Мгновенно отправляет уведомления ответственному персоналу при срабатывании системы"
  }
];

export default function Possible() {
  return (
    <section className="possible">
      <div className="container">
        <h2 className="possible__title">Мониторинг — возможен</h2>
        
        <div className="possible__grid">
          <div className="possible__visual">
            <img src={shapeBg} alt="" className="possible__shape" />
            <img src={sensorImg} alt="Датчик" className="possible__sensor" />
          </div>
          <div className="possible__content">
            <h3 className="possible__subtitle">
              Инновационное решение для обнаружения паров электронных сигарет
            </h3>

            <ul className="possible__list">
              {features.map((item, index) => (
                <li key={index} className="possible__item">
                  <div className="possible__icon-wrapper">
                    <img src={item.icon} alt="" />
                  </div>
                  <p className="possible__item-text">{item.text}</p>
                </li>
              ))}
            </ul>

            <button className="possible__btn" onClick={scrollToForm}>Оставить заявку</button>
          </div>
        </div>
      </div>
    </section>
  );
}