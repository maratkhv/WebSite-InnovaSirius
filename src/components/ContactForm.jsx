import React, { useState, useEffect } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    agreement: false,
    promo: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false); // Для подсветки ошибок

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    // Валидация важных полей
    const isFormValid = 
      formData.firstName.trim() !== '' && 
      formData.phone.trim() !== '' && 
      formData.email.trim() !== '' && 
      formData.agreement;

    if (!isFormValid) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setIsSuccess(true);
      setAttemptedSubmit(false);
      setFormData({
        firstName: '',
        company: '',
        phone: '',
        email: '',
        message: '',
        agreement: false,
        promo: false
      });
    } catch (err) {
      setIsSubmitting(false);
      setError("Ошибка при отправке. Попробуйте позже.");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const isInvalid = (name) => attemptedSubmit && !formData[name];

  return (
    <section id="order-form" className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <h2 className="contact__title">Связаться с командой</h2>
          <p className="contact__subtitle">
            Оставьте данные и мы свяжемся с вами в течение 2-х рабочих дней
          </p>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <input 
                type="text" 
                name="firstName" 
                placeholder="Имя *" 
                className={`contact__input ${isInvalid('firstName') ? 'contact__input--error' : ''}`}
                value={formData.firstName}
                onChange={handleChange}
              />
              <input 
                type="text" 
                name="company" 
                placeholder="Организация" 
                className="contact__input"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="contact__row">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Телефон *" 
                className={`contact__input ${isInvalid('phone') ? 'contact__input--error' : ''}`}
                value={formData.phone}
                onChange={handleChange}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail *" 
                className={`contact__input ${isInvalid('email') ? 'contact__input--error' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__row contact__row--full">
             <textarea 
              name="message" 
              placeholder="Опишите свою проблему" 
              className="contact__input contact__textarea"
              rows="1"
              value={formData.message}
              onChange={handleChange}
             ></textarea>
            </div>

            <div className="contact__checkboxes">
              <label className={`contact__checkbox-label ${isInvalid('agreement') ? 'contact__checkbox-label--error' : ''}`}>
                <input 
                  type="checkbox" 
                  name="agreement" 
                  className="contact__checkbox-hidden"
                  checked={formData.agreement}
                  onChange={handleChange}
                />
                <span className="contact__checkbox-custom"></span>
                Даю согласие на обработку персональных данных *
              </label>

              <label className="contact__checkbox-label">
                <input 
                  type="checkbox" 
                  name="promo" 
                  className="contact__checkbox-hidden"
                  checked={formData.promo}
                  onChange={handleChange}
                />
                <span className="contact__checkbox-custom"></span>
                Даю согласие на получение рекламных рассылок и персональных предложений
              </label>
            </div>

            <button type="submit" className="contact__btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="dot-loader">
                  <span></span><span></span><span></span>
                </div>
              ) : "Оставить заявку"}
            </button>
            
            {error && <p style={{color: '#ff4d4d', marginTop: '10px'}}>{error}</p>}
          </form>
        </div>
      </div>

      {isSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <h3>Ваша заявка отправлена!</h3>
            <p>Свяжемся с вами по почте в течение 2-х рабочих дней.</p>
            <button className="success-close" onClick={() => setIsSuccess(false)}>Отлично</button>
          </div>
        </div>
      )}
    </section>
  );
}