import "./AboutMe.css";
import aboutmePhoto from "../../images/AboutMe/about-me.png";

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <div className="section-title">
        <h2 className="section-title-text">Студент</h2>
      </div>
      <div className="about-me__container">
        <div>
          <h3 className="about-me__info_name">Виталий</h3>
          <p className="about-me__info_description">
            Фронтенд-разработчик, 30 лет
            </p>
          <p className="about-me__info_bio">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
          <ul className="about-me__links">
            <li>
              <a
                href="https://www.facebook.com"
                className="about-me__link"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
                </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="about-me__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
                </a>
            </li>
          </ul>
        </div>
        <img
          className="about-me__photo"
          src={aboutmePhoto}
          alt="Личное фото"
        />
      </div>
    </section>
  );
}

export default AboutMe;
