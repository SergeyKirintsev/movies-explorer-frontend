import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm</p>
        <div className="footer__wrap">
          <p className="footer__copyright">© 2021</p>
          <ul className="footer__link-list">
            <li className="footer__link-item">
              <a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__link-item">
              <a href="https://github.com/SergeyKirintsev" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
            </li>
            <li className="footer__link-item">
              <a href="https://vk.com/kirintsev" className="footer__link" target="_blank" rel="noopener noreferrer">Vkontakte</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
