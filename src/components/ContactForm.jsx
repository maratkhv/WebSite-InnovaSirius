import React, { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
    agreement: false,
    promo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="order-form" className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <h2 className="contact__title">Связаться с командой</h2>
          <p className="contact__subtitle">
            Оставьте данные и мы свяжемся с вами в течение 2-х рабочих дней
          </p>

          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__row">
              <input 
                type="text" 
                name="firstName" 
                placeholder="Имя" 
                className="contact__input"
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="company" 
                placeholder="Организация" 
                className="contact__input"
                onChange={handleChange}
              />
            </div>

            <div className="contact__row">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Телефон" 
                className="contact__input"
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail" 
                className="contact__input"
                onChange={handleChange}
              />
            </div>

            <div className="contact__row contact__row--full">
             <textarea 
              name="message" 
              placeholder="Опишите свою проблему" 
              className="contact__input contact__textarea"
              rows="1"
              onChange={handleChange}
             ></textarea>
            </div>

            <div className="contact__checkboxes">
              <label className="contact__checkbox-label">
                <input 
                  type="checkbox" 
                  name="agreement" 
                  className="contact__checkbox-hidden"
                  onChange={handleChange}
                />
                <span className="contact__checkbox-custom"></span>
                Даю согласие на обработку персональных данных
              </label>

              <label className="contact__checkbox-label">
                <input 
                  type="checkbox" 
                  name="promo" 
                  className="contact__checkbox-hidden"
                  onChange={handleChange}
                />
                <span className="contact__checkbox-custom"></span>
                Даю согласие на получение рекламных рассылок и персональных предложений
              </label>
            </div>

            <button type="submit" className="contact__btn">
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}