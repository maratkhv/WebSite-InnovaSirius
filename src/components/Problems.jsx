import React, { useEffect, useRef, useState } from 'react';import './Problems.css';
import icon1 from '../assets/svg/Up.svg';
import icon2 from '../assets/svg/Respect.svg';
import icon3 from '../assets/svg/NoSmoking.svg';
import icon4 from '../assets/svg/Inform.svg';
import icon5 from '../assets/svg/BigBro.svg';

const problemsData = [
  {
    title: "Эпидемия вейпинга",
    text: "По данным Минздрава, 90% потребителей вейпа — подростки.",
    iconUrl: icon1
  },
  {
    title: "Репутационный риск",
    text: "Жалобы родителей, проверки надзорных органов и порча имиджа — последствия курения внутри вашего объекта.",
    iconUrl: icon2
  },
  {
    title: "Нет цифрового контроля",
    text: "Без технологических систем невозможен полноценный мониторинг ситуации в помещениях.",
    iconUrl: icon3
  },
  {
    title: "Запреты не эффективны",
    text: "Административные меры и формальные запреты не дают результата без инструментов реального контроля.",
    iconUrl: icon4
  },
  {
    title: "Отсутствие мониторинга",
    text: "Организации не имеют инструмента для оперативной фиксации нарушения.",
    iconUrl: icon5
  }
];

export default function Problems() {
  return (
    <section className="problems">
      <div className="container">
        <h2 className="problems__title">
          Курение есть <br /> Мониторинга — нет
        </h2>

        <div className="problems__grid">
          {problemsData.map((item, index) => (
            // Передаем данные в отдельный компонент карточки
            <ProblemCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ item, index }) {
  const cardRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        rootMargin: '-40% 0px -40% 0px', 
        threshold: 0
      }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`problems__card card-${index + 1} ${isActive ? 'is-active' : ''}`}
    >
      <div className="problems__card-bg"></div>
      
      <div className="problems__card-content">
        <div className="problems__icon-container">
          <img src={item.iconUrl} alt={item.title} className="problems__static-icon" />
        </div>
        
        <h3 className="problems__card-title">{item.title}</h3>
        <p className="problems__card-text">{item.text}</p>
      </div>
    </div>
  );
}