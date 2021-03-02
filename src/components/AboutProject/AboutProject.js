import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
        <div className="section-title">
          <h2 className="section-title-text">О проекте</h2>
        </div>
        <div className="about-project__info">
          <div className="about-project__info-section">
            <h3 className="about-project__info-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__info-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__info-section">
            <h3 className="about-project__info-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__info-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__time">
          <div className="about-project__time_backend">
            <p className="about-project__time_backend_text">1 неделя</p>
          </div>
          <div className="about-project__time_frontend">
            <p className="about-project__time_frontend_text">4 недели</p>
          </div>
        </div>
        <div className="about-project__time-info">
          <div className="about-project__time-info_backend">
            <p className="about-project__time-info_text">
              Back-end
            </p>
          </div>
          <div className="about-project__time-info_frontend">
            <p className="about-project__time-info_text">
              Front-end
            </p>
          </div>
        </div>
    </section>
  );
}

export default AboutProject;
