import "./Portfolio.css";
import portfolioLink from "../../images/Portfolio/link.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <ul className="portfolio__project-container">
        <li className="portfolio__project portfolio__line">
          <a
            className="portfolio__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Статичный сайт</p>
            <img src={portfolioLink} alt="Ссылка на проект" />
          </a>
        </li>
        <li className="portfolio__project portfolio__line">
          <a
            className="portfolio__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">Адаптивный сайт</p>
            <img src={portfolioLink} alt="Ссылка на проект" />
          </a>
        </li>
        <li className="portfolio__project">
          <a
            className="portfolio__link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__project-name">
              Одностраничное приложение
              </p>
            <img src={portfolioLink} alt="Ссылка на проект" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
