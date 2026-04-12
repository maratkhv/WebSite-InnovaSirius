import React, { useEffect, useRef, useState } from 'react';
import './Principle.css';

const cardData = [
  { id: 1, title: 'Точное обнаружение аэрозолей', text: <>Чувствительные сенсоры непрерывно анализируют состав воздуха. Они <span className="highlight">точно распознают</span> микрочастицы пара от вейпов и электронных сигарет, <span className="highlight">исключая ложные реакции</span> на другие запахи.</> },
  { id: 2, title: 'Надежность и экономия', text: <>Сердце устройства — надежный российский <span className="highlight">микроконтроллер MIK32 AMUR.</span> Модульная конструкция позволяет легко обновлять сменные сенсоры по истечении их ресурса, не переплачивая за покупку нового устройства целиком.</> },
  { id: 3, title: 'Стабильная передача сигнала', text: <>Базовая передача данных идет по <span className="highlight">Wi-Fi.</span> Для школ и объектов с нестабильным интернетом или строгими правилами безопасности предусмотрена конфигурация с передачей сигнала <span className="highlight">по независимому радиоканалу.</span></> },
  { id: 4, title: 'Моментальное оповещение о правонарушениях', text: <>Как только датчик улавливает пар, система <span className="highlight">без задержек</span> отправляет уведомление в приложение. Вы можете самостоятельно настраивать пороги чувствительности под конкретное помещение.</> },
  { id: 6, title: 'Удобное управление и статистика', text: <>Вся настройка системы происходит <span className="highlight">в пару кликов через приложение.</span> Умные алгоритмы автоматически собирают статистику нарушений и формируют наглядные отчеты за день, неделю или месяц.</> },
  { id: 5, title: 'Оперативная реакция на инциденты', text: <>Мгновенное информирование позволяет персоналу или охране пресечь нарушение <span className="highlight">«здесь и сейчас».</span> Качественный мониторинг резко <span className="highlight">снижает</span> количество повторных инцидентов на объекте.</> },
  { id: 8, title: 'Простая установка и защита', text: <>Устройство <span className="highlight">легко</span> крепится на потолок и защищено надежным антивандальным корпусом. Работает как полностью <span className="highlight">автономно,</span> так и легко интегрируется в уже существующую инфраструктуру «умного здания».</> },
  { id: 7, title: 'Зоны применения', text: <>Система закрывает <span className="highlight">главный пробел</span> в безопасности — мониторинг зон, где по закону запрещены камеры видеонаблюдения. Идеальное решение для туалетов, душевых, раздевалок и закрытых кабин.</> }
];

const Arrow = () => (
  <div className="principle__arrow-wrapper">
    <div className="principle__arrow-line"></div>
  </div>
);

export default function Principle() {
  return (
    <section className="principle">
      <div className="principle__container">
        <h2 className="principle__title">Принцип работы устройства</h2>
        <p className="principle__subtitle">
          Для более детальной информации наведите на карточку
        </p>
        <div className="principle__grid">
          <Card {...cardData[0]} className="pos-1" />
          <Card {...cardData[1]} className="pos-2" />
          <Arrow />
          <Card {...cardData[2]} className="pos-3" />
          <Arrow />
          <Card {...cardData[3]} className="pos-4" />
          <Card {...cardData[4]} className="pos-5" />
          <Arrow />
          <Card {...cardData[5]} className="pos-6" />
          <Card {...cardData[6]} className="pos-7" />
          <Arrow />
          <Card {...cardData[7]} className="pos-8" />
        </div>
      </div>
    </section>
  );
}

function Card({ title, text, className = '' }) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`principle__card ${className} ${isActive ? 'is-active' : ''}`}
    >
      <div className="principle__card-bg"></div>
      <div className="principle__card-content">
        <h3 className="principle__card-title">{title}</h3>
        <div className="principle__card-text">{text}</div>
      </div>
      <div className="principle__mobile-arrow">
        <div className="principle__mobile-arrow-line"></div>
      </div>
    </div>
  );
}