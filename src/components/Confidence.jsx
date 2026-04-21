import './Confidence.css';
import logo1 from '../assets/logos/ip_a_diapdi_page-0001_1_1.png';
import logo2 from '../assets/logos/Logo_01_WB_page-0001.jpg';
import logo3 from '../assets/logos/head_logo_fasie.png';
import logo4 from '../assets/logos/elron.png';
import logo5 from '../assets/logos/Group 1350.png';

export default function Confidence() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <section className="conf">
      <div className="container conf__container">
        <p className="conf__title">Нам доверяют</p>
        <div className="conf__list">
          {logos.map((logo, index) => (
            <div key={index} className="conf__logo-item">
              <img src={logo} alt={`Logo ${index + 1}`} className="conf__img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}