import './AboutProject.css';

function AboutProject() {
  return (
    <section className="project">
      <div className="project__container">
        <h2 className="project__title">О проекте</h2>
        <div className="project__info">
          <div className="project__info-column">
            <h3 className="project__info-title">Дипломный проект включал 5&nbsp;этапов</h3>
            <p className="project__info-about">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
          </div>
          <div className="project__info-column">
            <h3 className="project__info-title">На&nbsp;выполнение диплома ушло 5&nbsp;недель</h3>
            <p className="project__info-about">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="project__time">
          <div className="project__part project__part_first">1 неделя</div>
          <div className="project__part project__part_second">4 недели</div>
          <div className="project__part">Back-end</div>
          <div className="project__part">Front-end</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
