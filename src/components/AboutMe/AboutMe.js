import './AboutMe.css';
import avatar from '../../images/foto.jpg';

function AboutMe() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Студент</h2>

        <div className="about__wrap">
          <div className="about__column about__column_person">
            <h3 className="about__name">Сергей</h3>
            <p className="about__info">Фронтенд-разработчик, 41 год</p>
            <p className="about__description">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики
              СГУ. У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно
              начал кодить. С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл
              курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
            <ul className="about__social">
              <li className="about__social-item">
                <a href="https://facebook.com" className="about__social-link">Facebook</a>
              </li>
              <li className="about__social-item">
                <a href="https://facebook.com" className="about__social-link">Github</a>
              </li>
            </ul>
          </div>
          <div className="about__column about__column_avatar">
            <img className="about__avatar" src={avatar} alt="Фотография"/>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
