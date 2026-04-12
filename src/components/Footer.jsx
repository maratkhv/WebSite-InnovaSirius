import './Footer.css';
import pdf from '../assets/pdf/Политика конфиденциальности персональных данных InnovsSirius.pdf';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('order-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="footer__info">
            <h2 className="footer__title">Контакты</h2>
            
            <div className="footer__contact-block">
              <p className="footer__text">Руководитель проекта</p>
              <p className="footer__text">Гнибеда Михаил Сергеевич</p>
              <a className="footer__text">+7 (982) 158 81-95</a>
              <a className="footer__text">mixailgnibeda@gmail.com</a>
            </div>

            <div className="footer__contact-block">
              <p className="footer__text">Компания</p>
              <a className="footer__text">InnovaSirius@mail.ru</a>
            </div>

            <button className="footer__btn" onClick={scrollToForm}>Оставить заявку</button>
          </div>

          <button className="footer__scroll-top" onClick={scrollToTop}>
                <span className="footer__arrow"></span> 
          </button>
        </div>

        <div className="footer__bottom">
          <p className="footer__legal">
            Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с <a href={pdf}>политикой конфиденциальности персональных данных.</a>
          </p>
          <p className="footer__copyright">© 2026 - Все права защищены</p>
        </div>

      </div>
    </footer>
  );
}