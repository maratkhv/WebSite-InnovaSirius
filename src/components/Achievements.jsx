import { useState } from 'react';
import './Achievements.css';
import shape from '../assets/svg/Union.svg';
import img1 from '../assets/photos/Rectangle 176.png';
import img2 from '../assets/photos/Rectangle 177.png';
import img3 from '../assets/photos/Rectangle 178.png';
import img4 from '../assets/photos/Rectangle 179.png';

const slides = [
  { text: "Компания InnovaSirius — резидент Технопарка Высоких Технологий Югры.", img: img1 },
  { text: "Вошли в топ 50 перспективных проектов. Наш проект занял 29 место в топе 50 перспективных проектов в России по версии ПУТП 2025 года.", img: img2 },
  { text: "Устройство прошло тестирование и стабильно обеспечивает мониторинг среды в пространстве “Башня Политех”.", img: img3 },
  { text: "Компания InnovaSirius -- лауреат X Всероссийской конференции техников и изобретателей в Государственной Думе Российской Федерации.", img: img4 }
];

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="achiev">
      <h2 className="achiev__title">Наши достижения</h2>
      <div className="achiev__carousel-wrapper">
        
        {/* Картинки лежат стопкой и плавно меняют прозрачность */}
        <div className="achiev__image-layer">
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide.img} 
              className={`achiev__main-img ${index === currentIndex ? 'is-active' : ''}`} 
              alt="Достижение" 
            />
          ))}
        </div>

        <img src={shape} className="achiev__shape" alt="frame" />

        <div className="achiev__top-layer">
          
          {/* Текст просто берется из массива и меняется мгновенно */}
          <div className="achiev__text-container">
            <p className="achiev__description">
              {slides[currentIndex].text}
            </p>
          </div>
          
          <button className="achiev__btn achiev__btn--prev" onClick={prevSlide}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M15 18L9 12L15 6" />
            </svg>
          </button>
          
          <button className="achiev__btn achiev__btn--next" onClick={nextSlide}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
              <path d="M9 18L15 12L9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}